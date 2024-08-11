<template>
  <div class="card-editor">
    <div style="border: 1px solid #ccc;">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 200px; overflow-y: hidden;"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
      />
    </div>
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
  name: 'CardEditor',
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      html: '<p></p>',
      toolbarConfig: {},
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'default',
    }
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor)
    },
  },
  mounted() {
    setTimeout(() => {
      this.html = '<p></p>'
    }, 1500)
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy()
  }
}
</script>

<style lang="scss" scoped>
@import url('@wangeditor/editor/dist/css/style.css');
</style>