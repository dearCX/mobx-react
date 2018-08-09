import axios from 'axios'
 
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
const http = axios.create({
	baseURL: 'https://hn.algolia.com/api/v1',
  timeout: 10000,
  headers
})

const handleRequestSuccess = (config) => {
	return config
}
const handleRequestError = (error) => {
	return Promise.reject(error)
}

const handleResponseSuccess = (response) => {
	if (response.status === 200) {
		return response.data
	}
}
const handleResponseError = (error) => {
	return Promise.reject(error)
}

http.interceptors.request.use(handleRequestSuccess, handleRequestError)
http.interceptors.response.use(handleResponseSuccess, handleResponseError)

export {
  http
}