import { IBaseToolComNameType } from '../store/type'
import { inputConfig } from '../components/input/type'
import { inputNumberConfig } from '../components/InputNumber/type'

export default function useComConfig() {

  function comConfig(type: IBaseToolComNameType) {
    switch (type) {
      case 'InputCore':
        return inputConfig
      case 'InputNumberCore':
        return inputNumberConfig
      default:
        return inputConfig
    }
  }

   return {
    comConfig
   }
}