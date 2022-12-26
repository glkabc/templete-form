<template>
  <div class="right-container">
    {{ currentEditor }}
    <el-input :model-value="currentEditor?.formKeyName" @input="change" />
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import  { formTemplateStore } from '../store'
  const store = formTemplateStore()
  const { currentEditor } = storeToRefs(store)

  const change = (value: string | number) => {
    console.log(value)
  }
</script>

<style lang="scss" scoped>
.right-container {
  width: 200px;
  min-width: 200px;
  border: 1px solid #eee;
  padding: 10px;
  margin: 0px 5px;
  overflow-x: hidden;
}
</style>