import Prismic from '@prismicio/client'
const apiEndpoint = 'https://sam-onboarding-nuxt-blog.cdn.prismic.io/api/v2'
const Client = Prismic.client(apiEndpoint)

export default Client
