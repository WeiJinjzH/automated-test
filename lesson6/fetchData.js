import axios from 'axios'

// 回调类型异步函数的测试
// export const fetchData = (fn) => {
//     axios.get('http://www.dell-lee.com/react/api/demo.json').then((res) => {
//         fn(res.data)
//     })
// }

export const fetchData = (fn) => {
    return axios.get('http://www.dell-lee.com/react/api/demo1.json')
}