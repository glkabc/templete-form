<template>
  <RowLayout
    v-if="componentType === 'col'"
    :data="props.data"
    :current-editor="props.currentEditor"
    :index="props.index"
    @handle-click-del="(data, index, source) => handleClickDel(data, index, source)"
  />

  <CardLayoutVue 
    v-else-if="componentType === 'card'"
    @handle-click-del="emits('handleClickDel')"
    @set-current="emits('setCurrent')"
  >
    <Center :data="props.data.children" :currentEditor="props.currentEditor" />
  </CardLayoutVue>
</template>

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';
  import { computed } from 'vue';
  import RowLayout from './RowLayout.vue';
  import CardLayoutVue from './CardLayout.vue';
  import Center from '../Center/index.vue';
  import { useDelHook } from '../../hooks';

  const { delOneItem } = useDelHook()
  const emits = defineEmits<{
    (e: 'handleClickDel'): void
    (e: 'setCurrent'): void
  }>()

  const props = defineProps<{
    data: ViewListType
    currentEditor: ViewListType | null
    index: number
    parentData?: ViewListType[]
  }>()

  const componentType = computed(() => props.data.config.type)

  const handleClickDel = (data: ViewListType, index: number, source?: ViewListType[]) => {
    delOneItem(data, index, source ?? props.parentData)
  }
  
</script>