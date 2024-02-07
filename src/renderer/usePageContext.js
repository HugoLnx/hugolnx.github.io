// https://vike.dev/usePageContext
import { inject } from 'vue';

export { usePageContext };
export { setPageContext };

const key = Symbol();

/** https://vike.dev/usePageContext */
function usePageContext() {
    const pageContext = inject(key);
    if (!pageContext) throw new Error('setPageContext() not called in parent');
    return pageContext;
}

function setPageContext(app, pageContext) {
    app.provide(key, pageContext);
}
