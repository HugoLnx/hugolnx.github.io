async function onPageTransitionEnd() {
    console.log('Page transition end');
    document.querySelector('body').classList.remove('page-is-transitioning');
}

/* eslint-disable import/prefer-default-export */
export { onPageTransitionEnd };
