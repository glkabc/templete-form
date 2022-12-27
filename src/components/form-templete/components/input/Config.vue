<template>
  <div>
    <el-form-item label="字段名称">
      <el-input
        :model-value="props.data.config.formKeyName"
        @input="change"
      />
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';

  const props = defineProps<{
    data: ViewListType
  }>()

  const emits = defineEmits<{
    (e: 'change', newValue: string, oldValue: string, source: ViewListType): void
  }>()

  const change = (value: string | number) => {
    const config = props.data.config
    emits('change', value as string, config.formKeyName, props.data)
    config.formKeyName = value as string
  }
</script>