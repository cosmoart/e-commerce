import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
	return (
		<div className='flex'>
			<aside className='min-w-[14rem] p-5'>
				<h2 className='text-xl font-semibold mb-4'>Filter</h2>
			</aside>
			<div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 my-10 px-6 w-full'>
				{
					[...Array(10)].map((e, i) => {
						return (
							<div className="card bg-base-100 shadow-xl rounded-md overflow-hidden" key={i + "Products"}>
								<figure>
									<Image src="https://placeimg.com/400/225/arch" width={400} height={225} alt="Shoes" />
									<figcaption className="card-body p-3">
										<h2 className="card-title">Shoes!</h2>
										<p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
										<div className="card-actions justify-end">
											<Link href={`products/shoe-${i}`} className="btn btn-primary">Add to card</Link>
										</div>
									</figcaption>
								</figure>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}