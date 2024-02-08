/* eslint-disable class-methods-use-this */
class EnvWrapper {
    #isDebugForced = false;
    #onDebugForceChangeCallbacks = [];

    get name() {
        return import.meta.env.MODE;
    }

    get isProduction() {
        return import.meta.env.PROD === true || this.name === 'production';
    }

    get isDev() {
        return !this.isProduction;
    }

    get isStaging() {
        return this.isDev();
    }

    get isDebugging() {
        return this.isDev || this.#isDebugForced;
    }

    set forceDebug(value) {
        this.#isDebugForced = value;
        for (const callback of this.#onDebugForceChangeCallbacks) {
            callback();
        }
    }

    get forceDebug() {
        return this.#isDebugForced;
    }

    onDebugForceChange(callback) {
        this.#onDebugForceChangeCallbacks.push(callback);
    }
}

export default new EnvWrapper();
