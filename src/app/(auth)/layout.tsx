export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="max-w-screen-2xl mx-auto">
			<h1>Logo</h1>
			<div className='flex justify-center items-center w-full mt-20'>
				{children}
			</div>
		</div>

	)
}
