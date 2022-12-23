import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { StoreType, ItemConfigType, ViewListType } from './type'

export const formTemplateStore = defineStore('formTemplateStore', {
  state: (): StoreType => ({
    currentConfig: null,
    tool: {
      baseTool: [
        {
          title: '表格',
          type: 'TableCore',
          icon: '<el-icon><Dish /></el-icon>',
        },
        {
          title: '输入框',
          type: 'InputCore',
          icon: '<el-icon><Compass /></el-icon>'
        },
        {
          title: '数字输入框',
          type: 'InputNumberCore',
          icon: '<el-icon><Position /></el-icon>'
        }
      ],
      layoutTool: []
    },
    viewList: []
  }),
  actions: {
    setCurrentConfig(data: ItemConfigType) {
      this.currentConfig = data
    },
    deleteOne(index: number) {
      this.viewList.splice(index, 1)
    },
    sortList(data: ViewListType, newIndex: number, oldIndex?: number) {
      oldIndex !== undefined && this.viewList.splice(oldIndex, 1)
      this.viewList.splice(newIndex, 0, data)
    }
  }
})