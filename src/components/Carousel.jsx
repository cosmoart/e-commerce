import Image from 'next/image'
import { IoIosArrowBack } from 'react-icons/io'

export default function Carousel() {
	let images = []
	return (
		<div className="w-full h-[70vh] bg-blue-200">
			<button className='hover:scale-105 hover:opacity-75 transition-transform cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 left-2'>
				<IoIosArrowBack className='text-3xl' />
			</button>
			<div className='relative h-full grid grid-cols-[repeat(2,100%)] overflow-x-auto'>
				<div className='w-full h-full bg-red-500 inline-block'></div>
				<div className='w-full h-full bg-blue-500 inline-block'></div>
				{/* <Image src="/assets/logo.svg" alt="asf" width="400" height="500" className='w-full h-full object-cover'></Image>
				<Image src="/assets/logo.svg" alt="asf" width="400" height="500" className='w-full h-full object-cover'></Image> */}
			</div>
			<button className='hover:scale-105 hover:opacity-75 transition-transform cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 right-2'>
				<IoIosArrowBack className="rotate-180 text-3xl" />
			</button>
		</div>
	)
}