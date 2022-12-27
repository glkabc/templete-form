<template>
  <component
    :is="data.type"
    :valueKeyName="props.data.config.formKeyName"
    :data="store.formData"
  />
</template>

<script lang="ts" setup>
  import { reactive, markRaw } from 'vue'
  import { IToolComTypeName, ViewListType } from '../store/type'
  import InputNumber from './InputNumber/InputNumber.vue'
  import Input from './input/Input.vue'
  import Table from './Table/Table.vue'
  import CheckBox from './checkbox/index.vue'
  import { formTemplateStore } from '../store'

  const store = formTemplateStore()

  const props = defineProps<{
    data: ViewListType
  }>()

  const data = reactive<{
    type: any
  }>({
    type: switchComponent(props.data.config.type)
  })

  function switchComponent(type: IToolComTypeName) {
    switch(type) {
      case 'InputCore':
        return markRaw(Input);
      case 'InputNumberCore':
        return markRaw(InputNumber);
      case 'TableCore':
        return markRaw(Table);
      case 'checkboxGroupCore':
        return markRaw(CheckBox);
    }
  }
  
</script>