import { IComConfig } from "../../store/type"

interface IRowLayout extends IComConfig {
  id: string,
  formKeyName: string,
  col: number
}

export type {
  IRowLayout
}