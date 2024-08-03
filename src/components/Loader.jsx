import { Triangle } from "react-loader-spinner"

function Loader() {
	return (
		<div className='loader'>
			<Triangle
				visible={true}
				height='80'
				width='80'
				color='#fff'
				ariaLabel='triangle-loading'
				wrapperStyle={{}}
				wrapperClass=''
			/>
		</div>
	)
}

export default Loader
