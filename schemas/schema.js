import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonAbout from './singletonAbout'
import singletonContact from './singletonContact'
import singletonPopups from './singletonPopups'

// Documents
import services from './services'
import clients from './clients'
import team from './team'
import news from './news'
import events from './events'
import guides from './guides'
import authors from './authors'
import socials from './socials'
import newsCategories from './newsCategories'
import caseStudies from './caseStudies'
import caseStudyDeliverables from './caseStudyDeliverables'
import legal from './legal'
import signupForms from './signupForms'

// Molecules 
import imageCarousel from './molecules/imageCarousel/imageCarousel'
import quote from './molecules/quote/quote'
import stat from './molecules/statBlock/stat'
import statBlock from './molecules/statBlock/statBlock'

// Common
import blockContent from './common/blockContent'
import blockContentExtended from './common/blockContentExtended'
import blockContentGuides from './common/blockContentGuides'
import seo from './common/seo'
import value from './common/value'
import singleImage from './molecules/singleImage/singleImage'
import doubleImage from './molecules/doubleImage/doubleImage'
import redirects from './redirects'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonAbout,
    singletonContact,
    singletonPopups,

    services,
    clients,
    team,
    news,
    events,
    redirects,
    guides,
    socials,
    authors,
    newsCategories,
    caseStudies,
    caseStudyDeliverables,
    legal,

    imageCarousel,
    singleImage,
    doubleImage,
    quote,
    stat,
    statBlock,

    blockContent,
    blockContentExtended,
    blockContentGuides,
    seo,
    value,
    signupForms
  ]),
})
