import {
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElIcon,
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElSubMenu,
    ElMenu,
    ElMenuItemGroup
} from 'element-plus/lib/index'
import 'element-plus/theme-chalk/index.css'
// import lang from 'element-plus/lib/locale/lang/zh-cn'
// import locale from 'element-plus/lib/locale'

export default (app) => {
    // locale.use(lang)
    app.use(ElForm)
    app.use(ElFormItem)
    app.use(ElInput)
    app.use(ElButton)
    app.use(ElIcon)
    app.use(ElContainer)
    app.use(ElAside)
    app.use(ElHeader)
    app.use(ElMain)
    app.use(ElMenu)
    app.use(ElSubMenu)
    app.use(ElMenuItemGroup)
}
