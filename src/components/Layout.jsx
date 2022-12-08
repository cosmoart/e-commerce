import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>clomerce</title>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}