const API_LIMIT = 8

const GLOBAL = {
  API_URL: process.env.REACT_APP_API_MOCK,
  API_VERSION: process.env.REACT_APP_API_VERSION,
  API_MOCK: (limit = API_LIMIT) => process.env.REACT_APP_API_MOCK + `${limit}`,
}

export default GLOBAL
