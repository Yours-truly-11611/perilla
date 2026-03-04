import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/alex/perilla/tina/__generated__/.cache/1772591923211', url: 'http://localhost:4001/graphql', token: 'undefined', queries,  });
export default client;
  