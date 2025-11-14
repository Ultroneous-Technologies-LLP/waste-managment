export const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;
export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getImageUrl = (url: string): string => {
  if (!url) {
    return "";
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  if (url.startsWith("/uploads")) {
    return `${STRAPI_BASE_URL}${url}`;
  }

  if (url.startsWith("/assets")) {
    return url;
  }

  return url;
};
