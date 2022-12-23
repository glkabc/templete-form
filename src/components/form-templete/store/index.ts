import { defineStore } from 'pinia'
import { markRaw } from 'vue'
import { StoreType, ItemConfigType, ViewListType } from './type'
import { Compass, Dish, Position, FullScreen } from '@element-plus/icons-vue'

export const formTemplateStore = defineStore('formTemplateStore', {
  state: (): StoreType => ({
    currentConfig: null,
    tool: {
      baseTool: [
        {
          title: '表格',
          type: 'TableCore',
          icon: markRaw(Dish),
        },
        {
          title: '输入框',
          type: 'InputCore',
          icon: markRaw(Compass),
        },
        {
          title: '数字输入框',
          type: 'InputNumberCore',
          icon: markRaw(Position),
        },
        {
          title: '多选框',
          type: 'checkboxGroupCore',
          icon: markRaw(FullScreen)
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