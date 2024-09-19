import { z, defineCollection } from 'astro:content'
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date(),
        lastModified: z.coerce.date().optional().nullable(),
        tags: z.array(z.string()),
        langs: z.array(z.string()).default(['en']),
        isDraft: z.boolean().default(false)
    })
})

export const collections = {
    blog: postsCollection
}
