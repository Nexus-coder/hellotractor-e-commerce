import { createDirectus, rest, authentication } from '@directus/sdk';

console.log('directus url',process.env.DIRECTUS_URL)
const directus = createDirectus(process.env.DIRECTUS_URL)
  .with(authentication("cookie", {credentials: "include", autoRefresh: true}))
  .with(rest());

export default directus;