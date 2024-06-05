// src/isElementVisible.js
export function isElementVisible(element) {
    if (!element) {
        return false;
    }
    return element.offsetWidth > 0 && element.offsetHeight > 0;
}
