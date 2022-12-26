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
        v-if="element.config.type !== 'col'"
        :elemet-id="element.config.id"
        :current-editor-element-id="props.currentEditor?.config?.id"
        @handle-click-del="handleClickDel(element, index, props.data)"
        @set-current="setCurrent(element, index)"
      >
        <Com :data="element" :key="element.config.id" />
      </ItemView>
      <RowLayout
        v-else
        @handleClickDel="handleClickDel(element, index, props.data)"
      >
        <Center 
          :data="element.children"
          :current-editor="props.currentEditor"
        />
      </RowLayout>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import _ from "loadsh";
import draggable from "vuedraggable";
import { formTemplateStore } from "../../store";
import { ViewListType } from "../../store/type";
import RowLayout from "../layout/RowLayout.vue";
import Com from "../Com.vue";
import Center from './index.vue'
import ItemView from "./ItemView.vue";
const store = formTemplateStore();
const { setCurrentConfig, changeFormFiledName } = store;
const props = defineProps<{
  data?: ViewListType[],
  currentEditor: ViewListType | null
}>()

const dragSet = (data: any, source: any) => {
  if (data.added) {
    const newIndex = data.added.newIndex
    const element = data.added.element
    if (element.config) {
      // 已有的组件插入
      source.splice(newIndex, 0, element)
    } else {
      // 新组件插入
      const onlyOneId = _.uniqueId("contact_")
      const formKeyName = element.type + '_' + onlyOneId
      const addData = { ...element, id: onlyOneId, formKeyName }
      changeFormFiledName(formKeyName, '')
      setCurrentConfig(addData);
      source.splice(newIndex, 0, { config: addData, children: [] })
    }
  } else if (data.moved) {
    // 平级组件间移动
    const { element, newIndex, oldIndex } = data.moved;
    source.splice(oldIndex, 1)
    source.splice(newIndex, 0, element)
  } else if (data.removed) {
    // 跨级组件间移动
    const { oldIndex } = data.removed;
    source.splice(oldIndex, 1)
  }
};

const setCurrent = (element: ViewListType, index: number) => {
  setCurrentConfig(element);
}
  
const handleClickDel = (element: ViewListType, index: number, source?: ViewListType[]) => {
  if(element.children) {
    // 同步删除对应子组件中对应的表单字段
    element.children.forEach((item, i) => {
      handleClickDel(item, i, element.children)
    })
  }
  changeFormFiledName(element.config.formKeyName, _, 'del');
  source?.splice(index, 1)
}
</script>

<style lang="scss" scoped>
  .dragArea {
    width: 100%;
    height: 100%;
  }
</style>
