import axios from 'axios'
import {
    LINK_LIST_REQUEST,
    LINK_LIST_SUCCESS,
    LINK_LIST_FAIL,

} from '../constants/linkConstants'


export const listLinks = (fomattedLink) => async (dispatch) => {
    try {
        dispatch({
            type: LINK_LIST_REQUEST
        })

        const { data } = await axios.post(
            '/api_generate/',
            {'movie_to_download': "https://fzmovies.net/"+fomattedLink }

        )

        dispatch({
            type: LINK_LIST_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        dispatch({
            type: LINK_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

