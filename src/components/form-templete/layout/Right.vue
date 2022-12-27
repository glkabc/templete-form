<template>
  <div class="right-container">
    {{ currentEditor }}
    <el-tabs>
      <el-tab-pane label="表单配置" name="first">表单配置</el-tab-pane>
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
  import { formTemplateStore } from '../store';
  import InputConfig from '../components/input/Config.vue';
  import InputNumberConfig from '../components/InputNumber/Config.vue';
  import CheckBoxConfig from '../components/checkbox/Config.vue'
  import { IToolComTypeName, ViewListType } from '../store/type';
  import { markRaw } from 'vue'
  const store = formTemplateStore()
  const { currentEditor } = storeToRefs(store)
  const { updateViewList, changeFormFiledName } = store

  const change = (newValue: string, oldValue: string, data: ViewListType) => {
    changeFormFiledName(oldValue, '', 'del')
    changeFormFiledName(newValue, '')
    updateViewList(data)
  }

  const getComponent = (type?: IToolComTypeName) => {
    switch(type) {
      case 'InputCore':
        return markRaw(InputConfig);
      case 'InputNumberCore':
        return markRaw(InputNumberConfig);
      case 'checkboxGroupCore':
        return markRaw(CheckBoxConfig);
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