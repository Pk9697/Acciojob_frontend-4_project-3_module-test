import { Link, useNavigate } from 'react-router-dom'

function Post({ post = {} }) {
	const navigate = useNavigate()

	return (
		<div className='post' onClick={() => navigate(`/item/${post.id}`)}>
			<img className='post-image' src={post.imgSrc} alt='post-image' />
			<div className='post-body'>
				<p>User ID: {post.userId}</p>
				<p>
					Title : {post.title.slice(0, 10)}
					{post.title.length > 10 ? '...' : ''}
				</p>
				<p>Body : {post.body.slice(0, 50)}</p>
				{post.body.length > 50 && <Link to={`/item/${post.id}`}>Read More...</Link>}
			</div>
		</div>
	)
}

export default Post
