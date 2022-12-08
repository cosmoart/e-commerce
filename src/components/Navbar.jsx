import Link from 'next/link'
import Image from 'next/image'
import logo from "../assets/logo.svg"
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'

export default function Navbar() {
	const [showUser, setShowUser] = useState(false);

	return (
		<header className="px-8 py-3 flex justify-between items-center shadow-sm">
			<nav className='flex gap-8'>
				<Link href="/products">Shop</Link>
				<button className='hover:opacity-75'>
					< BiSearch className='text-lg' />
				</button>
			</nav>
			<Link href="/" className='hover:opacity-75'>
				<Image src={logo} alt='' className='invert w-24' />
			</Link>
			<nav className='flex gap-8'>
				<button className='hover:opacity-75'>
					< HiOutlineShoppingCart className='text-md' />
				</button>
				<div className='relative'>
					<button className='w-7 h-7 rounded-full bg-blue-200' onClick={() => setShowUser(!showUser)}></button>
					<nav className={`flex-col gap-2 flex absolute right-0 w-48 bg-white rounded-md shadow-lg p-4 transition-all ${showUser ? 'opacity-100 top-10' : 'opacity-0 top-5 user select-none'}`}>
						<Link href="/login">Login</Link>
						<Link href="/login">Register</Link>
					</nav>
				</div>
			</nav>
		</header>
	)
}