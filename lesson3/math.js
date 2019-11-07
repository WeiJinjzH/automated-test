export function add(a, b) {
    return a + b
}
export function minus(a, b) {
    return a - b
}
export function multi(a, b) {
    return a * b
}

// 改成commonJs了之后，当运行npm run test时
// jest里面会有一个(jest-babel)这样的东西 判断有没有babel或者babel-core，此时取.babelrc的配置，在运行测试之前，结合babel先把你的代码做一次转化， 再运行转化过的测试代码