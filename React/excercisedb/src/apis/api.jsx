import axios from 'axios';

const BASE_URL = 'https://exercisedb.p.rapidapi.com';
const API_HOST = 'exercisedb.p.rapidapi.com';

const getApiKey = () => import.meta.env.VITE_RAPIDAPI_KEY?.trim();

const ensureApiKey = () => {
    const apiKey = getApiKey();

    if (!apiKey) {
        throw new Error('Missing VITE_RAPIDAPI_KEY. Add it in your .env file.');
    }

    return apiKey;
};

const request = async (path, params = {}) => {
    const apiKey = ensureApiKey();

    const response = await axios.request({
        method: 'GET',
        url: `${BASE_URL}${path}`,
        params,
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': API_HOST,
            'Content-Type': 'application/json',
        },
    });

    return response.data;
};

export const getApiStatus = () => request('/status');

export const getExercises = ({
    offset = 0,
    limit = 12,
    sortMethod = 'id',
    sortOrder = 'ascending',
} = {}) => request('/exercises', { offset, limit, sortMethod, sortOrder });

export const getExerciseById = (id) => request(`/exercises/exercise/${id}`);

export const searchExercisesByName = (
    name,
    { offset = 0, limit = 12, sortMethod = 'name', sortOrder = 'ascending' } = {},
) => request(`/exercises/name/${encodeURIComponent(name)}`, { offset, limit, sortMethod, sortOrder });

export const getExercisesByBodyPart = (
    bodyPart,
    { offset = 0, limit = 12, sortMethod = 'id', sortOrder = 'ascending' } = {},
) => request(`/exercises/bodyPart/${encodeURIComponent(bodyPart)}`, {
    offset,
    limit,
    sortMethod,
    sortOrder,
});

export const getExercisesByTarget = (
    target,
    { offset = 0, limit = 12, sortMethod = 'id', sortOrder = 'ascending' } = {},
) => request(`/exercises/target/${encodeURIComponent(target)}`, {
    offset,
    limit,
    sortMethod,
    sortOrder,
});

export const getExercisesByEquipment = (
    equipment,
    { offset = 0, limit = 12, sortMethod = 'id', sortOrder = 'ascending' } = {},
) => request(`/exercises/equipment/${encodeURIComponent(equipment)}`, {
    offset,
    limit,
    sortMethod,
    sortOrder,
});

export const getBodyPartList = () => request('/exercises/bodyPartList');

export const getTargetList = () => request('/exercises/targetList');

export const getEquipmentList = () => request('/exercises/equipmentList');

export const getExerciseImageUrl = (exerciseId, resolution = 360) => {
    const apiKey = getApiKey();
    const safeResolution = String(resolution);

    if (!apiKey || !exerciseId) {
        return null;
    }

    const searchParams = new URLSearchParams({
        exerciseId: String(exerciseId),
        resolution: safeResolution,
        'rapidapi-key': apiKey,
    });

    return `${BASE_URL}/image?${searchParams.toString()}`;
};