import { BsGithub } from 'react-icons/bs';

export default function Footer() {
	return (
		<footer className="footer p-10 bg-slate-500 text-white">
			<a href="https://github.com/cosmoart/e-commerce" target="_blank" rel="noopener noreferrer">
				<BsGithub className="text-3xl" />
			</a>
		</footer>
	)
}