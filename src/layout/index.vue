<template>
    <el-container>
        <el-aside width="200px">
            <Menu class="menu" />
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import Menu from './Menu.vue'
</script>

<style>
.el-container {
    width: 100%;
    height: 100%;
}
.menu {
    height: 100%;
}
</style>
