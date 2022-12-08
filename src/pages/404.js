import Link from 'next/link'

export default function NotFound() {
	return (
		<div>
			<main className='absolute-center text-center'>
				<h1>404 - Page Not Found</h1>
				<Link href="/"> Go back home</Link>
			</main>
		</div>
	)
}