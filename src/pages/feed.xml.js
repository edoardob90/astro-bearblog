import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { PandaConfig } from '@/consts'
import { useTranslations } from '@/utils/i18n'

const { description, title } = PandaConfig
const t = useTranslations('en')

export const prerender = true

const parser = new MarkdownIt()

export async function GET(context) {
    const blog = await getCollection('blog')
    return rss({
        title: t(title),
        description: t(description),
        site: context.site,
        stylesheet: '/pretty-feed.xsl',
        items: blog
            .filter((post) => !post.data.isDraft && post.data.title)
            .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
            .map((post) => ({
                link: `/blog/${post.slug}/`,
                content: sanitizeHtml(parser.render(post.body), {
                    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
                }),
                ...post.data
            }))
    })
}
