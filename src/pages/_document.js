import { Html, Main, Head, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name="description" content="TODO" />
				<link rel="icon" href="/favicon.svg" />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="TODO" />
				<meta name="twitter:card" content="TODO" />
				<meta name="twitter:description" content="TODO" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}