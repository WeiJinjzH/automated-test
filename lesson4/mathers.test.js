test('测试10与10相匹配', () => {
    // toBe为匹配器(mathers) toBe类似于object.is 或者类似于===匹配
    expect(10).toBe(10)
})

// 当测试对象内容相等时，不能用toBe
test('测试对象内容相等', () => {
    const a = { one: 1 }
    expect(a).toEqual({ one: 1 })
})

test('测试是否为null', () => {
    const a = null
    expect(a).toBeNull()
})

test('toBrUndefinded匹配器', () => {
    const a = undefined
    expect(a).toBeUndefined()
})

test('toBrDefinded匹配器', () => {
    const a = 1
    expect(a).toBeDefined()
})

test('toBeTruthy匹配器', () => {
    const a = 6
    expect(a).toBeTruthy()
})

test('toBeFalsy匹配器', () => {
    const a = 0
    expect(a).toBeFalsy()
})

test('not匹配器', () => {
    const a = 9
    expect(a).not.toBeFalsy()
})


// 数字相关当匹配器
test('toBeGreaterThan匹配器', () => {
    const count = 10
    expect(count).toBeGreaterThan(9)
})

test('toBeLessThan匹配器', () => {
    const count = 10
    expect(count).toBeLessThan(11)
})

test('toBeGreaterThanOrEqual匹配器', () => { // 大于等于
    const count = 10
    expect(count).toBeGreaterThanOrEqual(9)
})

test('toBeLessThanOrEqual匹配器', () => {
    const count = 10
    expect(count).toBeLessThanOrEqual(11)
})

test('toBeCloseTo匹配器', () => { // 接近于
    const firstNumber = 0.1
    const secondNumber = 0.2
    // expect(firstNumber + secondNumber).toEqual(0.3)
    expect(firstNumber + secondNumber).toBeCloseTo(0.3)
})


// String相关的匹配器
test('toMatch匹配器', () => { // 包含
    const str = "http://www.jin-ji.com"
    expect(str).toMatch('jin')
    expect(str).toMatch(/jin/) // 或者可以写正则表达式
})


// Array，Set
test('toContain匹配器', () => { // 包含
    const arr = ["http://www.jin-ji.com", 2, 3, 'jin', 'ji', 'imooc']
    expect(arr).toContain('jin')
})

test('toContain匹配器', () => { // 包含
    const arr = ["http://www.jin-ji.com", 2, 3, 'jin', 'ji', 'imooc']
    const data = new Set(arr)
    expect(data).toContain('jin')
})


// 异常
const throwNewErrorFunc = () => {
    throw new Error('this is a new error')
}
test('toThrow匹配器', () => { // 包含
    expect(throwNewErrorFunc).toThrow()
    expect(throwNewErrorFunc).toThrow('this is a new error')
    expect(throwNewErrorFunc).toThrow(/this is a new error/)
})