/**
 * Single source of truth for the site's business content.
 *
 * Components only handle presentation; everything a customer reads (copy, photos,
 * links, contact details) lives here so it can be edited in one place and so that
 * alternative designs can be built against identical content.
 */
import type { ImageMetadata } from 'astro';

import chocoTarts from '../assets/gallery/choco_tarts_1.jpg';
import wreathCookie from '../assets/gallery/cookie.jpg';
import safariCookies from '../assets/gallery/cookies_1.jpg';
import lionKingWarthog from '../assets/gallery/cookies_2.jpg';
import lionKingCookies from '../assets/gallery/cookies_3.jpg';
import pastelCookies from '../assets/gallery/cookies_4.jpg';
import weddingCookies from '../assets/gallery/cookies_5.jpg';
import birthdayCookies from '../assets/gallery/cookies_6.jpg';
import spiceCupcakes from '../assets/gallery/cupcakes_1.jpg';
import cookiesCreamCupcakes from '../assets/gallery/cupcakes_2.jpg';

export const business = {
  name: 'The Culinary Accountant',
  tagline: 'Custom cookies, cupcakes and treats, made to order in Charlotte, NC.',
  pitch:
    'Hand-decorated sugar cookies, cupcakes and desserts designed around your theme, your colors and your guest count, with every detail accounted for.',
  location: 'Charlotte, North Carolina',
  locationShort: 'Charlotte, NC',
};

export const instagram = {
  handle: '@the_culinary_accountant',
  url: 'https://www.instagram.com/the_culinary_accountant/',
  // DMs are the primary ordering channel until direct contact details are added.
  dmUrl: 'https://ig.me/m/the_culinary_accountant',
};

/**
 * Direct contact details. Leave a field as `undefined` and every design hides it,
 * falling back to Instagram as the call to action.
 */
export const contact: {
  email?: string;
  phone?: string;
  orderFormUrl?: string;
} = {
  email: undefined,
  phone: undefined,
  orderFormUrl: undefined,
};

/**
 * The one action every design funnels visitors toward. Resolves to the most direct
 * channel available so adding an order form later upgrades every CTA at once.
 */
export const primaryCta = contact.orderFormUrl
  ? { label: 'Start Your Order', href: contact.orderFormUrl, external: true }
  : { label: 'Message Us on Instagram', href: instagram.dmUrl, external: true };

export type GalleryCategory = 'Cookies' | 'Cupcakes' | 'Desserts';

export interface GalleryItem {
  src: ImageMetadata;
  alt: string;
  caption: string;
  category: GalleryCategory;
  occasion: string;
}

// Ordered for visual rhythm: alternating color palettes and subjects so the first
// screen of the gallery shows the range of work rather than five similar cookies.
export const gallery: GalleryItem[] = [
  {
    src: weddingCookies,
    alt: 'White and pink iced sugar cookies reading "I Do" and "Mr & Mrs", with champagne glasses and bows',
    caption: '"I Do" bridal cookies',
    category: 'Cookies',
    occasion: 'Wedding',
  },
  {
    src: lionKingCookies,
    alt: 'Lion King themed sugar cookies with a lion cub face, orange sunbursts and a warthog',
    caption: 'Lion King party cookies',
    category: 'Cookies',
    occasion: 'Kids party',
  },
  {
    src: cookiesCreamCupcakes,
    alt: 'Cookies and cream cupcakes with swirled frosting, each topped with a chocolate sandwich cookie',
    caption: 'Cookies and cream cupcakes',
    category: 'Cupcakes',
    occasion: 'Celebration',
  },
  {
    src: birthdayCookies,
    alt: 'Pink and lavender round cookies reading "Happy Birthday" and "31", decorated with gifts and cupcakes',
    caption: 'Pink "31" birthday set',
    category: 'Cookies',
    occasion: 'Birthday',
  },
  {
    src: chocoTarts,
    alt: 'Mini chocolate peanut butter tarts, some topped with peanut butter and some with chocolate and peanuts',
    caption: 'Mini chocolate peanut butter tarts',
    category: 'Desserts',
    occasion: 'Dessert table',
  },
  {
    src: safariCookies,
    alt: 'Number six cookies iced in leopard and zebra print',
    caption: 'Safari print number cookies',
    category: 'Cookies',
    occasion: 'Birthday',
  },
  {
    src: wreathCookie,
    alt: 'Round white sugar cookie with a painted green holly wreath, red berries and a red number one',
    caption: 'Holly wreath cookie',
    category: 'Cookies',
    occasion: 'Holiday',
  },
  {
    src: spiceCupcakes,
    alt: 'Cupcakes with tall swirls of cream frosting finished with a dusting of spice',
    caption: 'Spice-dusted cupcakes',
    category: 'Cupcakes',
    occasion: 'Gathering',
  },
  {
    src: lionKingWarthog,
    alt: 'Close-up of a warthog character cookie from a Lion King themed set',
    caption: 'Character detail, piped by hand',
    category: 'Cookies',
    occasion: 'Kids party',
  },
  {
    src: pastelCookies,
    alt: 'A box of soft pastel sugar cookies in pink, yellow and green',
    caption: 'Pastel sugar cookie box',
    category: 'Cookies',
    occasion: 'Gift',
  },
];

/** Hero imagery: the three strongest, most varied shots. */
export const heroImages = [gallery[0], gallery[1], gallery[2]];

/** Image used beside the "About" story in place of a portrait until one is available. */
export const aboutImage = gallery[3];

export interface Offering {
  title: string;
  description: string;
  image: GalleryItem;
}

export const offerings: Offering[] = [
  {
    title: 'Custom Decorated Cookies',
    description:
      'Hand-iced sugar cookies designed around your theme: names, numbers, characters, monograms and color palettes matched to your event.',
    image: gallery[1],
  },
  {
    title: 'Cupcakes',
    description:
      'Generously frosted cupcakes in flavors chosen for your crowd, finished to sit beautifully on a dessert table or in a gift box.',
    image: gallery[2],
  },
  {
    title: 'Tarts & Dessert Tables',
    description:
      'Bite-sized tarts and sweets for a spread that looks as good as it tastes. Mix and match to build a full dessert table.',
    image: gallery[4],
  },
];

export interface Occasion {
  title: string;
  description: string;
}

export const occasions: Occasion[] = [
  {
    title: 'Birthdays & Kids Parties',
    description: 'Character sets, age numbers and theme-matched colors that become part of the decor.',
  },
  {
    title: 'Weddings & Showers',
    description: 'Bridal shower favors, "I Do" sets and dessert tables for rehearsal dinners and receptions.',
  },
  {
    title: 'Holidays & Gifting',
    description: 'Seasonal cookies and treat boxes for friends, family, teachers and clients.',
  },
  {
    title: 'Corporate & Social Events',
    description: 'Branded or themed treats for office celebrations, client gifts and gatherings of any size.',
  },
];

export interface Step {
  title: string;
  description: string;
}

export const orderSteps: Step[] = [
  {
    title: 'Share your idea',
    description: 'Send a message with your date, theme, colors and roughly how many guests you are expecting.',
  },
  {
    title: 'We design it together',
    description: 'We confirm the details, flavors and quantities, and sketch out a design that fits your event.',
  },
  {
    title: 'Baked and decorated to order',
    description: 'Every piece is made fresh for your date and ready for you to enjoy and share.',
  },
];

export const about = {
  eyebrow: 'Our Story',
  heading: 'Where Culinary Art Meets Meticulous Craft',
  paragraphs: [
    'The Culinary Accountant brings the same precision and care to every bake that a skilled accountant brings to every line item. Every design is planned, every color is matched, and every detail is accounted for.',
    'Based in Charlotte, NC, we make custom treats for occasions of all sizes, from a single gift box to a full dessert table. When you trust us with your celebration, nothing is left to chance.',
  ],
};
