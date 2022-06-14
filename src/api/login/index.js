import { axios } from '../request'

// 登录
export const login = queryData => {
    let formData = new URLSearchParams()
    formData.append('phone', queryData.phone)
    formData.append('password', queryData.password)
    return axios({
        url: '/login',
        method: 'POST',
        data: formData
    })
}