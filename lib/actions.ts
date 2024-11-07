import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

export async function convertToListing(url: string) {
	const result = await generateObject({
		model: openai('gpt-4o-mini'),
		schemaName: 'AmazonListing',
		schemaDescription: 'An Amazon product listing',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			price: z.string(),
			features: z.array(z.string()),
			images: z.array(z.string()),
			variations: z.array(z.string()),
		}),
		prompt: `Convert a social media post to an Amazon product listing. The context is a social media post URL.`,
	});

	return JSON.stringify(result.object);
}
