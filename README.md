# Task 5: React Custom Hooks

This assignment creates a custom `useFetch` hook in React and uses it to fetch photos from an API.

## Features

- Custom hook named `useFetch`
- Accepts a URL parameter
- Returns `data`, `loading`, and `error`
- Handles loading and fetch errors
- Displays API data in a responsive photo grid

## API Used

`https://picsum.photos/v2/list?page=2&limit=12`

## Run the Project

```bash
npm install
npm run dev
```

If `npm` is not installed on your computer, open `standalone.html` in a browser. It contains the same `useFetch` hook and UI in one file for easy checking.

## Build for Submission

```bash
npm run build
```

The project can be deployed on Netlify by connecting the GitHub repository and using:

- Build command: `npm run build`
- Publish directory: `dist`
