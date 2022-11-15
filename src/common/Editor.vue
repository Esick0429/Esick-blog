<template>
  <Editor v-model="value" :default-config="editorConfig" />
</template>
<script setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

const props = defineProps({
  value: String,
});
const editorRef = shallowRef();

const editorConfig = { readOnly: true };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>
<style>
@media screen and (max-width: 768px) {
  #w-e-textarea-1 {
    padding: 0 10px 0 0!important;
  }
  .w-e-text-container pre > code {
    font-size: calc(100vw * (16 / 375)) !important;
  }
}
</style>
