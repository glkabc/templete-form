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
import { formTemplateStore } from "../../store";
import { ViewListType } from "../../store/type";
import Layout from '../layout/index.vue'
import Com from "../Com.vue";
import ItemView from "./ItemView.vue";
const store = formTemplateStore();
const { setCurrentConfig, changeFormFiledName } = store;
const props = defineProps<{
  data?: ViewListType[],
  currentEditor: ViewListType | null
}>()

const dragSet = (data: any, source?: ViewListType[]) => {
  console.log(data, source, '全景数据')
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

      console.log(addData, 'added')
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

const setCurrent = (index: number, element?: ViewListType | ViewListType[]) => {
  if (element && Array.isArray(element)) {
    setCurrentConfig(element[index])
  } else {
    element && setCurrentConfig(element);
  }
}
  
const handleClickDel = (element: ViewListType, index: number, source?: ViewListType[]) => {
  console.log(element, index, source, 'will del data to see')
  if(element.children) {
    // 同步删除对应子组件中对应的表单字段
    element.children.forEach((item, i) => {
      handleClickDel(item, i, element.children)
    })
  }

  if (element.config.id === store.currentEditor?.config.id) {
    setCurrentConfig(null);
  }
  changeFormFiledName(element.config.formKeyName, _, 'del');
  source?.splice(index, 1)
}
</script>

<style lang="scss" scoped>
  .dragArea {
    width: 100%;
    min-height: 100px;
    height: 100%;
  }
</style>
