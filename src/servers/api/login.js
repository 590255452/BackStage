import serviceAxios from '../index'

export const getUserInfo = (params) => {
    return serviceAxios({
        url: '/login',
        method: 'post',
        data: params
    })
}

// export const getLogout = (params) => {
//     return serviceAxios({
//         url: '/logout',
//         method: 'post'
//     })
// }
