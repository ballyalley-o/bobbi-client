import { ActionType } from 'constants/enum'

export interface IApiFetch {
  id: number
  title: string
  completed: boolean
}

export interface IApiFetchAction {
  type: ActionType.apifetch
  payload: IApiFetch[]
  // [key: string]: any
}

export interface IApiDeleteAction {
  type: ActionType.apiDelete
  payload: number
  // [key: string]: any
}
