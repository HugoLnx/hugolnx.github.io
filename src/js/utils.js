export function px(value) {
    const v = Math.round(parseInt(value, 10));
    return `${v}px`;
}

export function preventSequentialCalls(callback, { timeout = 500 } = {}) {
    let timeoutId = null;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        timeoutId = setTimeout(() => {
            callback.apply(this, args);
        }, timeout);
    };
}
