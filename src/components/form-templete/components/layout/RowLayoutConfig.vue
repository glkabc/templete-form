<template>
  <div>
    <el-form-item label="字段名称">
      <el-input
        :model-value="props.data.config.formKeyName"
        @input="change"
      />
    </el-form-item>
    <el-form-item label="栅格col">
      <el-input-number :min="1" :max="24" v-model="props.data.config.col" />
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';
import { IRowLayout } from './type';

  const props = defineProps<{
    data: ViewListType<IRowLayout>
  }>()

  const emits = defineEmits<{
    (e: 'change', newValue: string, oldValue: string, source: ViewListType<IRowLayout>): void
  }>()

  const change = (value: string | number) => {
    const config = props.data.config
    emits('change', value as string, config.formKeyName, props.data)
    config.formKeyName = value as string
  }
</script>

