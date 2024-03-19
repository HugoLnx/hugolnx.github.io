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

export default {
    games,
    title: pageData.subtitle,
};
