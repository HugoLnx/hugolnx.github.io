import logger from '../js/env/logger';

async function onPageTransitionEnd() {
    logger.debug('Page transition end');
    document.querySelector('body').classList.remove('page-is-transitioning');
}

/* eslint-disable import/prefer-default-export */
export { onPageTransitionEnd };
