
import {
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_LIST_FAIL,
    MOVIE_LIST_RESET

} from '../constants/movieConstants'


export const movieListReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case MOVIE_LIST_REQUEST:
            return {
                ...state, loading: true
            }

        case MOVIE_LIST_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }

        case MOVIE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case MOVIE_LIST_RESET:
            return {
                movies: []
            }
        default:
            return state
    }
}