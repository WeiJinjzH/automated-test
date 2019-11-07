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
    expect(throwNewErrorFunc).toThrow('this is a new error')
})