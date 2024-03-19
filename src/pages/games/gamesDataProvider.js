import spookyTyping from '../../data/games/spooky-typing.yaml';
import smashingSpirits from '../../data/games/smashing-spirits.yaml';
import tyfortress from '../../data/games/tyfortress.yaml';
import tybotInvasion from '../../data/games/tybot-invasion.yaml';
import neonShips from '../../data/games/neon-ships.yaml';
import typomancer from '../../data/games/typomancer.yaml';
import kingBullseye from '../../data/games/king-bullseye.yaml';
import sniperShips from '../../data/games/sniper-ships.yaml';
import xanAdventure from '../../data/games/xan-adventure.yaml';
import witchCircles from '../../data/games/witch-circles.yaml';
import sunseek from '../../data/games/sunseek.yaml';
import garby from '../../data/games/garby.yaml';
import triviaMaze from '../../data/games/trivia-maze.yaml';
import siteData from '../../data/site.yml';

const PAGE_ID = 'games';
const PRELOADED_VIDEOS_COUNT = 0;
const PRELOADED_POSTERS_COUNT = 5;

const pageData = siteData.pages.find((page) => page.id === PAGE_ID);

const games = [
    smashingSpirits,
    neonShips,
    triviaMaze,
    tyfortress,
    garby,
    spookyTyping,
    typomancer,
    kingBullseye,
    witchCircles,
    sunseek,
    xanAdventure,
    tybotInvasion,
    sniperShips,
];

for (let i = 0; i < games.length; i += 1) {
    games[i] = JSON.parse(JSON.stringify(games[i]));
}

for (let i = 0; i < PRELOADED_VIDEOS_COUNT; i += 1) {
    games[i].doPreloadVideo = true;
}

for (let i = 0; i < PRELOADED_POSTERS_COUNT; i += 1) {
    games[i].doPreloadPoster = true;
}

export default {
    games,
    title: pageData.subtitle,
};
