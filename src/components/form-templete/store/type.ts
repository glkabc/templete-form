import { Component } from "vue"
import { IRowLayout } from "../components/layout/type"

type IToolComTypeName = 
  'TableCore' |
  'InputCore' |
  'InputNumberCore' |
  'checkboxGroupCore'

type IToolType = 'tool' | 'layoutTool'

type ICom = IRowLayout

interface ILayoutTool extends Omit<IBaseTool, 'type'> {
  type: 'col' | 'card'
}

type IBaseToolComNameType = IToolComTypeName | Pick<ILayoutTool, 'type'>['type']

interface IBaseTool {
  title: string
  type: IBaseToolComNameType
  toolType: IToolType
  icon?: Component
}

interface ITool {
  baseTool: IBaseTool[],
  layoutTool: ILayoutTool[]
}

interface IFormConfig {
  modle: any,
  inline?: boolean,
  size: 'large' | 'default' | 'small'
}

interface IComConfig extends IBaseTool {
  id?: string,
  formKeyName: string
}

interface ViewListType<T = IComConfig | ICom> {
  type: IToolType
  key: string
  config: T
  children: ViewListType[]
}

interface StoreType {
  formConfig: IFormConfig | null,
  formData: Record<any, any>,
  tool: ITool,
  viewList: ViewListType[],
  currentEditor: ViewListType | null
}

export type {
  ITool,
  StoreType,
  IBaseTool,
  IComConfig,
  ViewListType,
  IToolComTypeName,
  IFormConfig,
  IBaseToolComNameType,
}