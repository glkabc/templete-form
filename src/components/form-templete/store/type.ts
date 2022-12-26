import { Component } from "vue"

type IToolComTypeName = 
  'TableCore' |
  'InputCore' |
  'InputNumberCore' |
  'checkboxGroupCore'

  interface IBaseTool {
  title: string,
  type: IToolComTypeName,
  icon?: Component
}

interface ILayoutTool extends Omit<IBaseTool, 'type'> {
  type: 'col'
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

interface ItemConfigType extends IBaseTool {
  id?: string,
  formKeyName: string
}

interface ViewListType {
  config: ItemConfigType,
  children?: ViewListType[]
}

interface StoreType {
  formConfig: IFormConfig | null,
  formData: any | null,
  tool: ITool,
  viewList: ViewListType[],
  currentEditor: ItemConfigType | null
}

export type {
  ITool,
  StoreType,
  IBaseTool,
  ItemConfigType,
  ViewListType,
  IToolComTypeName,
  IFormConfig,
}