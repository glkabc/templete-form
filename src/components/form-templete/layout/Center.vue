<template>
  <div class="center-container">
    <div class="result-tools">
      tools
      <el-button @click="handleSubmit">submit</el-button>
    </div>
    <el-form
      ref="formRef"
    >
      <Center />
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Center from '../components/Center/index.vue'
  const formRef = ref()

  const handleSubmit = () => {
    console.log(formRef.value, '表单数据')
    // formRef.value?.validate((isValid: boolean, invalidFields?: any) => {
    //   console.log(isValid, invalidFields, '-----')
    // })
  }
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
  .dragArea {
    width: 100%;
    min-width: 400px;
    height: calc(100vh - 90px);
    overflow-y: auto;
  }
  .item {
    border: 1px solid #eee;
    padding: 10px;
    margin: 5px;
    cursor: grab;
    user-select: none;
    .icon {
      width: 30px;
      height: 20px;
      cursor: auto;
    }
  }
  .current {
    border: 1px solid red;
  }
}
</style>