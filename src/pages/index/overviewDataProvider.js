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

const games = [
    spookyTyping,
    smashingSpirits,
    tyfortress,
    tybotInvasion,
    neonShips,
    typomancer,
    kingBullseye,
    sniperShips,
    xanAdventure,
    witchCircles,
    triviaMaze,
    garby,
    sunseek,
];

// const newGames = games.flatMap((game) => {
//     const newGame = JSON.parse(JSON.stringify(game));
//     const newGame2 = JSON.parse(JSON.stringify(game));
//     newGame.links.previewLow = newGame.links.previewLow.replace(/-mid/g, '-low');
//     newGame.shortTitle += ' (Low)';
//     newGame2.shortTitle += ' (Mid)';
//     return [newGame2, newGame];
// });

const data = {
    games,
};

export default data;