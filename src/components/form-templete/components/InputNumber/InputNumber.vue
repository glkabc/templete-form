<template>
   <el-form-item
    :label="config.formLabel"
    :rules="props.config.required ? props.config.rules : []"
    :prop="props.valueKeyName"
  >
    <el-input-number
      v-model="props.data[props.valueKeyName]"
      :placeholder="props.config.placeholder"
      :min="props.config.min"
      :max="props.config.max"
    />
  </el-form-item>
</template>

<script lang="ts" setup name="inputNumber">
  import { InputNumberConfig } from './type';

  const props = defineProps<{
    type?: string
    valueKeyName: string
    data: Record<any, any>
    config: InputNumberConfig
  }>()
</script>