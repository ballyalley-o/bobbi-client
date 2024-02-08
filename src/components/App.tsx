import { Component } from 'react'
import { connect } from 'react-redux'
// @interfaces
import { IApiFetch } from '@interfaces/api-fetch'
import { IStoreState } from '@interfaces/store'
import { IApp } from '@interfaces/component'
// @reducers
import { fetchApi } from '../store/actions'

class _App extends Component<IApp> {
  componentDidMount(): void {
    this.props.fetchApi()
  }

  render() {
    return <h1>Bobbi Client</h1>
  }
}

const mapStateToApp = ({
  fetchApiData,
}: IStoreState): { fetchApiData: IApiFetch[] } => {
  return { fetchApiData }
}

export const App = connect(mapStateToApp, { fetchApi })(_App)
