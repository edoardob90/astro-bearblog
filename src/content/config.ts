import { z, defineCollection } from 'astro:content'
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date(),
        lastModified: z.coerce.date().nullish(),
        tags: z
            .array(
                z
                    .string()
                    .toLowerCase()
                    .transform((tag) => tag.replaceAll(' ', ''))
            )
            .transform((tags) => {
                const validTags = tags.filter((tag) => tag.length > 0)
                return validTags.length > 0 ? validTags : ['untagged']
            }),
        langs: z.array(z.string().toLowerCase()).default(['en']),
        isDraft: z.boolean().default(false)
    })
})

export const collections = {
    blog: postsCollection
}
