import { formTemplateStore } from "../store";

export default function useStore() {
  const store = formTemplateStore()
  const { setCurrentConfig, changeFormFiledName, updateViewList, deleteOne, sortList } = store;

  return {
    setCurrentConfig,
    changeFormFiledName,
    updateViewList,
    deleteOne,
    sortList,
    store
  }
}