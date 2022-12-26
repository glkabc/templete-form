import { defineStore } from 'pinia'
import { StoreType, ItemConfigType, ViewListType } from './type'
import tool from './tools'


export const formTemplateStore = defineStore('formTemplateStore', {
  state: (): StoreType => ({
    tool,
    formConfig: null,
    formData: null,
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
    },
    changeFormFiledName(keyName: string, defaultValue?: any, type?: 'del') {
      if (type !== 'del') {
        this.formData = {
          ...this.formData,
          [keyName]: defaultValue
        }
      } else {
        delete this.formData[keyName]
      }
    }
  }
})