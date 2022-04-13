import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '14a9ey4u',
  dataset: 'production',
  apiVersion: '2022-04-13',
  token:
    'skSgXn23jylljCfqkjnNhI4NwzwJ7ZzCX0C8ySQzaCseMMi32luLTtxk3BZi3Jj0Kdx8rQ9ipFyIrmljoir0r30cWycyVgQitkMFeR00CoKJ0lCKAXDQkIWkjTZ9uPcgYNHzPUBfoB1Tft8lqEc7uYV9qpXvJy3tHumpq79tMLpIOv2iFxPa',
  useCdn: false,
});
