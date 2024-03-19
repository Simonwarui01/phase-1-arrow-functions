const divide = function(a, b) {
    return a / b;
};

// Arrow function called square
const square = (x) => {
    return x * x;
};

// Arrow function called add
const add = (a, b) => {
    return a + b;
};

// Exporting the functions
module.exports = {
    divide,
    square,
    add
};