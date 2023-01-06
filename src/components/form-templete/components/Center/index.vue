<template>
  <draggable
    :model-value="props.data"
    group="people"
    class="dragArea"
    item-key="id"
    @change="(payload) => dragSet(payload, props.data)"
  >
    <template #item="{ element, index }">
      <ItemView 
        v-if="element.type !== 'layoutTool'"
        :elemet-id="element.config.id"
        :current-editor-element-id="props.currentEditor?.config?.id"
        @handle-click-del="handleClickDel(element, index, props.data)"
        @set-current="setCurrent(index, element)"
      >
        <Com :data="element" :key="element.config.id" />
      </ItemView>

      <Layout
        v-else
        :data="element"
        :key="index"
        :index="index"
        :parentData="props.data"
        :current-editor="props.currentEditor"
        @handle-click-del="handleClickDel(element, index, props.data)"
        @set-current="setCurrent(index, element)"
      ></Layout>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import _ from "loadsh";
import draggable from "vuedraggable";
import { ViewListType } from "../../store/type";
import Layout from '../layout/index.vue'
import Com from "../Com.vue";
import ItemView from "./ItemView.vue";
import { useDelHook, useDragSet, useSetCurrent } from "../../hooks";

const { delOneItem } = useDelHook()
const { setCurrent } = useSetCurrent()
const { dragSet } = useDragSet()

const props = defineProps<{
  data?: ViewListType[],
  currentEditor: ViewListType | null
}>()
  
const handleClickDel = (element: ViewListType, index: number, source?: ViewListType[]) => {
  delOneItem(element, index, source)
}
</script>

<style lang="scss" scoped>
  .dragArea {
    width: 100%;
    min-height: 100px;
    height: 100%;
  }
</style>
