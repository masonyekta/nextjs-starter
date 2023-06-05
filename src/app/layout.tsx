import React from 'react'
import { Metadata } from 'next'
import { Inter as FontSans } from '@next/font/google'
import { siteConfig } from '@/config/site'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-inter',
})
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={cn('font-sans antialiased', fontSans.variable)}>
			<head />
			<body className="min-h-screen">{children}</body>
		</html>
	)
}
