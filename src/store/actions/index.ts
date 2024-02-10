import axios from 'axios'
import { Dispatch } from 'redux'
import { GLOBAL } from '../../config'
import { ActionType } from '../../constants/enum'
import { IApp, IAppFetchLimit } from '../../interfaces/component'
import {
  IApiFetch,
  IApiFetchAction,
  IApiDeleteAction,
} from '../../interfaces/api-fetch'

export const fetchApi = (limit: IAppFetchLimit) => {
  return async (dispatch: Dispatch) => {
    // wire up the fetchLimit input to the fetchApi action
    const fetchLimit = limit.fetchLimit
    const response = await axios.get<IApiFetch[]>(
      GLOBAL.API_MOCK(fetchLimit) || ''
    )

    dispatch<IApiFetchAction>({
      type: ActionType.apifetch,
      payload: response.data,
    })
  }
}

export const deleteApi = (id: number): IApiDeleteAction => {
  return {
    type: ActionType.apiDelete,
    payload: id,
  }
}
