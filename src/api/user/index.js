import { axios } from '../request'

// 使用人员清单列表查询
export const userList = () => {
    return axios({
        url: '/userList',
        method: 'GET'
    })
}
