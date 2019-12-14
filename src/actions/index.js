import { useDispatch } from 'react-redux';
import axios from 'axios';
const SERIES_ROOT_URL = 'https://wfc2-image-api-259809.appspot.com/api/series';
const BOOKS_ROOT_URL = 'https://wfc2-image-api-259809.appspot.com/api/books';

export const GET_ALL_SERIES = 'GET_ALL_SERIES';
export const GET_SERIES = 'GET_SERIES';
export const GET_BOOK = 'GET_BOOK';

export const useActions = () => {
  const dispatch = useDispatch()
  const getAllSeries = () => {
    axios.get(SERIES_ROOT_URL,{})
    .then((result) => {
      const allSeries = result.data.data
      console.log("success:",result)
      dispatch({
        type: GET_ALL_SERIES,
        allSeries
      })
    })
    .catch(err => {
      alert(err)
    })
  }

  const getSeries = (id) => {
    axios.get(`${SERIES_ROOT_URL}/${id}`,{})
    .then((result) => {
      const series = result.data
      console.log("success:",result)
      dispatch({
        type: GET_SERIES,
        series
      })
    })
    .catch(err => {
      alert(err)
    })
  }

  const getBook = (id) => {
    axios.get(`${BOOKS_ROOT_URL}/${id}`,{})
    .then((result) => {
      const book = result.data
      console.log("success:",result)
      dispatch({
        type: GET_BOOK,
        book
      })
    })
    .catch(err => {
      alert(err)
    })
  }

  return [ getAllSeries,getSeries,getBook ]
}
