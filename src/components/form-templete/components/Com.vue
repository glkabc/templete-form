<template>
  <component
    :is="data.type"
  />
</template>

<script lang="ts" setup>
  import { reactive, markRaw } from 'vue'
  import { ItemConfigType, IToolComTypeName } from '../store/type'
  import InputNumber from './InputNumber.vue'
  import Input from './input/Input.vue'
  import Table from './Table.vue'
  import CheckBox from './checkbox/index.vue'

  const props = defineProps<{config: ItemConfigType}>()

  const data = reactive<{
    type: any
  }>({
    type: switchComponent(props.config.type)
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