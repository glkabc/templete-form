import { IBaseToolComNameType } from '../store/type'
import { inputConfig } from '../components/input/type'

export default function useComConfig() {

  function comConfig(type: IBaseToolComNameType) {
    switch (type) {
      case 'InputCore':
        return inputConfig
      default:
        return inputConfig
    }
  }

   return {
    comConfig
   }
}