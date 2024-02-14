import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.scss'
import { SITE_NAME } from '@/constants/seo.constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: SITE_NAME,
	description: `%s | ${SITE_NAME}`
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
