import { getCollection } from 'astro:content';
import { SITE } from './config';

export const getHomePermalink = (): string => '/';

export const getBlogPermalink = (): string => '/blog';

export const getAsset = (path: string): string => '/' + path.replace(/^\/+/, '');

export const getPermalink = (slug = '', type = 'page'): string => {
  const _slug = slug.replace(/^\/+/, '');

  switch (type) {
    case 'blog':
      return `/blog/${_slug}`;
    case 'post':
      return `/blog/${_slug}`;
    case 'category':
      return `/categories/${_slug}`;
    case 'tag':
      return `/tags/${_slug}`;
    default:
      return `/${_slug}`;
  }
};

export const getPostPermalink = (slug: string): string => getPermalink(slug, 'post');

export const getCategoryPermalink = (slug: string): string => getPermalink(slug, 'category');

export const getTagPermalink = (slug: string): string => getPermalink(slug, 'tag');