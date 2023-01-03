<template>
  <RowLayout
    v-if="data.type === 'layoutTool'"
  >
    <template #item="{data, key}">
      <!-- <ItemView 
        v-if="data.type !== 'layoutTool'"
        :elemet-id="data.config.id"
        :current-editor-element-id="props.currentEditor?.config?.id"
        @handle-click-del="handleClickDel(data, key, element.children)"
        @set-current="setCurrent(key, data)"
      >
        <Com :data="data" :key="data.config.id" />
      </ItemView> -->
    </template>
  </RowLayout>
</template>

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';

  const props = defineProps<{
    data: ViewListType
  }>()
</script>