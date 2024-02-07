import { IApiFetch, IApiFetchAction } from '@interfaces/api-fetch'
import { ActionType } from '../../constants/enum'

export const fetchApiReducer = (
  state: IApiFetch[] = [],
  action: IApiFetchAction
) => {
  switch (action.type) {
    case ActionType.apifetch:
      return action.payload
    default:
      return state
  }
}
