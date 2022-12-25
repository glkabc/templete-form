<template>
  <div class="right-container">
    {{ currentEditor }}
  </div>
</template>

<script setup lang="ts">
 import { storeToRefs } from 'pinia';
  import  { formTemplateStore } from '../store'
  const store = formTemplateStore()
  const { currentEditor } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.right-container {
  width: 200px;
  min-width: 200px;
  border: 1px solid #eee;
  padding: 10px;
  margin: 0px 5px;
}
</style>