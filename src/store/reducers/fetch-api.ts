import { IApiFetch } from '@interfaces/api-fetch'
import { ActionType } from '../../constants/enum'
import { Action } from '@typings'

export const fetchApiReducer = (state: IApiFetch[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.apifetch:
      return action.payload
    case ActionType.apiDelete:
      return state.filter((item: IApiFetch) => item.id !== action.payload)
    default:
      return state
  }
}
