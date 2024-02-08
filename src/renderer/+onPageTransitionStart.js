import logger from '../js/env/logger';

async function onPageTransitionStart() {
    logger.debug('Page transition start');
    document.querySelector('body').classList.add('page-is-transitioning');
}

/* eslint-disable import/prefer-default-export */
export { onPageTransitionStart };
