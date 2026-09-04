# Assignment Explanation

I created a custom React hook named `useFetch` to make API fetching reusable.

The hook accepts a URL as a parameter and uses `fetch()` inside `useEffect` to request data from the API. It stores the response in `data`, tracks the request status with `loading`, and stores any problem in `error`.

The main `App` component uses `useFetch` with the Picsum Photos API:

`https://picsum.photos/v2/list?page=2&limit=12`

When the data is loading, the app shows a loading message and spinner. If an error happens, it shows an error message. When the data loads successfully, the app displays the photos in a responsive grid.

This makes the code cleaner because API logic is kept inside the custom hook instead of being repeated inside the component.
