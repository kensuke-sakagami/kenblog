import { createClient } from 'microcms-js-sdk'; 

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "kenblog",
  apiKey: process.env.API_KEY,
});
