<script lang="ts" setup>
import { ref } from 'vue'
import { ElSelect,ElOption,ElButton } from 'element-plus'
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
]
</script>
<template>
<div class="tag_top">
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <div style="margin-left:20px">
    <el-button type="primary" round>搜索</el-button>
    <el-button type="primary" round>重置</el-button>
  </div>

</div>
</template>
<style scoped>
.tag_top{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
