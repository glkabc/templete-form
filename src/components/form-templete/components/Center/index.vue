<template>
  <draggable
    :model-value="props.data"
    group="people"
    class="dragArea"
    item-key="id"
    @change="(payload) => dragSet(payload, props.data)"
  >
    <template #item="{ element, index }">
      <div
        v-if="element.config.type !== 'col'"
        :class="[ 'item', element.config.id === props.currentEditor?.id ? 'current' : '']"
        @click="setCurrent(element.config, index)"
      >
        <div>
          <el-icon><component :is="element.config.icon" /></el-icon>
          <CloseBold
            class="icon"
            style="width: 1em; height: 1em; margin-right: 8px"
            @click="handleClickDel(element.config, index, props.data)"
          />
        </div>
        <el-form-item :label="element.config.id">
          <Com :config="element.config" :key="element.config.id" />
        </el-form-item>
      </div>
      <el-row
        v-else
        :gutter="20"
        class="layout-row"
        style="padding: 0px; margin: 5px"
      >
        <div class="row_bar">
          <CloseBold
            class="icon"
            style="width: 1em; height: 1em; margin-right: 8px"
            @click="handleClickDel(element.config, index, props.data)"
          />grid 布局
        </div>
        <el-col :span="24" class="layout-col">
          <Center 
            :data="element.children"
            :current-editor="props.currentEditor"
          />
        </el-col>
      </el-row>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import _ from "loadsh";
import draggable from "vuedraggable";
import { formTemplateStore } from "../../store";
import { ItemConfigType, ViewListType } from "../../store/type";
import Com from "../Com.vue";
import Center from './index.vue'
const store = formTemplateStore();
const { setCurrentConfig, deleteOne, sortList, changeFormFiledName } = store;
const props = defineProps<{
  data?: ViewListType[],
  currentEditor: ItemConfigType | null
}>()

const dragSet = (data: any, source: any) => {
  if (data.added) {
    const newIndex = data.added.newIndex
    const element = data.added.element
    if (element.config) {
      source.splice(newIndex, 0, element)
    } else {
      const onlyOneId = _.uniqueId("contact_")
      const formKeyName = element.type + '_' + onlyOneId
      const addData = { ...element, id: onlyOneId, formKeyName }
      changeFormFiledName(formKeyName, '')
      setCurrentConfig(addData);
      source.splice(newIndex, 0, { config: addData, children: [] })
    }
  } else if (data.moved) {
    const { element, newIndex, oldIndex } = data.moved;
    source.splice(oldIndex, 1)
    source.splice(newIndex, 0, element)
  } else if (data.removed) {
    const { oldIndex } = data.removed;
    source.splice(oldIndex, 1)
  }
};

const setCurrent = (element: ItemConfigType, index: number) => {
  setCurrentConfig(element);
}
  
const handleClickDel = (element: ItemConfigType, index: number, source?: ViewListType[]) => {
  changeFormFiledName(element.formKeyName, _, 'del');
  source?.splice(index, 1)
}
</script>

<style lang="scss" scoped>
  .dragArea {
    width: 100%;
    height: 100%;
    .layout-row {
      border: 1px solid rebeccapurple;
      box-sizing: content-box;
      min-height: 150px;
      .row_bar {
        width: 100%;
        height: 20px;
        line-height: 20px;
        padding: 10px;
        margin: 5px;
        background-color: #eee;
      }
      .layout-col {
        padding: 10px;
      }
    }
  }
  .item {
    border: 1px solid #eee;
    padding: 10px;
    margin: 5px;
    cursor: grab;
    user-select: none;
    .icon {
      width: 30px;
      height: 20px;
      cursor: auto;
    }
  }
  .current {
    border: 1px solid red;
  }
</style>
