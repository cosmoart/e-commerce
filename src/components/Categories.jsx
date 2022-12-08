import Image from 'next/image'
import Link from 'next/link'

export default function Categories() {
	return (
		<div className='grid grid-cols-2 my-10 gap-4 justify-center mx-auto max-w-6xl px-7'>
			<Link href="/products?categories=shoes" className="w-full shadow-xl row-span-2 rounded-md overflow-hidden hover:scale-[1.015] transition-transform image-full before:contents">
				<figure className='relative h-full after:w-full after:h-24 after:bg-gradient-to-t after:from-black after:to-transparent after:absolute after:bottom-0 after:-z-10'>
					<Image className='w-full h-full absolute top-0 left-0 -z-20' width="400" height="225" src="https://placeimg.com/400/225/arch" alt="Shoes" />
					<figcaption className="absolute bottom-2 text-white px-6 py-4">
						<h2 className="text-lg font-bold">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
					</figcaption>
				</figure>
			</Link>
			<Link href="/products?categories=shoes" className="w-fullbg-base-100 shadow-xl image-full rounded-md overflow-hidden hover:scale-[1.015] transition-transform">
				<figure className='relative min-h-[20rem] '>
					<Image className='w-full h-full absolute top-0 left-0' width="400" height="225" src="https://placeimg.com/400/225/arch" alt="Shoes" />
					<figcaption className="absolute bottom-2 text-white px-6 py-4">
						<h2 className="text-lg font-bold">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
					</figcaption>
				</figure>
			</Link>
			<Link href="/products?categories=shoes" className="w-full bg-base-100 shadow-xl image-full rounded-md overflow-hidden hover:scale-[1.015] transition-transform">
				<figure className='relative min-h-[20rem]'>
					<Image className='w-full h-full absolute top-0 left-0' width="400" height="225" src="https://placeimg.com/400/225/arch" alt="Shoes" />
					<figcaption className="absolute bottom-2 px-6 py-4 text-white">
						<h2 className="text-lg font-bold">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
					</figcaption>
				</figure>
			</Link>
		</div>
	)
}