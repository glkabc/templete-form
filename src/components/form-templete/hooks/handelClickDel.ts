import { ViewListType } from "../store/type";
import useStore from "./useStore";

export default function () {
  const { setCurrentConfig, changeFormFiledName, store } = useStore()
  
  function delOneItem(element: ViewListType, index: number, source?: ViewListType[]) {
    console.log(element, index, source, 'will del data to see')
    if(element.children) {
      // 同步删除对应子组件中对应的表单字段
      element.children.forEach((item, i) => {
        delOneItem(item, i, element.children)
      })
    }
  
    if (element.config.id === store.currentEditor?.config.id) {
      setCurrentConfig(null);
    }
    changeFormFiledName(element.config.formKeyName, '', 'del');
    source?.splice(index, 1)
  }
  return {
    delOneItem
  }
}