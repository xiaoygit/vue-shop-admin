import axios from 'axios'

const service = axios.create({
    baseURL: 'http://127.0.0.1:8888/api/stockIo/admin',
    timeout: 6000
})

// 请求拦截
service.interceptors.request.use(config => {
    // 请求头设置
    config.headers = { 'Content-Type':'application/x-www-form-urlencoded' }
    // token
    // let token = 
    // config.headers.Authorization = token
    return config
}, err => {
    console.log(err)
})

// 响应拦截
// service.interceptors.response.use(res => {
//     switch(res.data.data.status) {
//         case 200:
//             break;
//         case 403:
//             break;
//     }
//     return res.data.data
// }, err => {
//     console.log(err)
// })

export {
    service as axios
}