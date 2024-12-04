import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 确保在插件之前引入样式

// 创建 Vue 应用实例
const app = createApp(App)

// 使用 Element Plus 插件
app.use(ElementPlus)

// 挂载 Vue 应用到 DOM 元素 '#app'
app.mount('#app')
