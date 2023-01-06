import { FormItemRule } from "element-plus"
import { IComConfig } from "../../store/type"
import { Arrayable } from "element-plus/es/utils"

type InputType = 'default' | 'textarea' | 'password'

interface IInputConfig {
  placeholder: string
  inputType: string
  rules?: Arrayable<FormItemRule>
  required: boolean
}

type InputConfig = IInputConfig & IComConfig

const inputConfig: IInputConfig = {
  placeholder: '请输入',
  inputType: 'string',
  required: true,
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