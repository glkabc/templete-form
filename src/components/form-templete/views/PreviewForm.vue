<template>
  <el-dialog
    v-model="dialogVisible"
    title="表单预览"
    width="80%"
    ref="reference"
    align-center
    destroy-on-close
  >
    <div class="container">
      <div class="json">
        <p>viewDataJSON</p>
        <vue-json-pretty :data="viewList" />
      </div>
      <div class="form">
        <p>formDataJSON</p>
        <vue-json-pretty :data="formData" />
      </div>
      <div class="view">
        <p>fromView</p>
        <ExhibitFormView :data="viewList" :form-data="formData" />
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import VueJsonPretty from 'vue-json-pretty';
  import 'vue-json-pretty/lib/styles.css';
  import { useStore } from '../hooks';
  import { storeToRefs } from 'pinia';
  import { ExhibitFormView } from '../index'

  const { store } = useStore()
  const { viewList, formData } = storeToRefs(store)
  const dialogVisible = ref(false)

  const open = () =>dialogVisible.value = true
  
  defineExpose({
    open
  })
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 200px);
  display: flex;
  .json, .form, .view {
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid #eee;
    flex: 1;
  }
}
</style>