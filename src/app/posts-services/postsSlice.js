import { createSlice } from "@reduxjs/toolkit"
import { fetchPosts } from "./asyncThunkActions"

const initialState = {
	posts: [],
	status: 'idle',
	error: null,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state) => {
			state.status = 'loading'
		})
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.posts = action.payload.map((post)=>({...post,imgSrc: `https://picsum.photos/200?random=${post.id}`}))
		})
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		})
	},
})

export { fetchPosts }

export default postsSlice.reducer
