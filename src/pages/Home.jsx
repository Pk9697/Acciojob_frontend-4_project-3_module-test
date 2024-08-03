/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Posts from '../components/Posts'
import { fetchPosts } from '../app/posts-services/postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'

function Home() {
	const dispatch = useDispatch()
	const { posts, status, error='Error' } = useSelector((state) => state.posts)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchPosts())
		}
	}, [status])


	if (status === 'idle') {
		return null
	}

	return (
		<>
			{status === 'loading' ? (
				<Loader />
			) : (
				<>
					{status === 'failed' ? (
						<h1>{error}</h1>
					) : (
						<Posts posts={posts} />
					)}
				</>
			)}
		</>
	)
}

export default Home
