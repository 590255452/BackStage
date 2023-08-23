import axios from 'axios'
import qs from 'qs'
import { useTokenStore } from '@/stores/user'

// 配置
const serverConfig = {
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 1000, // 优先于全局超时
    withCredentials: false,
    responseType: 'json'
}

const serviceAxios = axios.create(serverConfig)

// 请求拦截
serviceAxios.interceptors.request.use(
    (config) => {
        // 如果开启token认证，则在请求头携带token
        const store = useTokenStore()
        if (store && store.accessToken) {
            config.headers.Authorization = store.accessToken
        }
        config.headers.Authorization =
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwNTI2NzU1LCJpYXQiOjE2OTA1MjQ4NDcsImp0aSI6IjBmZGE5NmM0ZTFjNzQwZjg5Njg1YjFlMmIxMTYwZDEyIiwidXNlcl9pZCI6MX0.4cNBF6SDdUl-mhwTRrGI4Wkt_jA9EtMac_Z9jf1kmCA'

        // 如果没有设置请求头
        if (!config.headers['content-type']) {
            if (config.method === 'post') {
                config.headers['content-type'] = 'application/x-www-form-urlencoded' // post请求
                config.data = qs.stringify(config.data) // 序列化,比如表单数据
            } else {
                config.headers['content-type'] = 'application/json' // 默认类型
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截
serviceAxios.interceptors.response.use(
    (res) => {
        // 响应数据经过此处做中间操作(如数据过滤)
        console.log(JSON.stringify(res.data))
        return res.data.data
    },
    (error) => {
        console.dir(error)
        // 响应过程中出现错误
        let message = ''
        if (error && error.response) {
            switch (error.response.status) {
                case 302:
                    message = '接口重定向了！'
                    break
                case 400:
                    message = '参数不正确！'
                    break
                case 401:
                    message = '您未登录，或者登录已经超时，请先登录！'
                    break
                case 403:
                    message = '您没有权限操作！'
                    break
                case 404:
                    message = `请求地址出错: ${error.response.config.url}`
                    break
                case 408:
                    message = '请求超时！'
                    break
                case 409:
                    message = '系统已存在相同数据！'
                    break
                case 500:
                    message = '服务器内部错误！'
                    break
                case 501:
                    message = '服务未实现！'
                    break
                case 502:
                    message = '网关错误！'
                    break
                case 503:
                    message = '服务不可用！'
                    break
                case 504:
                    message = '服务暂时无法访问，请稍后再试！'
                    break
                case 505:
                    message = 'HTTP 版本不受支持！'
                    break
                default:
                    message = '异常问题，请联系管理员！'
                    break
            }
        }
        return Promise.reject(error.response.status + ': ' + message)
    }
)

export default serviceAxios
