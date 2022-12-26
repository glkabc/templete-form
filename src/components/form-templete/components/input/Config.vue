<template>
  <div>
    <el-form-item label="字段名称">
      <el-input v-model="props.config.config.formKeyName" />
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';

  const props = defineProps<{
    config: ViewListType
  }>()
</script>