// this file will be our endpoint

import axios from 'axios'

export const getAlb = () => {
    const URL = 'http://localhost:3001/alb'
    const response = axios.get(URL)
    console.log(response)
    return response 
}

export const getAlbSing = (id) => {
    const URL = `http://localhost:3001/alb/${id}`
    const response = axios.get(URL)
    console.log(response)
    return response 
}

export const deleteAlbSing = (id) => {
    const URL = `http://localhost:3001/alb/${id}`
    const response = axios.delete(URL)
    return response
}

export const editAlbSing = (id, updatedAlbSing) => {
    const URL = `http://localhost:3001/alb/${id}`
    const response = axios.put(URL, updatedAlbSing)
    return response
}