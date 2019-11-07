import { fetchData } from './fetchData'

// 回调类型异步函数的测试
// test('fetchData返回结果为 { success: true }', (done) => {
//     fetchData((data) => {
//         expect(data).toEqual({ success: true })
//         done() // done是一个函数，表示执行结束的意思 这里由于是异步函数，在异步函数没结束的时候，测试用例没执行，就已经结束了，因为不管接口地址是不是正确，测试都是通过的。这里使用done函数是为了等待测试用例执行结束，才表示结束
//     })
// })

// test('fetchData返回结果为 { success: true }', () => {
//     return fetchData().then((res) => {
//         expect(res.data).toEqual({ success: true })
//     })
// })

test('fetchData返回结果为 404', () => {
    expect.assertions(1) // 表示下面的expect结果必须是真，并且至少执行一个下面的expect的语法。此时不返回404就报错了
    return fetchData().catch((err) => {
        expect(err.toString().indexOf('404') > -1).toBe(true) // 这个时候即使不是404的情况，测试也会通过
    })
})