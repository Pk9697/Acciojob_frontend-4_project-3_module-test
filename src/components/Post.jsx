function Post({ post = {} }) {
	return (
		<div className='post'>
			<img className='post-image' src={post.imgSrc} alt='post-image' />
			<div className='post-body'>
				<p>User ID: {post.userId}</p>
				<p>
					Title : {post.title.slice(0, 10)}
					{post.title.length > 10 ? '...' : ''}
				</p>
				<p>Body : {post.body.slice(0, 50)}</p>
				{post.body.length > 50 && <a href='#'>Read More...</a>}
			</div>
		</div>
	)
}

export default Post
