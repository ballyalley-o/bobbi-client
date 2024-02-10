import { IApiFetch } from '@interfaces/api-fetch'
import { fetchApi, deleteApi } from '@store/actions'

export interface IApp {
  fetchApiData: IApiFetch[]
  fetchApi: Function
  deleteApi: typeof deleteApi
}
