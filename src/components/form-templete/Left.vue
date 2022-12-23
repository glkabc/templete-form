<template>
  <div class="left-container">
    <draggable 
      v-model="tool.baseTool" 
      :group="{ name: 'people', pull: 'clone', put: false }"
      item-key="type"
      @start="dragStart" 
      @end="dragEnd" 
    >
      <template #item="{element}">
        <div class="item" :key="element.type">
          {{element.title}}
          <i class="el-dish"></i>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
  import draggable from 'vuedraggable'
  import { formTemplateStore } from './store'
  import { storeToRefs } from 'pinia'
  const store = formTemplateStore()
  const { tool } = storeToRefs(store)

  const dragStart = (...list: any[]) => {
    // console.log(list, 'dragStart Left')
  }

  const dragEnd = (...list: any[]) => {
    // console.log(list, 'dragEnd Left')
  }
</script>

<style scoped lang="scss">
.left-container {
  width: 200px;
  border: 1px solid #eee;
  height: calc(100vh - 20px);
  .item {
    border: 1px solid #eee;
    padding: 10px;
    margin: 5px;
    cursor: grab;
    user-select: none
  }
}
</style>