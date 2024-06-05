// src/getPageData.js
export function getPageData() {
    const documentElement = document.documentElement;
    const body = document.body;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const documentHeight = Math.max(
        body.scrollHeight, documentElement.scrollHeight,
        body.offsetHeight, documentElement.offsetHeight,
        body.clientHeight, documentElement.clientHeight
    );

    const documentWidth = Math.max(
        body.scrollWidth, documentElement.scrollWidth,
        body.offsetWidth, documentElement.offsetWidth,
        body.clientWidth, documentElement.clientWidth
    );

    const currentScrollFromTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
    const currentScrollFromLeft = window.pageXOffset || documentElement.scrollLeft || body.scrollLeft || 0;

    return {
        windowHeight,
        windowWidth,
        documentHeight,
        documentWidth,
        currentScrollFromTop,
        currentScrollFromLeft
    };
}
