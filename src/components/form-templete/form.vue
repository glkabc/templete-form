<template>
  <el-form
    ref="formRef"
    :model="formData"
    class="form-container"
  >
    <FormItem 
      :data="props.data"
    />
  </el-form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { ElMessage, FormInstance } from 'element-plus';
  import { ViewListType } from './store/type';
  import FormItem from './components/FormItem/index.vue';

  const props = defineProps<{
    data: ViewListType[];
    formData: Record<any, any>
  }>()
  const formRef = ref<FormInstance>()

  const handleSubmit = (callback: (data: Record<any, any>) => void) => {
    formRef.value?.validate((valid, fields) => {
      if (valid) {
        callback(props.formData)
      } else {
        ElMessage.warning('表单验证为通过')
      }
    })
  }

  defineExpose({
    handleSubmit
  })
</script>
