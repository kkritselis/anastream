function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
};

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    };
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};