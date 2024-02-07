import { data } from '../index/+data.js';

export { onBeforePrerenderStart };

async function onBeforePrerenderStart() {
    const { movies } = await data();
    const moviePageURLs = movies.map((movie) => `/star-wars/${movie.id}`);
    return moviePageURLs;
}
