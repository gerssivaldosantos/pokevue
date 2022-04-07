import axios, { AxiosPromise } from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

const getHeaders = (headers = {}) => {
  if (localStorage.token) {
    const token = localStorage.getItem('token')
    return {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers
    }
  }
}
export const useRequest = {
  get (routeName:string, headers = {}) {
    return axios.get(`${baseUrl}/${routeName}`, { headers: getHeaders(headers) })
  },
  post (routeName:string, params?:any, headers = {}):AxiosPromise {
    return axios.post(`${baseUrl}/${routeName}`, params, { headers: getHeaders(headers) })
  }

}