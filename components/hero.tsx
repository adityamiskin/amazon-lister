import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingCart, Share2 } from 'lucide-react';

export default function Header() {
	return (
		<div className='py-12'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
							Transform Social Content into Amazon Listings
						</h1>
						<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
							Seamlessly convert your social media content into professional
							Amazon product listings using advanced AI technology.
						</p>
					</div>
					<div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
						<Button className='gap-2'>
							Get Started
							<ArrowRight className='h-4 w-4' />
						</Button>
					</div>
					<div className='flex gap-8 mt-12'>
						<div className='flex flex-col items-center'>
							<Share2 className='h-8 w-8 mb-2 text-primary' />
							<h3 className='font-semibold'>Social Import</h3>
							<p className='text-sm text-muted-foreground'>
								Import content directly from social platforms
							</p>
						</div>
						<div className='flex flex-col items-center'>
							<ShoppingCart className='h-8 w-8 mb-2 text-primary' />
							<h3 className='font-semibold'>Amazon Ready</h3>
							<p className='text-sm text-muted-foreground'>
								Optimized for Amazon's marketplace
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
