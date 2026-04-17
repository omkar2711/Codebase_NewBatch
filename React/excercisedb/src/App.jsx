import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import {
  getApiStatus,
  getBodyPartList,
  getEquipmentList,
  getExerciseById,
  getExerciseImageUrl,
  getExercises,
  getExercisesByBodyPart,
  getExercisesByEquipment,
  getExercisesByTarget,
  getTargetList,
  searchExercisesByName,
} from './apis/api';

const DEFAULT_FILTERS = {
  query: '',
  bodyPart: 'all',
  target: 'all',
  equipment: 'all',
  sortMethod: 'name',
  sortOrder: 'ascending',
  offset: 0,
  limit: 12,
};

const SORT_METHODS = ['id', 'name', 'bodyPart', 'target', 'equipment', 'difficulty'];
const SORT_ORDERS = ['ascending', 'descending'];
const IMAGE_RESOLUTIONS = [180, 360, 720, 1080];

const capitalize = (value = '') =>
  value
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ');

const fallbackByFilter = ({ bodyPart, target, equipment }) => {
  if (bodyPart !== 'all') return `Body part: ${capitalize(bodyPart)}`;
  if (target !== 'all') return `Target: ${capitalize(target)}`;
  if (equipment !== 'all') return `Equipment: ${capitalize(equipment)}`;
  return 'Whole library';
};

const App = () => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [bodyParts, setBodyParts] = useState([]);
  const [targets, setTargets] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [apiStatus, setApiStatus] = useState('checking');
  const [apiStatusMessage, setApiStatusMessage] = useState('Checking API availability...');
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [imageResolution, setImageResolution] = useState(360);
  const [planSeed, setPlanSeed] = useState(0);
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('gym-beginner-favorites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('gym-beginner-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const checkApiHealth = useCallback(async () => {
    setApiStatus('checking');
    setApiStatusMessage('Checking API availability...');

    try {
      const statusPayload = await getApiStatus();
      setApiStatus('online');
      setApiStatusMessage(
        typeof statusPayload === 'string' ? statusPayload : 'All services are reachable.',
      );
    } catch (healthError) {
      setApiStatus('offline');
      setApiStatusMessage(healthError.message || 'Could not reach ExerciseDB API.');
    }
  }, []);

  const fetchReferenceData = useCallback(async () => {
    try {
      const [parts, targetList, equipmentList] = await Promise.all([
        getBodyPartList(),
        getTargetList(),
        getEquipmentList(),
      ]);

      setBodyParts(Array.isArray(parts) ? parts : []);
      setTargets(Array.isArray(targetList) ? targetList : []);
      setEquipments(Array.isArray(equipmentList) ? equipmentList : []);
    } catch (referenceError) {
      setError(referenceError.message || 'Unable to load metadata lists.');
    }
  }, []);

  const fetchExercises = useCallback(async () => {
    setIsLoading(true);
    setError('');

    const query = filters.query.trim();
    const requestOptions = {
      offset: filters.offset,
      limit: filters.limit,
      sortMethod: filters.sortMethod,
      sortOrder: filters.sortOrder,
    };

    try {
      let data = [];

      if (query) {
        data = await searchExercisesByName(query, requestOptions);
      } else if (filters.bodyPart !== 'all') {
        data = await getExercisesByBodyPart(filters.bodyPart, requestOptions);
      } else if (filters.target !== 'all') {
        data = await getExercisesByTarget(filters.target, requestOptions);
      } else if (filters.equipment !== 'all') {
        data = await getExercisesByEquipment(filters.equipment, requestOptions);
      } else {
        data = await getExercises(requestOptions);
      }

      const safeList = Array.isArray(data) ? data : [];

      const filtered = safeList.filter((exercise) => {
        const bodyPartMatch =
          filters.bodyPart === 'all' ||
          exercise.bodyPart?.toLowerCase() === filters.bodyPart.toLowerCase();
        const targetMatch =
          filters.target === 'all' || exercise.target?.toLowerCase() === filters.target.toLowerCase();
        const equipmentMatch =
          filters.equipment === 'all' ||
          exercise.equipment?.toLowerCase() === filters.equipment.toLowerCase();
        return bodyPartMatch && targetMatch && equipmentMatch;
      });

      setExercises(filtered);
    } catch (fetchError) {
      setError(fetchError.message || 'Failed to fetch exercises.');
      setExercises([]);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    checkApiHealth();
    fetchReferenceData();
  }, [checkApiHealth, fetchReferenceData]);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  const beginnerCount = useMemo(
    () => exercises.filter((exercise) => (exercise.difficulty || '').toLowerCase() === 'beginner').length,
    [exercises],
  );

  const categoryCount = useMemo(() => {
    const categories = new Set(exercises.map((exercise) => exercise.category).filter(Boolean));
    return categories.size;
  }, [exercises]);

  const workoutPlan = useMemo(() => {
    const pool = [...exercises].sort((a, b) => {
      const first = `${a.id}-${a.name}-${planSeed}`;
      const second = `${b.id}-${b.name}-${planSeed}`;
      return first.localeCompare(second);
    });
    return pool.slice(0, 3);
  }, [exercises, planSeed]);

  const favoriteExercises = useMemo(
    () => exercises.filter((exercise) => favorites.includes(exercise.id)),
    [exercises, favorites],
  );

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      offset: key === 'offset' ? value : 0,
    }));
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const toggleFavorite = (exerciseId) => {
    setFavorites((prev) =>
      prev.includes(exerciseId) ? prev.filter((item) => item !== exerciseId) : [...prev, exerciseId],
    );
  };

  const openExercise = async (exercise) => {
    setSelectedExercise(exercise);
    setDetailLoading(true);

    try {
      const detailed = await getExerciseById(exercise.id);
      setSelectedExercise(detailed);
    } catch {
      setSelectedExercise(exercise);
    } finally {
      setDetailLoading(false);
    }
  };

  const currentScopeLabel = fallbackByFilter(filters);

  return (
    <div className="app-shell">
      <div className="bg-glow bg-glow-left" />
      <div className="bg-glow bg-glow-right" />

      <header className="topbar">
        <div>
          <p className="eyebrow">Gym Beginner Hub</p>
          <h1>Build confidence, one rep at a time.</h1>
        </div>

        <div className="header-actions">
          <button className="button ghost" onClick={checkApiHealth} type="button">
            Check API
          </button>

          <label className="resolution-control" htmlFor="resolution">
            GIF Quality
            <select
              id="resolution"
              value={imageResolution}
              onChange={(event) => setImageResolution(Number(event.target.value))}
            >
              {IMAGE_RESOLUTIONS.map((resolution) => (
                <option key={resolution} value={resolution}>
                  {resolution}px
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <section className="hero-panel">
        <div className="status-row">
          <span className={`status-dot ${apiStatus}`} />
          <p>{apiStatusMessage}</p>
        </div>

        <div className="search-grid">
          <label>
            Search exercise name
            <input
              value={filters.query}
              onChange={(event) => handleFilterChange('query', event.target.value)}
              placeholder="e.g. incline dumbbell curl"
            />
          </label>

          <label>
            Body part
            <select
              value={filters.bodyPart}
              onChange={(event) => handleFilterChange('bodyPart', event.target.value)}
            >
              <option value="all">All body parts</option>
              {bodyParts.map((part) => (
                <option key={part} value={part}>
                  {capitalize(part)}
                </option>
              ))}
            </select>
          </label>

          <label>
            Target muscle
            <select value={filters.target} onChange={(event) => handleFilterChange('target', event.target.value)}>
              <option value="all">All targets</option>
              {targets.map((target) => (
                <option key={target} value={target}>
                  {capitalize(target)}
                </option>
              ))}
            </select>
          </label>

          <label>
            Equipment
            <select
              value={filters.equipment}
              onChange={(event) => handleFilterChange('equipment', event.target.value)}
            >
              <option value="all">All equipment</option>
              {equipments.map((equipment) => (
                <option key={equipment} value={equipment}>
                  {capitalize(equipment)}
                </option>
              ))}
            </select>
          </label>

          <label>
            Sort by
            <select
              value={filters.sortMethod}
              onChange={(event) => handleFilterChange('sortMethod', event.target.value)}
            >
              {SORT_METHODS.map((method) => (
                <option key={method} value={method}>
                  {capitalize(method)}
                </option>
              ))}
            </select>
          </label>

          <label>
            Sort order
            <select
              value={filters.sortOrder}
              onChange={(event) => handleFilterChange('sortOrder', event.target.value)}
            >
              {SORT_ORDERS.map((order) => (
                <option key={order} value={order}>
                  {capitalize(order)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="hero-actions">
          <button className="button" type="button" onClick={() => setPlanSeed((prev) => prev + 1)}>
            Generate Beginner Plan
          </button>
          <button className="button ghost" type="button" onClick={resetFilters}>
            Clear Filters
          </button>
        </div>
      </section>

      <section className="stats-grid">
        <article>
          <p className="label">Current scope</p>
          <h3>{currentScopeLabel}</h3>
        </article>
        <article>
          <p className="label">Loaded exercises</p>
          <h3>{exercises.length}</h3>
        </article>
        <article>
          <p className="label">Beginner options</p>
          <h3>{beginnerCount}</h3>
        </article>
        <article>
          <p className="label">Training categories</p>
          <h3>{categoryCount}</h3>
        </article>
      </section>

      <section className="content-grid">
        <div className="main-column">
          <div className="section-header">
            <h2>Explore Exercises</h2>
            <div className="pager">
              <button
                type="button"
                className="button ghost"
                disabled={filters.offset === 0 || isLoading}
                onClick={() => handleFilterChange('offset', Math.max(filters.offset - filters.limit, 0))}
              >
                Previous
              </button>
              <span>
                Offset {filters.offset} • Limit {filters.limit}
              </span>
              <button
                type="button"
                className="button ghost"
                disabled={isLoading || exercises.length < filters.limit}
                onClick={() => handleFilterChange('offset', filters.offset + filters.limit)}
              >
                Next
              </button>
            </div>
          </div>

          {error ? <p className="error-message">{error}</p> : null}

          {isLoading ? <p className="loading">Loading exercises...</p> : null}

          {!isLoading && exercises.length === 0 ? (
            <p className="empty-state">No results for this combination yet. Try changing one filter.</p>
          ) : null}

          <div className="exercise-grid">
            {exercises.map((exercise) => {
              const imageUrl = getExerciseImageUrl(exercise.id, imageResolution);
              const isFavorite = favorites.includes(exercise.id);

              return (
                <article className="exercise-card" key={exercise.id}>
                  <img
                    src={imageUrl || exercise.gifUrl}
                    alt={exercise.name}
                    loading="lazy"
                    onError={(event) => {
                      if (event.currentTarget.src !== exercise.gifUrl) {
                        event.currentTarget.src = exercise.gifUrl;
                      }
                    }}
                  />

                  <div className="exercise-body">
                    <div className="badge-row">
                      <span>{capitalize(exercise.bodyPart)}</span>
                      <span>{capitalize(exercise.target)}</span>
                    </div>

                    <h3>{capitalize(exercise.name)}</h3>

                    <p>
                      {capitalize(exercise.equipment)} • {capitalize(exercise.difficulty || 'all levels')}
                    </p>

                    <div className="card-actions">
                      <button className="button" type="button" onClick={() => openExercise(exercise)}>
                        View details
                      </button>
                      <button className="button ghost" type="button" onClick={() => toggleFavorite(exercise.id)}>
                        {isFavorite ? 'Remove favorite' : 'Save favorite'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="side-column">
          <section className="panel">
            <h3>Today's Beginner Plan</h3>
            {workoutPlan.length === 0 ? (
              <p>Pick filters to generate a three-exercise starter plan.</p>
            ) : (
              <ol>
                {workoutPlan.map((item) => (
                  <li key={item.id}>
                    <strong>{capitalize(item.name)}</strong>
                    <span>{capitalize(item.target)} • 3 sets</span>
                  </li>
                ))}
              </ol>
            )}
          </section>

          <section className="panel">
            <h3>Favorite Exercises</h3>
            {favoriteExercises.length === 0 ? (
              <p>Save a few exercises to build your personal routine.</p>
            ) : (
              <ul>
                {favoriteExercises.map((item) => (
                  <li key={item.id}>
                    <strong>{capitalize(item.name)}</strong>
                    <span>{capitalize(item.bodyPart)}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </aside>
      </section>

      {selectedExercise ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedExercise(null)}>
          <section className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="close-button" type="button" onClick={() => setSelectedExercise(null)}>
              Close
            </button>

            {detailLoading ? <p>Loading details...</p> : null}

            <img
              src={getExerciseImageUrl(selectedExercise.id, imageResolution) || selectedExercise.gifUrl}
              alt={selectedExercise.name}
              onError={(event) => {
                if (event.currentTarget.src !== selectedExercise.gifUrl) {
                  event.currentTarget.src = selectedExercise.gifUrl;
                }
              }}
            />

            <h2>{capitalize(selectedExercise.name)}</h2>
            <p>
              {capitalize(selectedExercise.bodyPart)} • {capitalize(selectedExercise.target)} •{' '}
              {capitalize(selectedExercise.equipment)}
            </p>

            <p className="description-text">{selectedExercise.description || 'No description available.'}</p>

            <h4>Instructions</h4>
            <ol>
              {selectedExercise.instructions?.length
                ? selectedExercise.instructions.map((step, index) => <li key={`${step}-${index}`}>{step}</li>)
                : [
                    <li key="fallback">
                      Focus on controlled movement, full range of motion, and breathing throughout each rep.
                    </li>,
                  ]}
            </ol>
          </section>
        </div>
      ) : null}
    </div>
  );
};

export default App;
