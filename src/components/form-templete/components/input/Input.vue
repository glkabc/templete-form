<template>
  <el-form-item
    :label="config.formLabel"
    :rules="props.config.required ? props.config.rules : []"
    :prop="props.valueKeyName"
  >
    <el-input
      :placeholder="props.config.placeholder"
      :type="props.type"
      v-model="props.data[props.valueKeyName]"
    />
  </el-form-item>
</template>

<script lang="ts" setup>
  import { InputConfig } from './type';

  const props = defineProps<{
    type?: string
    valueKeyName: string
    data: Record<any, any>
    config: InputConfig
  }>()

</script>