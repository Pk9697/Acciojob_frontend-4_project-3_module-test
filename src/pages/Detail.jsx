/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import DetailedPost from '../components/DetailedPost'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../app/post-services/asyncThunkActions'
import Loader from '../components/Loader'

function Detail() {
	const {id:postId} = useParams()
	const dispatch = useDispatch()
	const { post, status, error='Error' } = useSelector((state) => state.post)

	useEffect(() => {
		if (postId) {
			dispatch(fetchPost({ id: postId }))
		}
	}, [postId])

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
						<DetailedPost post={post} />
					)}
				</>
			)}
		</>
	)
}

export default Detail
