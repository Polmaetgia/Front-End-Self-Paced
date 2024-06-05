// src/createBlurredCoverElement.js
export function createBlurredCoverElement(elementToCover) {
    const cover = document.createElement('div');
    cover.className = 'cover';
    const rect = elementToCover.getBoundingClientRect();
    cover.style.position = 'absolute';
    cover.style.top = `${rect.top + window.pageYOffset}px`;
    cover.style.left = `${rect.left + window.pageXOffset}px`;
    cover.style.width = `${rect.width}px`;
    cover.style.height = `${rect.height}px`;
    return cover;
}
