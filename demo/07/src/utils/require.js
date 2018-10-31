import fetch from 'isomorphic-fetch'
import { stringify } from 'query-string'

function parseJSON(response) {
  return response.json()
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const errortext = codeMessage[response.status] || response.statusText
  const error = new Error(response.statusText)
  error.errCode = response.errCode
  error.errortext = errortext
  throw error
}

export default function request(url, options) {
  const newOptions = {
    ...options,
    credentials: 'include',
    headers: {
      'x-requested-with': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => {
      const status = err.errCode
      return { ...err, message: JSON.stringify({ url, newOptions }) }
    })
}

export const get = (url, data) =>
  request(`${url}?${stringify(data)}`, {
    method: 'GET'
  })
export const post = (url, data) =>
  request(url, {
    method: 'POST',
    body: JSON.stringify(data)
  })
