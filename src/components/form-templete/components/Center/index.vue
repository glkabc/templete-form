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
        @drag-set="(child_el, child_sour) => dragSet(child_el, child_sour)"
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
import { useDelHook, useSetCurrent } from "./hooks";

const props = defineProps<{
  data?: ViewListType[],
  currentEditor: ViewListType | null
}>()

const { delOneItem } = useDelHook()
const { setCurrent, setCurrentConfig, changeFormFiledName } = useSetCurrent()

const dragSet = (data: any, source?: ViewListType[]) => {
  if (data.added) {
    const newIndex = data.added.newIndex
    const element = data.added.element
    if (element.config) {
      // 已有的组件插入
      source?.splice(newIndex, 0, element)
    } else {
      // 新组件插入
      const onlyOneId = _.uniqueId("contact_")
      const formKeyName = element.type + '_' + onlyOneId
      const type = data.added.element.toolType
      const addData: ViewListType = {
        type,
        key: onlyOneId,
        config: {
          ...element,
          id: onlyOneId,
          formKeyName
        },
        children: [],
      }

      changeFormFiledName(formKeyName, addData.config.type === 'InputNumberCore' ? 0 : '')
      setCurrentConfig(addData);
      source?.splice(newIndex, 0, addData)
    }
  } else if (data.moved) {
    // 平级组件间移动
    const { element, newIndex, oldIndex } = data.moved;
    source?.splice(oldIndex, 1)
    source?.splice(newIndex, 0, element)
  } else if (data.removed) {
    // 跨级组件间移动
    const { oldIndex } = data.removed;
    source?.splice(oldIndex, 1)
  }
};
  
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
