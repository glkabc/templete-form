<template>
  <div class="center-container">
    <div class="result-tools">
      tools
      <el-button @click="handleSubmit">submit</el-button>
      <el-button @click="handleClickPreview">预览</el-button>
    </div>
    <el-form
      ref="formRef"
      :model="formData"
      class="form-container"
    >
      <Center
       :data="viewList"
       :currentEditor="currentEditor"
      />
    </el-form>

    <PreviewForm ref="previewForm" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Center from '../components/Center/index.vue'
  import { formTemplateStore } from '../store';
  import { storeToRefs } from 'pinia';
  import PreviewForm from '../views/PreviewForm.vue';

  const formRef = ref();
  const previewForm = ref<InstanceType<typeof PreviewForm> | null>(null);
  const store = formTemplateStore();
  const { viewList, currentEditor, formData } = storeToRefs(store);

  const handleSubmit = () => {
    console.log(formData.value, '表单数据')
    // formRef.value?.validate((isValid: boolean, invalidFields?: any) => {
    //   console.log(isValid, invalidFields, '-----')
    // })
  }

  const handleClickPreview = () => previewForm.value?.open()

</script>

<style lang="scss" scoped>
.center-container{
  border: 1px solid #000;
  padding: 10px;
  margin: 0px 5px;
  flex: 1;
  box-sizing: border-box;
  .result-tools {
    height: 30px;
    border: 1px solid #666;
    padding: 5px;
    margin: 5px;
    line-height: 30px;
  }
  .form-container {
    height: calc(100vh - 90px);
    overflow-y: auto;
  }
}
</style>