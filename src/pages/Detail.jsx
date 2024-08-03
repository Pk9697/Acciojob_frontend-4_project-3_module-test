import DetailedPost from '../components/DetailedPost'
import Header from '../components/Header'

function Detail() {
	const post = {
		userId: 1,
		id: 1,
		title:
			'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
		body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
		imgSrc: 'https://picsum.photos/200?random=1',
	}
	return (
		<>
			<Header />
			<DetailedPost post={post}/>
		</>
	)
}

export default Detail
