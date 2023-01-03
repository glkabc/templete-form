import { defineStore } from 'pinia'
import { StoreType, ViewListType } from './type'
import tool from './tools'

export const formTemplateStore = defineStore('formTemplateStore', {
  state: (): StoreType => ({
    tool,
    formConfig: null,
    formData: {},
    viewList: [],
    currentEditor: null
  }),
  actions: {
    setCurrentConfig(data: ViewListType | null) {
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
    },
    updateViewList(data: ViewListType) {
      const id  = data.config.id
      const tempData = this.viewList

      function __(tempData: ViewListType[]) {
        for (let i = 0; i < tempData.length; i++) {
          const cur = tempData[i]
          if (cur.children && cur.children.length > 0) {
            __(cur.children)
          } else {
            if (cur.config.id === id) {
              tempData[i] = data
              break;
            }
          }
        }
      }

      __(tempData);
    }
  }
})