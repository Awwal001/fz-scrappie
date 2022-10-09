import axios from 'axios'
import {
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,

} from '../constants/movieConstants'


export const findMovies = (searchword) => async (dispatch) => {
    try {
        dispatch({
            type: MOVIE_LIST_REQUEST
        })

        const { data } = await axios.post(
            'https://fz-scrappie.herokuapp.com/api_find/',
            {'searchword': searchword}
        )

        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: data.data
        })

       

    } catch (error) {
        dispatch({
            type: MOVIE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

