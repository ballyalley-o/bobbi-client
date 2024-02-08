import { combineReducers } from 'redux'
import { fetchApiReducer } from './fetch-api'
import { IStoreState } from '../../interfaces/store'

export const reducers = combineReducers<IStoreState>({
  fetchApiData: fetchApiReducer,
})
