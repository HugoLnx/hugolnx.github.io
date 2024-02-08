function onPageTransitionStart() {
    console.log('Page transition start');
    document.querySelector('body').classList.add('page-is-transitioning');
}

/* eslint-disable import/prefer-default-export */
export { onPageTransitionStart };
