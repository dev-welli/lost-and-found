import request from 'superagent'

import { get } from './localstorage'
import { isAuthenticated } from './auth'

const baseURL = '/api/'

export default function consume(method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'
  const token = get('token')
  const headers = {
    Accept: 'application/json'
  }
  if(isAuthenticated()) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return request[method](baseURL + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      throw err
    })
}


export default function getLost () {
  return request 
  .get('api/lost')
  .then (res => {
    const lostAnimals = res.body
    return lostAnimals
  })
  .catch(() => {
    throw Error('You need to implement an API route for /api/lost')
  })
}


export default function getFound () {
  return request 
  .get('api/found')
  .then (res => {
    const foundAnimals = res.body
    return foundAnimals
  })
  .catch(() => {
    throw Error('You need to implement an API route for /api/found')
  })
}


export default function addLost (lostPet, callback) {
  request
  .post('api/lost')
  .send(lostPet)
  .end((err, res) => {
    callback(err, res)
  })
}


export default function addFound (foundPet, callback) {
  request
  .post('api/lost')
  .send(foundPet)
  .end((err, res) => {
    callback(err, res)
  })
}