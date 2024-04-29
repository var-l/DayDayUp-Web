<template>
  <el-row :gutter="20">
    <el-col :span="10">
    </el-col>
    <el-col :span="10">
      <div style="border: 1px solid #ccc">
        <div>标题</div>
        <el-form :model="fromData" >
          <el-form-item >
            <el-input v-model="fromData.title" placeholder="请输入笔记标题"></el-input>
          </el-form-item>
        </el-form>
        <Toolbar
            style="border-bottom: 1px solid rgba(204,204,204,0.83)"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 500px; overflow-y: hidden;"
            v-model="fromData.content"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"
        />
        <el-button type="primary" @click="submit">确认</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {createBooks, getBooks} from "@/api/books/readingNotes.js";


const mode = ref('default')

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

const fromData = reactive({
  content: '',
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

const submit = async() => {
  console.log(fromData.content)
  // fromData.text = await getBooks()
  const a =  await createBooks(fromData)
  console.log(a)
}

</script>

<style scoped lang="scss">

</style>
