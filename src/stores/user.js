import { defineStore } from 'pinia'
import { getUserInfo } from '@/servers/api/login'
import { refreshToken as refresh_token } from '@/servers/api/user'
import { ElMessage } from 'element-plus/lib/index'
import router from '@/router'
import { ref } from 'vue'

export const useTokenStore = defineStore(
    'token',
    () => {
        const accessToken = ref('')
        const refreshToken = ref('')
        async function GetToken(state) {
            accessToken.value = state.access_token
            refreshToken.value = state.refresh_token
        }
        async function RefreshToken() {
            const data = await refresh_token()
            console.log(data)
        }
        return { accessToken, refreshToken, GetToken, RefreshToken }
    },
    {
        persist: {
            enabled: true
        }
    }
)

export const useUserStore = defineStore(
    'user',
    () => {
        const user = ref({})
        async function Login(form) {
            try {
                const data = await getUserInfo(form)
                user.value = data
                useTokenStore().GetToken(user.value)
                router.push('/home') // 跳转到首页
            } catch (error) {
                ElMessage.error(error) // element错误框
            }
        }

        return { user, Login }
    },
    {
        persist: {
            enabled: true
        }
    }
)

// TODO: 给sessionStoreage上传数据时要加密，后期再弄（MD5)
// BUG: 错误框有时候返回时没有message值
