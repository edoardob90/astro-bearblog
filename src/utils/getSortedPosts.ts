// Sort posts in reverse chronological order, either by pubDate or by lastModified
import type { CollectionEntry } from "astro:content"

const getSortedPost = (posts: CollectionEntry<"blog">[], order: string = "desc") => {
    return posts.sort((a, b) => {
        if (order === "desc") {
            return (b.data.lastModified ?? b.data.pubDate).getTime() - (a.data.lastModified ?? a.data.pubDate).getTime()
        } else {
            return (a.data.lastModified ?? a.data.pubDate).getTime() - (b.data.lastModified ?? b.data.pubDate).getTime()
        }
    })
}

export default getSortedPost