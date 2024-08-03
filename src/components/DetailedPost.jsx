function DetailedPost({ post = {} }) {
	return (
		<div className='detailed-post'>
			<h2>Details Page For Post With Id {post.id}</h2>
			<img
				className='detailed-post-image'
				src={post.imgSrc}
				alt='detailed-post-image'
			/>
			<h2>User Id : {post.userId}</h2>
			<h2>Title : {post.title}</h2>
			<h2>Body : {post.body}</h2>
		</div>
	)
}

export default DetailedPost
