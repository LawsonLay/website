import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	projects: defineCollection({
		// Load Markdown files in the src/content/project directory.
		loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
