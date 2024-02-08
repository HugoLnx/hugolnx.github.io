import logger from 'js-logger';
import env from './env';

function getLevel() {
    if (env.isDebugging) return logger.DEBUG;
    if (env.isDev) return logger.INFO;
    return logger.WARN;
}

logger.useDefaults({
    defaultLevel: getLevel(),
});

env.onDebugForceChange(() => {
    logger.setLevel(getLevel());
});

export default logger;
