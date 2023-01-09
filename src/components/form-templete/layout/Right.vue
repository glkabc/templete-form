<template>
  <div class="right-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件配置" name="first">
        <component
          v-if="currentEditor?.config"
          :is="getComponent(currentEditor?.config.type)"
          :data="currentEditor"
          :config="currentEditor.config"
        />
      </el-tab-pane>
      <el-tab-pane label="表单配置" name="second">
        表单配置
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import InputConfig from '../components/input/Config.vue';
  import InputNumberConfig from '../components/InputNumber/Config.vue';
  import CheckBoxConfig from '../components/checkbox/Config.vue';
  import RowLayoutConfig from '../components/layout/RowLayoutConfig.vue'
  import { markRaw, ref } from 'vue';
  import { useStore } from '../hooks';

  const { store } = useStore()
  const { currentEditor } = storeToRefs(store)
  const activeName = ref('first')

  const getComponent = (type?: any) => {
    switch(type) {
      case 'InputCore':
        return markRaw(InputConfig);
      case 'InputNumberCore':
        return markRaw(InputNumberConfig);
      case 'checkboxGroupCore':
        return markRaw(CheckBoxConfig);
      case 'col':
          return markRaw(RowLayoutConfig);
      default:
        return markRaw(InputConfig);;
    }
  }
</script>

<style lang="scss" scoped>
.right-container {
  width: 250px;
  min-width: 250px;
  border: 1px solid #eee;
  padding: 10px;
  margin: 0px 5px;
  overflow-x: hidden;
}
</style>