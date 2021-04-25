import { createClient } from 'contentful-management';
const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCES_KEY

const client = require('contentful-management').createClient({
  space: space,
  accessToken: accessToken,
  //environment: 'master-2021-04-20'
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
