import Post from './Post'

// eslint-disable-next-line react/prop-types
function Posts({ posts = [] }) {
	const post = {
		userId: 1,
		id: 1,
		title:
			'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        imgSrc: 'https://picsum.photos/200?random=1',
	}
	return (
		<div className='posts'>
			{posts.map((post) => (
				<Post key={post.id} post={post} />
            ))}
            <Post post={post}/>
            <Post post={post}/>
            <Post post={post}/>
		</div>
	)
}

export default Posts
