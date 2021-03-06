const sizes = {
    xs: "575.98px",
    sm: "767.98px",
    md: "991.98",
    lg: "1199.98px",
};

export default {
    up(size) {
        return `@media (min-width: ${sizes[size]})`;
    },
    down(size) {
        return `@media (max-width: ${sizes[size]})`;
    },
};
