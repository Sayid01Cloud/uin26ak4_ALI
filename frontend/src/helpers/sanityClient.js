import { createClient } from '@sanity/client'

const client = createClient({
 projectId: 'k1ia6n7l',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});

export default client;
