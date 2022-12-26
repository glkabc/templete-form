<template>
  <el-input
    placeholder="Please input"
    :type="props.type"
    v-model="props.data[props.valueKeyName]"
  />
</template>

<script lang="ts" setup>
  const props = defineProps({
    type: {
      type: String,
      default: () => 'default'
    },
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