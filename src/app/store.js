import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postsReducer from './posts-services/postsSlice'
import postReducer from './post-services/postSlice'

const rootReducer = combineReducers({
	posts: postsReducer,
	post: postReducer,
})

const store = configureStore({ reducer: rootReducer })

export { store }
