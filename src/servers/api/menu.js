import serviceAxios from '../index'
export const getMenu = (params) => {
    return serviceAxios({
        url: '/menu',
        method: 'get',
        headers: {
            'content-type': 'application/json'
        },
        params
    })
}
