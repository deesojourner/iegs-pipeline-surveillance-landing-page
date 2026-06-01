// Base path the site is deployed under. Must match `basePath`/`assetPrefix`
// in next.config.mjs. Next.js does not prepend basePath to `public/` assets
// referenced via next/image, so prefix them manually with this.
export const BASE_PATH = "/pipeline_surveillance";

export const asset = (path: string) => `${BASE_PATH}${path}`;
