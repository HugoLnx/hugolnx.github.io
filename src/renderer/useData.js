// https://vike.dev/useData
import { computed } from 'vue';
import { usePageContext } from './usePageContext';

export { useData };

/** https://vike.dev/useData */
function useData() {
    const data = computed(() => usePageContext().data);
    return data;
}
