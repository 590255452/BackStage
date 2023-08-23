<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router
        unique-opened
    >
        <el-sub-menu :index="item.id" v-for="(item, index) in menuList" :key="item.id">
            <template #title>
                <el-icon>
                    <component :is="iconMenu[index]"></component>
                </el-icon>
                <span>{{ item.authName }}</span>
            </template>
            <el-menu-item :index="it.path" v-for="it in item.children" :key="it.id" @click="savePath(it.path)">
                <template #title>
                    <el-icon>
                        <component :is="MenuList"></component>
                    </el-icon>
                    <span>{{ it.authName }}</span>
                </template></el-menu-item
            >
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import { onBeforeMount, ref, markRaw } from 'vue'

import { UserFilled, InfoFilled, Histogram, List, Menu as MenuList } from '@element-plus/icons-vue'
import { useMenuStore } from '@/stores/menu'

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}

// 挂载菜单栏数据
const store = useMenuStore()
const menuList = ref([])
onBeforeMount(async () => {
    await store.Menu() // 需要异步执行，否则sotre.menuList在获取前就会执行下面的代码
    menuList.value = store.menuList
    // console.log(menuList.value)
})

// 保存打开的菜单项，刷新后会保持不变
const defaultActive = ref(sessionStorage.getItem('path') || '/home')
const savePath = (path) => {
    sessionStorage.setItem('path', path)
}

const iconMenu = markRaw([UserFilled, InfoFilled, Histogram, List])
</script>
