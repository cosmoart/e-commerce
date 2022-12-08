export default function Login() {
	return (
		<main >
			<form className='absolute-center shadow-md p-5 rounded-md flex flex-col gap-5'>
				<label className="label">
					What is your name?
					<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
				</label>
				<label className="label">
					What is your email?
					<input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
				</label>
				<label className="label">
					What is your password?
					<input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
				</label>
				<button>Login</button>
			</form>
		</main>
	)
}