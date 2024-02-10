import { Component } from 'react'
import { connect } from 'react-redux'
// @interfaces
import { IApiFetch } from '@interfaces/api-fetch'
import { IStoreState } from '@interfaces/store'
import { IApp, IAppState, IAppFetchLimit } from '@interfaces/component'
// @reducers
import { fetchApi, deleteApi } from '../store/actions'

class _App extends Component<IApp, IAppState> {
  fetchLimit: IAppFetchLimit | undefined

  constructor(props: IApp) {
    super(props)

    this.state = { fetching: false }
  }

  onButtonClick = (): void => {
    if (this.fetchLimit) this.props.fetchApi(this.fetchLimit)
    this.setState({ fetching: true })
  }

  onDeleteClick = (id: number): void => {
    this.props.deleteApi(id)
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newFetchLimit = parseInt(event.target.value, 10)

    this.fetchLimit = { fetchLimit: newFetchLimit }
  }

  componentDidUpdate(prevProps: IApp): void {
    if (!prevProps.fetchApiData.length && this.props.fetchApiData.length) {
      this.setState({ fetching: false })
    }
  }

  renderList(): JSX.Element[] {
    return this.props.fetchApiData.map((api: IApiFetch) => {
      return (
        <div key={api.id} style={{ marginTop: '2em', marginBottom: '2em' }}>
          <button onClick={() => this.onDeleteClick(api.id)}> ❌ </button>
          &nbsp;{api.title}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <span>
          <input
            placeholder='enter limit'
            type='number'
            onChange={this.handleInputChange}
            value={this.fetchLimit && this.fetchLimit.fetchLimit}
          />
        </span>
        <button
          // if the input value changes, update the fetchLimit or remove the disabled
          disabled={this.props.fetchApiData.length > 0 && !this.fetchLimit}
          onClick={this.onButtonClick}
        >
          Fetch Api
        </button>
        <div
          style={{
            fontFamily: 'monospace',
          }}
        >
          <h2>
            {this.state.fetching &&
              this.props.fetchApiData.length &&
              !this.fetchLimit &&
              'Loading...'}
          </h2>
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

export const App = connect(mapStateToApp, {
  fetchApi,
  deleteApi,
})(_App)
