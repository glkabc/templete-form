<template>
  <component
    :ref="refView"
    :is="data.type"
  />
</template>

<script lang="ts" setup>
  import { reactive, ref, markRaw } from 'vue'
  import { ItemConfigType, ToolType } from './store/type'
  import InputNumber from './components/InputNumber.vue'
  import Input from './components/Input.vue'
  import Table from './components/Table.vue'

  const props = defineProps<{config: ItemConfigType}>()
  const refView = ref(null)

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
      default:
        return 'input'
    }
  }
  
</script>