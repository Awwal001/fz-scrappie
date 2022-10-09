
import {
    LINK_LIST_REQUEST,
    LINK_LIST_SUCCESS,
    LINK_LIST_FAIL,
    LINK_LIST_RESET

} from '../constants/linkConstants'


export const linkListReducer = (state = { links: [] }, action) => {
    switch (action.type) {
        case LINK_LIST_REQUEST:
            return {
                ...state, linksloading: true
            }

        case LINK_LIST_SUCCESS:
            return {
                linksloading: false,
                links: action.payload
            }

        case LINK_LIST_FAIL:
            return {
                linksloading: false,
                linkerror: action.payload
            }
        case LINK_LIST_RESET:
            return {
                links: []
            }
        default:
            return state
    }
}