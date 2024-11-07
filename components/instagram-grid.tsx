'use client';

import { useState } from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const mockInstagramPosts = [
	{
		id: '1',
		username: 'user1',
		userAvatar: '/placeholder.svg?height=40&width=40',
		imageUrl:
			'https://g-c0zv8myovah.vusercontent.net/placeholder.svg?height=400&width=400',
		likes: 1234,
		caption: 'Beautiful sunset!',
		comments: 56,
	},
	{
		id: '2',
		username: 'user2',
		userAvatar: '/placeholder.svg?height=40&width=40',
		imageUrl:
			'https://g-c0zv8myovah.vusercontent.net/placeholder.svg?height=400&width=400',
		likes: 5678,
		caption: 'Delicious food!',
		comments: 89,
	},
	{
		id: '3',
		username: 'user3',
		userAvatar: '/placeholder.svg?height=40&width=40',
		imageUrl:
			'https://g-c0zv8myovah.vusercontent.net/placeholder.svg?height=400&width=400',
		likes: 9012,
		caption: 'Amazing view!',
		comments: 123,
	},
	{
		id: '4',
		username: 'user4',
		userAvatar: '/placeholder.svg?height=40&width=40',
		imageUrl:
			'https://g-c0zv8myovah.vusercontent.net/placeholder.svg?height=400&width=400',
		likes: 3456,
		caption: 'Great times with friends!',
		comments: 78,
	},
	{
		id: '5',
		username: 'user5',
		userAvatar: '/placeholder.svg?height=40&width=40',
		imageUrl:
			'https://g-c0zv8myovah.vusercontent.net/placeholder.svg?height=400&width=400',
		likes: 7890,
		caption: 'Nature at its best!',
		comments: 234,
	},
	{
		id: '6',
		username: 'user6',
		userAvatar: '/placeholder.svg?height=40&width=40',
		imageUrl:
			'https://g-c0zv8myovah.vusercontent.net/placeholder.svg?height=400&width=400',
		likes: 2345,
		caption: 'City lights!',
		comments: 67,
	},
];

export default function InstagramGrid() {
	const [selectedPosts, setSelectedPosts] = useState<string[]>([]);

	const togglePostSelection = (postId: string) => {
		setSelectedPosts((prev) =>
			prev.includes(postId)
				? prev.filter((id) => id !== postId)
				: [...prev, postId],
		);
	};

	return (
		<div className='w-full mx-auto p-4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{mockInstagramPosts.map((post) => (
					<Card key={post.id} className='relative w-full'>
						<CardContent className='p-0'>
							<img
								src={post.imageUrl}
								alt={post.caption}
								className='w-full h-auto'
							/>
						</CardContent>
						<CardFooter className='flex flex-col items-start gap-2 pt-2'>
							<p className='font-semibold'>
								{post.likes.toLocaleString()} likes
							</p>
							<p>
								<span className='font-semibold'>{post.username}</span>{' '}
								{post.caption}
							</p>
							<p className='text-muted-foreground'>
								View all {post.comments} comments
							</p>
						</CardFooter>
						<div className='absolute top-2 right-2'>
							<Checkbox
								checked={selectedPosts.includes(post.id)}
								onCheckedChange={() => togglePostSelection(post.id)}
							/>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
