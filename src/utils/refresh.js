const TOKEN_TIME = 'tokenTime'
const TOKEN_TIME_VALUE = 1000 * 60 * 60 * 24 // 过期时长

// 设置登录时间
export const setTokenTime = () => {
    sessionStorage.setItem(TOKEN_TIME, Date.now())
}
// 获取登录时间
export const getTokenTime = () => {
    sessionStorage.getItem(TOKEN_TIME)
}

// token是否过期
export const diffTokenTime = () => {
    const currentTime = Date.now()
    return currentTime - getTokenTime > TOKEN_TIME_VALUE
}
