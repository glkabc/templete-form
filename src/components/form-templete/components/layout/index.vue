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

<!-- 
  <RowLayout
    v-else
    :data="element"
    :current-editor="props.currentEditor"
    :index="index"
    @handleClickDel="handleClickDel(element, index, props.data)"
    @set-current="(i, d) => setCurrent(i , d)"
    @drag-set="(p, d) => dragSet(p, d)"
  >
    <template #item="{data, key}">
      <ItemView
        v-if="data.type !== 'layoutTool'"
        :elemet-id="data.config.id"
        :current-editor-element-id="props.currentEditor?.config?.id"
        @handle-click-del="handleClickDel(data, key, element.children)"
        @set-current="setCurrent(key, data)"
      >
        <Com :data="data" :key="data.config.id" />
      </ItemView>
    </template>
  </RowLayout> 
-->

<script lang="ts" setup>
  import { ViewListType } from '../../store/type';

  const props = defineProps<{
    data: ViewListType
  }>()
</script>