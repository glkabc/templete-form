import { Component } from "vue"

type ToolType = 'TableCore' | 'InputCore' | 'InputNumberCore' | 'checkboxGroupCore'

interface ItemConfigType extends BaseToolType {
  id?: string
}

interface BaseToolType {
  title: string,
  type: ToolType,
  icon?: string | Component
}

interface ViewListType {
  config: ItemConfigType,
}

interface StoreType {
  currentConfig: ItemConfigType | null,
  tool: {
    baseTool: BaseToolType[],
    layoutTool: {}[]
  },
  viewList: ViewListType[]
}

export type {
  StoreType,
  BaseToolType,
  ItemConfigType,
  ViewListType,
  ToolType
}