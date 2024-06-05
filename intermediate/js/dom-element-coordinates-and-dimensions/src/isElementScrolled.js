// src/isElementScrolled.js
export function isElementScrolled(element) {
    if (!element) {
        return {
            scrollTop: null,
            scrollLeft: null,
            isScrolled: null
        };
    }
    const scrollTop = element.scrollTop;
    const scrollLeft = element.scrollLeft;
    return {
        scrollTop,
        scrollLeft,
        isScrolled: scrollTop > 0 || scrollLeft > 0
    };
}
