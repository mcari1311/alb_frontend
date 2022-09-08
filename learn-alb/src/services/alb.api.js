// this file will be our endpoint

import axios from 'axios'

export const getAlb = () => {
    const URL = 'https://learnalb-backend.herokuapp.com/alb'
    const response = axios.get(URL)
    console.log(response)
    return response 
}

export const getAlbSing = (id) => {
    const URL = `https://learnalb-backend.herokuapp.com/alb/${id}`
    const response = axios.get(URL)
    console.log(response)
    return response 
}

export const deleteAlbSing = (id) => {
    const URL = `https://learnalb-backend.herokuapp.com/alb/${id}`
    const response = axios.delete(URL)
    return response
}

export const editAlbSing = (id, updatedAlbSing) => {
    const URL = `https://learnalb-backend.herokuapp.com/alb/${id}`
    const response = axios.put(URL, updatedAlbSing)
    return response
}

export const createAlbSing = (albSing) => {
    const URL = 'https://learnalb-backend.herokuapp.com/alb'
    const response = axios.post(URL, albSing)
    return response 
}