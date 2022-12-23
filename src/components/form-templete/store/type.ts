type ToolType = 'TableCore' | 'InputCore' | 'InputNumberCore'

interface ItemConfigType extends BaseToolType {
  id?: string
}

interface BaseToolType {
  title: string,
  type: ToolType,
  icon?: string
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