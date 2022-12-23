<template>
  <div class="center-container">
    <draggable 
      :model-value="viewList" 
      group="people"
      class="dragArea"
      item-key="id"
      @change="dragSet"
      @start="dragStart" 
      @end="dragEnd" 
    >
      <template #item="{element, index}">
        <div
          :class="['item', element.config.id === currentConfig?.id ? 'current' : '']"
          @click="setCurrent(element.config, index)"
        > 
          {{element.config.title}} {{ element.config.id }}
          <Com
            :config="element.config"
            :key="index"
          />
          <CloseBold class="icon" style="width: 1em; height: 1em; margin-right: 8px" @click="handleClickDel(element.config, index)"/>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable'
  import _ from 'loadsh'
  import { storeToRefs } from 'pinia';
  import  { formTemplateStore } from './store'
  import { ItemConfigType } from './store/type';
  import Com from './Com.vue'
  const store = formTemplateStore()
  const { viewList, currentConfig } = storeToRefs(store)
  const { setCurrentConfig, deleteOne, sortList } = store

  const dragSet = (data: any) => {
    console.log(data, '------')
    if (data.added) {
      const addData = {
        ...data.added.element,
        id: _.uniqueId('contact_')
      }
      sortList({config: addData}, data.added.newIndex)
      setCurrentConfig(addData)
    } else if (data.moved) {
      const { element, newIndex, oldIndex } = data.moved
      sortList(element, newIndex, oldIndex)
    }
  }
  const dragStart = (...list: any[]) => {
    // console.log(list, 'dragStart Center')
  }

  const dragEnd = (...list: any[]) => {
    // console.log(list, 'dragEnd Center')
  }

  const setCurrent = (element: ItemConfigType, index: number) => setCurrentConfig(element)
  const handleClickDel = (element: ItemConfigType, index: number) => deleteOne(index)
</script>

<style lang="scss" scoped>
.center-container{
  border: 1px solid #000;
  padding: 10px;
  margin: 0px 5px;
  flex: 1;
  box-sizing: border-box;
  .dragArea {
    width: 100%;
    min-width: 400px;
    height: calc(100vh - 40px);
    overflow-y: auto;
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
}
</style>