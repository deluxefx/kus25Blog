import config from '../config/config.json';

export const SITE = {
  name: config.site.title,
  origin: config.site.base_url,
  basePathname: '/',
  trailingSlash: false,
  title: config.site.title,
  description: config.site.description,
  defaultImage: config.site.default_image,
  defaultTheme: 'system',
  language: config.site.lang || 'en',
  textDirection: 'ltr',
  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),
};

export const BLOG = {
  disabled: false,
  postsPerPage: 6,
  post: {
    permalink: '/blog/%slug%',
    noindex: false,
    disabled: false,
  },
  list: {
    pathname: 'blog',
    noindex: false,
    disabled: false,
  },
  category: {
    pathname: 'categories',
    noindex: false,
    disabled: false,
  },
  tag: {
    pathname: 'tags',
    noindex: false,
    disabled: false,
  },
};