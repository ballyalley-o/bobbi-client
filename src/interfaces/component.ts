import { IApiFetch } from '@interfaces/api-fetch'

export interface IApp {
  fetchApiData: IApiFetch[]
  fetchApi(): any
}
