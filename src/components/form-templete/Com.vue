<template>
  <component
    :is="data.type"
  />
</template>

<script lang="ts" setup>
  import { reactive, markRaw } from 'vue'
  import { ItemConfigType, ToolType } from './store/type'
  import InputNumber from './components/InputNumber.vue'
  import Input from './components/input/Input.vue'
  import Table from './components/Table.vue'
  import CheckBox from './components/checkbox/index.vue'

  const props = defineProps<{config: ItemConfigType}>()

  const data = reactive<{
    type: any
  }>({
    type: switchComponent(props.config.type)
  })

  function switchComponent(type: ToolType) {
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