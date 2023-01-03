<template>
  <el-input-number v-model="props.data[props.valueKeyName]" />
</template>

<script lang="ts" setup name="inputNumber">
    const props = defineProps({
    valueKeyName: {
      type: String,
      default: () => ''
    },
    data: {
      type: Object,
      default: () => {}
    }
  })
</script>