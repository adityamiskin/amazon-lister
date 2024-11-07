import HeaderAuth from '@/components/header-auth';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={GeistSans.className} suppressHydrationWarning>
			<body className='bg-background text-foreground'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<main className='min-h-screen flex flex-col items-center'>
						<div className='flex-1 w-full flex flex-col items-center'>
							<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center'>
								<div className='container flex h-14 items-center'>
									<div className='flex items-center space-x-2'>
										<Link href='/' className='font-bold'>
											Amazon Lister
										</Link>
									</div>
									<div className='flex flex-1 items-center justify-end space-x-4'>
										<nav className='flex items-center space-x-4'>
											<HeaderAuth />
											<ThemeSwitcher />
										</nav>
									</div>
								</div>
							</header>

							<div className='flex flex-col gap-20 p-5'>{children}</div>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
