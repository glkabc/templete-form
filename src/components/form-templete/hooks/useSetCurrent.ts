import { ViewListType } from "../store/type";
import useStore from "./useStore";

export default function useSetCurrent() {
  const { setCurrentConfig } = useStore()

  function setCurrent(index: number, element?: ViewListType | ViewListType[]) {
    if (element && Array.isArray(element)) {
      setCurrentConfig(element[index])
    } else {
      element && setCurrentConfig(element);
    }
  }

  return {
    setCurrent
  }
}
