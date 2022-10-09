import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    movieListReducer,
} from './reducers/movieReducer'

import {
    linkListReducer,
} from './reducers/linkReducer'


const reducer = combineReducers({
    movieList: movieListReducer,
    linkList: linkListReducer,
   
})


const middleware = [thunk]

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store