<template>
  <el-input
    placeholder="Please input"
    :type="props.type"
  />
</template>

<script lang="ts" setup>
  import { InputType } from './type';

  const props = defineProps({
    type: {
      type: String,
      default: () => 'default'
    }
  })
  console.log('input component')
</script>