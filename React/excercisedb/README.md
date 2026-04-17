# Gym Beginner Hub (ExerciseDB)

A modern beginner-friendly fitness frontend built with React + Vite and powered by the ExerciseDB API on RapidAPI.

## Features

- API health check (`GET /status`)
- Full exercise browsing with pagination (`GET /exercises`)
- Search by name (`GET /exercises/name/{name}`)
- Filter by body part (`GET /exercises/bodyPart/{bodyPart}`)
- Filter by target muscle (`GET /exercises/target/{target}`)
- Filter by equipment (`GET /exercises/equipment/{equipment}`)
- Metadata lists for selectors:
	- `GET /exercises/bodyPartList`
	- `GET /exercises/targetList`
	- `GET /exercises/equipmentList`
- Exercise detail view (`GET /exercises/exercise/{id}`)
- GIF image streaming with quality control (`GET /image`)
- Favorites persistence in local storage
- Beginner plan generator

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create your env file:

```bash
cp .env.example .env
```

3. Add your RapidAPI key in `.env`:

```env
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
```

4. Start the app:

```bash
npm run dev
```

## Notes

- The app intentionally uses live API calls and does not cache ExerciseDB content.
- The image endpoint uses the API key as a query parameter because image streaming is rendered directly in `<img>` tags.
