<template>
  <draggable
    :model-value="viewList"
    group="people"
    class="dragArea"
    item-key="id"
    @change="dragSet"
    @start="dragStart"
    @end="dragEnd"
  >
    <template #item="{ element, index }">
      <div
        :class="[
          'item',
          element.config.id === currentEditor?.id ? 'current' : '',
        ]"
        @click="setCurrent(element.config, index)"
      >
        <p>
          <el-icon><component :is="element.config.icon" /></el-icon>
          <CloseBold
            class="icon"
            style="width: 1em; height: 1em; margin-right: 8px"
            @click="handleClickDel(element.config, index)"
          />
        </p>
        <el-form-item :label="element.config.id">
          <Com :config="element.config" :key="element.config.id" />
        </el-form-item>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import _ from "loadsh";
import { storeToRefs } from "pinia";
import { formTemplateStore } from "../../store";
import { ItemConfigType } from "../../store/type";
import Com from "../Com.vue";
const store = formTemplateStore();

const { viewList, currentEditor } = storeToRefs(store);
const { setCurrentConfig, deleteOne, sortList } = store;

const dragSet = (data: any) => {
  console.log(data, "------");
  if (data.added) {
    const addData = {
      ...data.added.element,
      id: _.uniqueId("contact_"),
    };
    sortList({ config: addData }, data.added.newIndex);
    setCurrentConfig(addData);
  } else if (data.moved) {
    const { element, newIndex, oldIndex } = data.moved;
    sortList(element, newIndex, oldIndex);
  }
};
const dragStart = (...list: any[]) => {
  console.log(list, "dragStart Center");
};

const dragEnd = (...list: any[]) => {
  console.log(list, "dragEnd Center");
};

const setCurrent = (element: ItemConfigType, index: number) =>
  setCurrentConfig(element);
const handleClickDel = (element: ItemConfigType, index: number) =>
  deleteOne(index);
</script>
