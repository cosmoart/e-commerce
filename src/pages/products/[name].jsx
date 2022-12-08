import { useRouter } from 'next/router'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'

const Post = () => {
	const router = useRouter()
	const { name } = router.query

	return (
		<div className='mx-auto max-w-5xl'>
			<button className='btn' onClick={router.back}><BsArrowLeft className='text-2xl' /></button>
			<div className="flex gap-3 bg-base-100 max-w-2xl mx-auto mt-8">
				<div>
					<Image className='rounded-md' src="https://placeimg.com/200/280/arch" alt="Movie" width={200} height={280} />
				</div>
				<div className="">
					<h2 className="font-bold text-xl">{name}</h2>
					<p>Click the button to watch on Jetflix app.</p>
					<div className="card-actions justify-end">
						<button className="bg-blue-200 px-4 py-2 rounded-sm">Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post