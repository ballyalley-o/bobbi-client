import { Component } from 'react'
import { connect } from 'react-redux'
// @interfaces
import { IApiFetch } from '@interfaces/api-fetch'
import { IStoreState } from '@interfaces/store'
import { IApp } from '@interfaces/component'
// @reducers
import { fetchApi } from '../store/actions'

class _App extends Component<IApp> {
  onButtonClick = (): void => {
    this.props.fetchApi()
  }

  renderList(): JSX.Element[] {
    return this.props.fetchApiData.map((api: IApiFetch) => {
      return (
        <div key={api.id} style={{ marginTop: '2em', marginBottom: '2em' }}>
          {api.title}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Api</button>
        <div
          style={{
            fontFamily: 'monospace',
          }}
        >
          <h3>{this.renderList()}</h3>
        </div>
      </div>
    )
  }
}

const mapStateToApp = ({
  fetchApiData,
}: IStoreState): { fetchApiData: IApiFetch[] } => {
  return { fetchApiData }
}

export const App = connect(mapStateToApp, { fetchApi })(_App)
