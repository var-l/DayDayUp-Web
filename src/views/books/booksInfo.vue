<template>
    <div style="border: 1px solid #ccc">
      <Toolbar
          style="border-bottom: 1px solid rgba(204,204,204,0.83)"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
      />
      <Editor
          style="height: 500px; overflow-y: hidden;"
          v-model="fromData.text"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
      />
      <el-button type="primary" @click="submit">确认</el-button>
    </div>



</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const mode = ref('default')

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

const fromData = reactive({
  text: '',
})
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const submit = () => {
  console.log(fromData.text)
}

</script>

<style scoped lang="scss">

</style>
