<template>
  <div class="right-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="表单配置" name="first">
        表单配置
        <vue-json-pretty :data="currentEditor" />
      </el-tab-pane>
      <el-tab-pane label="配置" name="second">
        <component
          v-if="currentEditor?.config"
          :is="getComponent(currentEditor?.config.type)"
          :data="currentEditor"
          @change="change"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import VueJsonPretty from 'vue-json-pretty';
  import 'vue-json-pretty/lib/styles.css';
  import InputConfig from '../components/input/Config.vue';
  import InputNumberConfig from '../components/InputNumber/Config.vue';
  import CheckBoxConfig from '../components/checkbox/Config.vue';
  import RowLayoutConfig from '../components/layout/RowLayoutConfig.vue'
  import { ViewListType } from '../store/type';
  import { markRaw, ref } from 'vue'
  import { useStore } from '../hooks';

  const { store, updateViewList, changeFormFiledName } = useStore()
  const { currentEditor } = storeToRefs(store)
  const activeName = ref('first')

  const change = (newValue: string, oldValue: string, data: ViewListType) => {
    changeFormFiledName(oldValue, '', 'del')
    changeFormFiledName(newValue, '')
    updateViewList(data)
  }

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
  width: 200px;
  min-width: 200px;
  border: 1px solid #eee;
  padding: 10px;
  margin: 0px 5px;
  overflow-x: hidden;
}
</style>