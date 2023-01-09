import { formTemplateStore } from "../store";
import { ViewListType } from "../store/type";

export default function useStore() {
  const store = formTemplateStore()
  const { setCurrentConfig, changeFormFiledName, updateViewList, deleteOne, sortList } = store;

  function changeInputFormStatus(newFormKeyName: string, oldFormKeyName: string) {
    changeFormFiledName(oldFormKeyName, '', 'del')
    changeFormFiledName(newFormKeyName, '')
    updateViewList(store.currentEditor as ViewListType)
  }

  return {
    changeInputFormStatus,
    setCurrentConfig,
    changeFormFiledName,
    updateViewList,
    deleteOne,
    sortList,
    store
  }
}