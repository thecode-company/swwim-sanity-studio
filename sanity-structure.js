import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiSettings,
  FiUsers,
  FiTag,
  FiType,
  FiCamera,
  FiArchive,
  FiPhone,
  FiHeart,
  FiZap,
  FiDownload,
  FiLayers,
  FiLifeBuoy,
  FiStopCircle,
  FiMail
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('Services').child(S.documentTypeList('service').title('Services')).icon(FiLayers),
      S.divider(),
      S.listItem().title('Clients').child(S.documentTypeList('client').title('Clients')).icon(FiHeart),
      S.divider(),
      S.listItem().title('About').child(S.editor().id('about').schemaType('about').documentId('singleton-about').views(getPreview('about'))).icon(FiLifeBuoy),
      S.divider(),
      S.listItem().title('Team').child(S.documentTypeList('team').title('Team')).icon(FiUsers),
      S.divider(),
      S.listItem()
        .title('News')
        .child(
          S.list()
            .title('News')
            .items([
              S.listItem().title('Articles').child(S.documentTypeList('news').title('Articles')).icon(FiType),
              S.divider(),
              S.listItem().title('Authors').child(S.documentTypeList('author').title('Authors')).icon(FiUsers),
              S.divider(),
              S.listItem().title('Categories').child(S.documentTypeList('newsCategory').title('Categories')).icon(FiTag),
            ])).icon(FiType),
      S.divider(),
      S.listItem()
        .title('Case Studies')
        .child(
          S.list()
            .title('Case Studies')
            .items([
              S.listItem().title('Case Studies').child(S.documentTypeList('caseStudy').title('Case Studies')).icon(FiCamera),
              S.divider(),
              S.listItem().title('Deliverables').child(S.documentTypeList('caseStudyDeliverable').title('Deliverables')).icon(FiTag),
            ])).icon(FiCamera),
      S.divider(),
      S.listItem().title('Events / Workshops').child(S.documentTypeList('events').title('Events / Workshops')).icon(FiZap),
      S.divider(),
      S.listItem().title('Guides / Downloads').child(S.documentTypeList('guides').title('Guides / Downloads')).icon(FiDownload),
      S.divider(),
      S.listItem().title('Legal').child(S.documentTypeList('legal').title('Legal')).icon(FiArchive),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact')).icon(FiPhone),
      S.divider(),
      S.listItem().title('Popups').child(S.editor().id('popups').schemaType('popups').documentId('singleton-popups')).icon(FiStopCircle),
      S.divider(),
      S.listItem().title('Signup Forms').child(S.documentTypeList('signupForm').title('Signup Forms')).icon(FiMail),
      S.divider(),
      S.listItem().title('Redirects').child(S.documentTypeList('redirect').title('Redirects')).icon(FiZap),
    ]);