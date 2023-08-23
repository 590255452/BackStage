import serviceAxios from '../index'
import { useTokenStore } from '@/stores/user'
import qs from 'qs'

// 刷新token
export const refreshToken = (params) => {
    return serviceAxios({
        url: '/user/refresh_token',
        method: 'post',
        data: qs.stringify({
            refreshToken: useTokenStore().refreshToken
        })
    })
}
