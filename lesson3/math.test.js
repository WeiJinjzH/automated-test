import { add, minus, multi } from './math'

test('测试加法 3 + 7', () => {
    expect(add(3, 7)).toBe(10)
})
test('测试减法 3 - 3', () => {
    expect(minus(3, 3)).toBe(0)
})
test('测试乘法 5 * 5', () => {
    expect(multi(5, 5)).toBe(25)
})

// jest分为 单元测试（模块测试），集成测试（多个模块测试），所以使用jest一定引入模块这个东西