import { ComponentType } from '../types';
import { heroes } from './heroes';
import { ctas } from './ctas';
import { footers } from './footers';
import { pricing } from './pricing';
import { testimonials } from './testimonials';
import { faq } from './faq';
import { stats } from './stats';
import { teams } from './teams';
import { banners } from './banners';
import { headers } from './headers';
import { description_list } from './description-list';
import { brand_list } from './brand-list';
import { blog_cards } from './blog-cards';
import { author_cards } from './author-cards';

export const marketingComponents: ComponentType[] = [
  headers,
  heroes,
  banners,
  blog_cards,
  author_cards,
  ctas,
  stats,
  description_list,
  pricing,
  teams,
  testimonials,
  faq,
  footers,
  brand_list
];
