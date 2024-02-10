import { IApiFetch } from '@interfaces/api-fetch'
import { fetchApi, deleteApi } from '@store/actions'

export interface IApp {
  fetchApiData: IApiFetch[]
  fetchApi: (limit: IAppFetchLimit) => void
  deleteApi: typeof deleteApi
}

export interface IAppFetchLimit {
  fetchLimit: number
}

export interface IAppState {
  fetching: boolean
}
