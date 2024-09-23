import type { CollectionEntry } from 'astro:content'

const getUniqueTags = (collection: CollectionEntry<'blog'>[]) => {
    const tags = new Set<string>()
    collection.forEach((entry) => {
        entry.data.tags?.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags)
}

export default getUniqueTags
