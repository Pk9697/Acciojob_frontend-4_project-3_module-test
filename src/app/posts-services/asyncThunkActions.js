import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	try {
		const url = 'https://jsonplaceholder.typicode.com/posts'
		const response = await fetch(url)
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
})

export { fetchPosts }
