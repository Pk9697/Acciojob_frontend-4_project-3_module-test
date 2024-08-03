import { createSlice } from '@reduxjs/toolkit'
import { fetchPost } from './asyncThunkActions'

const initialState = {
	post: {},
	status: 'idle',
	error: null,
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(fetchPost.pending, (state) => {
			state.status = 'loading'
		})
		builder.addCase(fetchPost.fulfilled, (state, action) => {
			state.status = 'succeeded'
			state.post = {
				...action.payload,
				imgSrc: `https://picsum.photos/200?random=${action.payload.id}`,
			}
		})
		builder.addCase(fetchPost.rejected, (state, action) => {
			state.status = 'failed'
			state.error = action.error.message
		})
	},
})

export { fetchPost }

export default postSlice.reducer
