import axios from 'axios'
import { Dispatch } from 'redux'
import { GLOBAL } from '../../config'
import { ActionType } from '../../constants/enum'
import { IApiFetch, IApiFetchAction } from '../../interfaces/api-fetch'

export const fetchApi = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<IApiFetch[]>(GLOBAL.API_MOCK(5) || '')

    dispatch<IApiFetchAction>({
      type: ActionType.apifetch,
      payload: response.data,
    })
  }
}
