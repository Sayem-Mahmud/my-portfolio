import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    // projectId: 'zguw2c44',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_PROJECT_TOKEN
    // token: 'skxTthgLfCeRlVu6n6nDVrJ4ZKj4ZpoCSKcLveSJ94uyKNKBRLfpK0ZZsxxDYcy7SdiXhV8MbpwH9PrOli1QE3m6UihTu2iEM6mw9tjimzm9Ke4K2p0qLeqTf4UDgtuTSOSlyG7PqI1mhOW74eAgk2IofeTG9awxRGdqF4dnt5g9ew9pTbQR'
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)