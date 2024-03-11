export function px(value) {
    return `${value}px`;
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
