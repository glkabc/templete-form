import { FormItemRule } from "element-plus"
import { IComConfig } from "../../store/type"

interface IInputNumberConfig {
  placeholder: string
  rules: FormItemRule[]
  required: boolean
  formLabel: string
  min?: number
  max?: number
}

type InputNumberConfig = IInputNumberConfig & IComConfig

const inputNumberConfig: IInputNumberConfig = {
  placeholder: '请输入',
  required: false,
  formLabel: '',
  rules: [
    { required: true, message: '内容不能为空', trigger: 'blur' },
  ]
}

export type {
  IInputNumberConfig,
  InputNumberConfig,
}

export {
  inputNumberConfig
}