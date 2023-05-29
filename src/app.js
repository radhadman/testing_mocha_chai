function hello() {
    return 'hello';
}

function add(a,b) {
    return a + b;
}

function isString(x) {
    return typeof(x) === 'string';
}

module.exports = {
    hello,
    add,
    isString,
};
