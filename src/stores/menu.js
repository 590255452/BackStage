import { defineStore } from 'pinia'
import { getMenu } from '@/servers/api/menu'
import { ElMessage } from 'element-plus/lib/index'
import { ref } from 'vue'

export const useMenuStore = defineStore(
    'menu',
    () => {
        const menuList = ref([])
        async function Menu() {
            try {
                const data = await getMenu()
                menuList.value = data
            } catch (error) {
                ElMessage.error(error)
            }
        }

        return { menuList, Menu }
    },
    {
        persist: {
            enabled: true
        }
    }
)
