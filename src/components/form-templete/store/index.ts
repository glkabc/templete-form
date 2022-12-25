import { defineStore } from 'pinia'
import { StoreType, ItemConfigType, ViewListType } from './type'
import tool from './tools'


export const formTemplateStore = defineStore('formTemplateStore', {
  state: (): StoreType => ({
    tool,
    formConfig: null,
    viewList: [],
    currentEditor: null
  }),
  actions: {
    setCurrentConfig(data: ItemConfigType) {
      this.currentEditor = data
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