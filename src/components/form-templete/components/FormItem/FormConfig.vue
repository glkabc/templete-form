<template>
  <el-form label-position="top">
    <el-form-item label="字段名称对齐方式">
      <el-radio-group v-model="formConfig.labelPosition" label="label position">
        <el-radio-button label="left">Left</el-radio-button>
        <el-radio-button label="right">Right</el-radio-button>
        <el-radio-button label="top">Top</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="字段名称宽度">
      <el-input-number v-model="formConfig.labelWidth" :min="0" />
    </el-form-item>
    <el-form-item label="大小">
      <el-select v-model="formConfig.size" class="m-2" placeholder="Select" size="large">
        <el-option label="small" value="small" />
        <el-option label="default" value="default" />
        <el-option label="large" value="large" />
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { useStore } from '../../hooks';

  const { store } = useStore()
  const { formConfig } = storeToRefs(store)
</script>