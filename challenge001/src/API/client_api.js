import axios from "axios"

const api_client = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Accept': '*/*'
  }
})

export default api_client
