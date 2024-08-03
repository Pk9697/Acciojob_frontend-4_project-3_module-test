import { Link } from 'react-router-dom'

function Header() {
	return (
		<div className='header'>
			<h3>
				<Link to='/'>Social Media App</Link>
			</h3>
		</div>
	)
}

export default Header
