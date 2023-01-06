<template>
  <div class="left-container">
    <el-menu>
      <el-sub-menu index="baseCom">
        <template #title>
          <el-icon><Coin /></el-icon>
          <span>组件</span>
        </template>
        <el-menu-item-group>
          <draggable
            v-model="tool.baseTool"
            :group="{ name: 'people', pull: 'clone', put: false }"
            item-key="type"
          >
            <template #item="{ element }">
              <el-menu-item class="item" :index="element.type">
                <div>
                  <el-icon><component :is="element.icon" /></el-icon>
                  {{ element.title }}
                </div>
              </el-menu-item>
            </template>
          </draggable>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="layout">
        <template #title>
          <el-icon><Menu /></el-icon>
          <span>布局</span>
        </template>
        <el-menu-item-group>
          <draggable
            v-model="tool.layoutTool"
            :group="{ name: 'people', pull: 'clone', put: false }"
            item-key="type"
          >
            <template #item="{ element }">
              <el-menu-item class="item" :index="element.type">
                <div>
                  <el-icon><component :is="element.icon" /></el-icon>
                  {{ element.title }}
                </div>
              </el-menu-item>
            </template>
          </draggable>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import draggable from "vuedraggable";
  import { storeToRefs } from "pinia";
  import { useStore } from "../hooks";
  
  const { store } = useStore()
  const { tool } = storeToRefs(store);
</script>

<style scoped lang="scss">
.left-container {
  width: 250px;
  min-width: 150px;
  border: 1px solid #eee;
  height: calc(100vh - 20px);
  .item {
    border: 1px solid #eee;
    padding-left: 10px;
    margin: 5px;
    cursor: grab;
    user-select: none;
  }
}
</style>
