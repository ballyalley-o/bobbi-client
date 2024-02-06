import { ActionType } from '@constants/enum'

export interface IApiFetch {
  id: number
  title: string
  completed: boolean
}

export interface IApiFetchAction {
  type: ActionType.apifetch
  payload: IApiFetch[]
  //   EXPERIMENTAL
  [key: string]: any
}
