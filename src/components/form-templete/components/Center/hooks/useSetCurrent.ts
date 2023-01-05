import { formTemplateStore } from "../../../store";
import { ViewListType } from "../../../store/type";

export default function useSetCurrent() {
  const store = formTemplateStore();
  const { setCurrentConfig, changeFormFiledName } = store;

  function setCurrent(index: number, element?: ViewListType | ViewListType[]) {
    if (element && Array.isArray(element)) {
      setCurrentConfig(element[index])
    } else {
      element && setCurrentConfig(element);
    }
  }

  return {
    setCurrent,
    setCurrentConfig, 
    changeFormFiledName
  }
}
