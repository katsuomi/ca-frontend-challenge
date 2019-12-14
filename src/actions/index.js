import { useDispatch } from 'react-redux';
import axios from 'axios';
const SERIES_ROOT_URL = 'https://wfc2-image-api-259809.appspot.com/api/series/';
const BOOKS_ROOT_URL = 'https://wfc2-image-api-259809.appspot.com/api/books/';

export const GET_ALL_SERIES = 'GET_ALL_SERIES';

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
  return [ getAllSeries ]
}
