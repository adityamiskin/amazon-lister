'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { convertToListing } from '@/lib/actions';

interface Listing {
	title: string;
	description: string;
	price: string;
	features: string[];
}

export default function Converter() {
	const [url, setUrl] = useState('');
	const [listing, setListing] = useState<Listing | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const result = await convertToListing(url);
			setListing(JSON.parse(result));
		} catch (error) {
			console.error('Error converting to listing:', error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleListingChange = (field: keyof Listing, value: string) => {
		setListing((prev) => {
			if (!prev) return null;
			return {
				...prev,
				[field]: field === 'features' ? value.split('\n') : value,
			};
		});
	};

	return (
		<div className='container mx-auto p-4'>
			<Card className='w-full max-w-2xl mx-auto'>
				<CardHeader>
					<CardTitle>Social Media to Amazon Listing Converter</CardTitle>
					<CardDescription>
						Enter a social media post URL to generate an Amazon product listing
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='url'>Social Media Post URL</Label>
							<Input
								id='url'
								placeholder='https://example.com/post/123'
								value={url}
								onChange={(e) => setUrl(e.target.value)}
								required
							/>
						</div>
						<Button type='submit' disabled={isLoading}>
							{isLoading ? 'Converting...' : 'Convert to Listing'}
						</Button>
					</form>
				</CardContent>
				{listing && (
					<CardFooter className='flex flex-col items-start'>
						<h3 className='text-lg font-semibold mb-2'>
							Generated Amazon Listing (Editable):
						</h3>
						<div className='w-full space-y-2'>
							<Label htmlFor='title'>Title</Label>
							<Input
								id='title'
								value={listing.title}
								onChange={(e) => handleListingChange('title', e.target.value)}
							/>
							<Label htmlFor='description'>Description</Label>
							<Textarea
								id='description'
								value={listing.description}
								onChange={(e) =>
									handleListingChange('description', e.target.value)
								}
								className='h-32'
							/>
							<Label htmlFor='price'>Price ($)</Label>
							<Input
								id='price'
								value={listing.price}
								onChange={(e) => handleListingChange('price', e.target.value)}
								type='number'
								step='0.01'
							/>
							<Label htmlFor='features'>Key Features (one per line)</Label>
							<Textarea
								id='features'
								value={listing.features.join('\n')}
								onChange={(e) =>
									handleListingChange('features', e.target.value)
								}
								className='h-24'
							/>
						</div>
					</CardFooter>
				)}
			</Card>
		</div>
	);
}
