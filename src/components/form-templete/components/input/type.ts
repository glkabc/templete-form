import { FormItemRule } from "element-plus"
import { IComConfig } from "../../store/type"

type InputType = 'default' | 'textarea' | 'password'

interface IInputConfig {
  placeholder: string
  inputType: string
  rules: FormItemRule[]
  required: boolean
  formLabel: string
}

type InputConfig = IInputConfig & IComConfig

const inputConfig: IInputConfig = {
  placeholder: '请输入',
  inputType: 'string',
  required: false,
  formLabel: '',
  rules: [
    { required: true, message: '内容不能为空', trigger: 'blur' },
  ]
}

export type {
  InputType,
  IInputConfig,
  InputConfig,
}

export {
  inputConfig
}