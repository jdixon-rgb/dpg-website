// Static sample data matching the seed.ts data.
// Used for static rendering until DB is wired up.
// TODO: Replace with DB calls once DATABASE_URL is configured.

export interface ListingPhoto {
  id: number;
  listingId: number;
  url: string;
  label: string;
  sortOrder: number;
}

export interface Listing {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: string;
  sqft: number;
  lotSize: string | null;
  yearBuilt: number | null;
  mlsNumber: string | null;
  description: string | null;
  status: string;
  listingAgentId: number | null;
  slug: string;
  photos: ListingPhoto[];
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string | null;
  photoUrl: string | null;
  email: string | null;
  phone: string | null;
  sortOrder: number;
}

const PHOTOS = {
  exterior: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
  living: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  backyard: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80',
  bedroom: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
};

function makePhotos(listingId: number): ListingPhoto[] {
  return [
    { id: listingId * 10 + 1, listingId, url: PHOTOS.exterior, label: 'Front Exterior', sortOrder: 0 },
    { id: listingId * 10 + 2, listingId, url: PHOTOS.living, label: 'Living Room', sortOrder: 1 },
    { id: listingId * 10 + 3, listingId, url: PHOTOS.kitchen, label: 'Kitchen', sortOrder: 2 },
    { id: listingId * 10 + 4, listingId, url: PHOTOS.bedroom, label: 'Master Bedroom', sortOrder: 3 },
    { id: listingId * 10 + 5, listingId, url: PHOTOS.backyard, label: 'Backyard', sortOrder: 4 },
  ];
}

export const sampleListings: Listing[] = [
  {
    id: 1,
    address: '4821 E Camelback Rd',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85018',
    price: 875000,
    beds: 4,
    baths: '3.0',
    sqft: 2800,
    lotSize: '0.25',
    yearBuilt: 2005,
    mlsNumber: 'MLS-6712345',
    description:
      "Stunning modern home nestled in the heart of Phoenix's most sought-after neighborhood. This beautifully updated 4-bedroom, 3-bathroom residence features an open-concept floor plan, gourmet kitchen with quartz countertops, and a resort-style backyard with heated pool and spa. Walking distance to top-rated schools, boutique shopping, and fine dining.",
    status: 'active',
    listingAgentId: 1,
    slug: '4821-e-camelback-rd-phoenix',
    photos: makePhotos(1),
  },
  {
    id: 2,
    address: '9342 N Scottsdale Rd Unit 201',
    city: 'Scottsdale',
    state: 'AZ',
    zip: '85253',
    price: 1195000,
    beds: 3,
    baths: '2.5',
    sqft: 2200,
    lotSize: null,
    yearBuilt: 2018,
    mlsNumber: 'MLS-6718901',
    description:
      "Luxurious lock-and-leave penthouse-style condo in the prestigious heart of Scottsdale. Soaring 11-foot ceilings, floor-to-ceiling windows with mountain views, and a wraparound terrace perfect for entertaining. Chef's kitchen, primary suite with spa bath, and two secured parking spaces in a full-amenity building with concierge service.",
    status: 'active',
    listingAgentId: 1,
    slug: '9342-n-scottsdale-rd-scottsdale',
    photos: makePhotos(2),
  },
  {
    id: 3,
    address: '2156 W Desert Hills Dr',
    city: 'Chandler',
    state: 'AZ',
    zip: '85248',
    price: 549000,
    beds: 4,
    baths: '2.0',
    sqft: 2100,
    lotSize: '0.18',
    yearBuilt: 2012,
    mlsNumber: 'MLS-6723456',
    description:
      "Move-in ready family home in Chandler's highly desirable Desert Hills community. Updated kitchen with stainless appliances, fresh interior paint, and new carpet throughout. Large backyard with covered patio and room for a pool. Minutes to Intel, Chandler Fashion Center, and top-rated CUSD schools.",
    status: 'pending',
    listingAgentId: 2,
    slug: '2156-w-desert-hills-dr-chandler',
    photos: makePhotos(3),
  },
  {
    id: 4,
    address: '7801 E McDowell Rd Unit 310',
    city: 'Scottsdale',
    state: 'AZ',
    zip: '85257',
    price: 459000,
    beds: 2,
    baths: '2.0',
    sqft: 1450,
    lotSize: null,
    yearBuilt: 2020,
    mlsNumber: 'MLS-6729012',
    description:
      'Contemporary 2-bedroom condo built in 2020, featuring premium finishes throughout. Open kitchen with waterfall island, spa-inspired bathrooms, and a private balcony with city views. Building amenities include rooftop pool, fitness center, and co-working lounge. Ideal for buyers seeking a low-maintenance lifestyle in the heart of Scottsdale.',
    status: 'active',
    listingAgentId: 3,
    slug: '7801-e-mcdowell-rd-scottsdale',
    photos: makePhotos(4),
  },
];

export const sampleTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Dixon',
    title: 'Founder & Designated Broker',
    bio: 'Sarah has been a cornerstone of the Arizona real estate market for over 15 years. A native Arizonan, she founded Dixon Premier Group with a vision to deliver white-glove service and unmatched local expertise to every client. Her deep knowledge of the Phoenix metro market has helped hundreds of families find their dream homes.',
    photoUrl: null,
    email: 'sarah@dixonpremiergroup.com',
    phone: '(480) 555-0101',
    sortOrder: 0,
  },
  {
    id: 2,
    name: 'Marcus Dixon',
    title: "Buyer's Specialist",
    bio: "Marcus specializes in guiding first-time buyers and relocating families through the home purchase process with clarity and confidence. His patient approach and thorough market analysis ensure clients make informed decisions in Arizona's fast-moving market.",
    photoUrl: null,
    email: 'marcus@dixonpremiergroup.com',
    phone: '(480) 555-0102',
    sortOrder: 1,
  },
  {
    id: 3,
    name: 'Lindsey Voss',
    title: 'Listing Specialist',
    bio: 'Lindsey brings a marketing-first mindset to every listing, combining professional photography, targeted digital campaigns, and strategic pricing to achieve premium results for sellers. Her listings average 98% of list price and sell in under 21 days.',
    photoUrl: null,
    email: 'lindsey@dixonpremiergroup.com',
    phone: '(480) 555-0103',
    sortOrder: 2,
  },
];

export function getListingBySlug(slug: string): Listing | undefined {
  return sampleListings.find((l) => l.slug === slug);
}

export function getActiveListings(): Listing[] {
  return sampleListings.filter((l) => l.status === 'active');
}

export function getTeamMemberById(id: number): TeamMember | undefined {
  return sampleTeamMembers.find((m) => m.id === id);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
}

export function formatBaths(baths: string): string {
  const n = parseFloat(baths);
  return n % 1 === 0 ? n.toString() : n.toFixed(1);
}
