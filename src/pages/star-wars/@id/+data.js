// https://vike.dev/data
import fetch from 'cross-fetch';

export { data };

const data = async (pageContext) => {
    // simulate a slow network
    await sleep(1000);
    const response = await fetch(`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`);
    let movie = await response.json();

    // We remove data we don't need because the data is passed to the client; we should
    // minimize what is sent over the network.
    movie = minimize(movie);

    return {
        movie,
        // The page's <title>
        title: movie.title,
    };
};

function minimize(movie) {
    const {
        id, title, release_date, director, producer,
    } = movie;
    movie = {
        id, title, release_date, director, producer,
    };
    return movie;
}

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
