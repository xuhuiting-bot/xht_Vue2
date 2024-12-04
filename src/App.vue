<template>
  <div id="app">
    <el-button>引入Element-plus的Vue项目</el-button>
    <!-- 添加 ButtonExamples 组件 -->
    <ButtonExamples />
    <!-- 使用 InputExample 组件 -->
    <InputExample />

    <!-- 使用 SelectExample 组件 -->
    <SelectExample />

    <!-- 使用 TableExample 组件 -->
    <TableExample />
  </div>
</template>

<script>
// 正确引入 Element Plus 的 ElButton 组件
import {ElButton} from 'element-plus'
// 引入 ButtonExamples 组件
import ButtonExamples from './components/ButtonExamples.vue'
// 引入自定义组件
import InputExample from './components/InputExample.vue';
import SelectExample from './components/SelectExample.vue';
import TableExample from './components/TableExample.vue';
export default {
  name: 'App',
  components: {
    ElButton, // 使用 Element Plus 的 ElButton 组件
    ButtonExamples, // 注册 ButtonExamples 组件
    InputExample, // 注册 InputExample 组件
    SelectExample, // 注册 SelectExample 组件
    TableExample // 注册 TableExample 组件
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
