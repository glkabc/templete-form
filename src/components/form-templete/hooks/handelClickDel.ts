import { ViewListType } from "../store/type";
import useStore from "./useStore";

export default function () {
  const { setCurrentConfig, changeFormFiledName, store } = useStore()
  
  function delOneItem(element: ViewListType, index: number, source?: ViewListType[]) {
    const newIndex = source?.findIndex(v => v.key == element.key)
    
    if(element.children) {
      // 同步删除对应子组件中对应的表单字段
      const length = element.children.length - 1;
      for (let i = length; i >= 0; i--) {
        delOneItem(element.children[i], i, element.children)
      }
    }
  
    if (element.config.id === store.currentEditor?.config.id) {
      setCurrentConfig(null);
    }
    element.type === 'tool' && changeFormFiledName(element.config.formKeyName, '', 'del');
    newIndex !== undefined && (newIndex >= 0) && source?.splice(newIndex, 1)
  }
  return {
    delOneItem
  }
}