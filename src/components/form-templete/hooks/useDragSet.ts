import { ViewListType } from "../store/type"
import useStore from "./useStore"
import _ from 'loadsh'

export default function useDragSet() {
  const { changeFormFiledName, setCurrentConfig } = useStore();

  function dragSet (data: any, source?: ViewListType[]) {
    if (data.added) {
      const newIndex = data.added.newIndex
      const element = data.added.element
      if (element.config) {
        // 已有的组件插入
        source?.splice(newIndex, 0, element)
      } else {
        // 新组件插入
        const onlyOneId = _.uniqueId("contact_")
        const formKeyName = element.type + '_' + onlyOneId
        const type = data.added.element.toolType
        const addData: ViewListType = {
          type,
          key: onlyOneId,
          config: {
            ...element,
            id: onlyOneId,
            formKeyName
          },
          children: [],
        }
  
        changeFormFiledName(formKeyName, addData.config.type === 'InputNumberCore' ? 0 : '')
        setCurrentConfig(addData);
        source?.splice(newIndex, 0, addData)
      }
    } else if (data.moved) {
      // 平级组件间移动
      const { element, newIndex, oldIndex } = data.moved;
      source?.splice(oldIndex, 1)
      source?.splice(newIndex, 0, element)
    } else if (data.removed) {
      // 跨级组件间移动
      const { oldIndex } = data.removed;
      source?.splice(oldIndex, 1)
    }
  };

  return {
    dragSet
  }
}