const globalSlugs = {
  home: '/',
  about: '/about',
  news: '/news',
  caseStudy: '/case-studies',
}

export const getGlobalSlug = (slug) => globalSlugs[slug]

// TODO: Change remote url
const remoteURL = 'https://ijp.vercel.app/'
const localURL = 'http://localhost:3000'
export const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const createUrl = ({ slug, globalSlug }) => {
  if (!globalSlug || !previewURL) {
    console.warn('Missing slug or previewURL', { globalSlug, previewURL })
    return ''
  }
  let path = `${globalSlug}`
  if (slug) path += `/${slug.current}`
  return `${previewURL}/api/preview?secret=${process.env.SANITY_STUDIO_SANITY_PREVIEW_SECRET}&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
