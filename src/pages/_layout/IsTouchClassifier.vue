<script setup>
import { onMounted, onUnmounted } from 'vue';

const TOUCH_CLASSNAME = 'is-touch';
const MOUSE_CLASSNAME = 'is-mouse';

let latestTouch = 0;
let latestAction = null;

function registerTouchAction() {
    latestTouch = new Date().getTime();
    if (latestAction === TOUCH_CLASSNAME) return;
    latestAction = TOUCH_CLASSNAME;
    document.body.classList.add(TOUCH_CLASSNAME);
    document.body.classList.remove(MOUSE_CLASSNAME);
}

function registerMouseAction() {
    if (latestAction === MOUSE_CLASSNAME) return;
    const isEmulatedMouse = new Date().getTime() - latestTouch < 500;
    if (isEmulatedMouse) return;
    latestAction = MOUSE_CLASSNAME;
    document.body.classList.add(MOUSE_CLASSNAME);
    document.body.classList.remove(TOUCH_CLASSNAME);
}

function hasTouchSupport() {
    // Initial touch verification
    return (
        ('ontouchstart' in window)
        || (navigator.maxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0)
    );
}

onMounted(() => {
    if (hasTouchSupport()) {
        registerTouchAction();
    } else {
        registerMouseAction();
    }
    window.addEventListener('touchstart', registerTouchAction);
    window.addEventListener('mousemove', registerMouseAction);
});

onUnmounted(() => {
    window.removeEventListener('touchstart', registerTouchAction);
    window.removeEventListener('mousemove', registerMouseAction);
});
</script>
