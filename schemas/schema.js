import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonAbout from './singletonAbout'
import singletonContact from './singletonContact'

// Documents
import services from './services'
import clients from './clients'
import team from './team'
import news from './news'
import authors from './authors'
import socials from './socials'
import newsCategories from './newsCategories'
import caseStudies from './caseStudies'
import caseStudyDeliverables from './caseStudyDeliverables'
import legal from './legal'

// Molecules 
import imageCarousel from './molecules/imageCarousel/imageCarousel'
import quote from './molecules/quote/quote'
import stat from './molecules/statBlock/stat'
import statBlock from './molecules/statBlock/statBlock'

// Common
import blockContent from './common/blockContent'
import blockContentExtended from './common/blockContentExtended'
import seo from './common/seo'
import value from './common/value'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonAbout,
    singletonContact,

    services,
    clients,
    team,
    news,
    socials,
    authors,
    newsCategories,
    caseStudies,
    caseStudyDeliverables,
    legal,

    imageCarousel,
    quote,
    stat,
    statBlock,

    blockContent,
    blockContentExtended,
    seo,
    value
  ]),
})
