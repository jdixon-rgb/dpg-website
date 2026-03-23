import 'dotenv/config';
import { db } from './index';
import { listings, listingPhotos, teamMembers, qrRedirects } from './schema';

const PHOTOS = {
  exterior: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
  living: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  backyard: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80',
  bedroom: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
};

async function seed() {
  console.log('Seeding database...');

  // Insert listings
  const insertedListings = await db.insert(listings).values([
    {
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
      description: 'Stunning modern home nestled in the heart of Phoenix\'s most sought-after neighborhood. This beautifully updated 4-bedroom, 3-bathroom residence features an open-concept floor plan, gourmet kitchen with quartz countertops, and a resort-style backyard with heated pool and spa. Walking distance to top-rated schools, boutique shopping, and fine dining.',
      status: 'active',
      slug: '4821-e-camelback-rd-phoenix',
    },
    {
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
      description: 'Luxurious lock-and-leave penthouse-style condo in the prestigious heart of Scottsdale. Soaring 11-foot ceilings, floor-to-ceiling windows with mountain views, and a wraparound terrace perfect for entertaining. Chef\'s kitchen, primary suite with spa bath, and two secured parking spaces in a full-amenity building with concierge service.',
      status: 'active',
      slug: '9342-n-scottsdale-rd-scottsdale',
    },
    {
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
      description: 'Move-in ready family home in Chandler\'s highly desirable Desert Hills community. Updated kitchen with stainless appliances, fresh interior paint, and new carpet throughout. Large backyard with covered patio and room for a pool. Minutes to Intel, Chandler Fashion Center, and top-rated CUSD schools.',
      status: 'pending',
      slug: '2156-w-desert-hills-dr-chandler',
    },
    {
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
      description: 'Contemporary 2-bedroom condo built in 2020, featuring premium finishes throughout. Open kitchen with waterfall island, spa-inspired bathrooms, and a private balcony with city views. Building amenities include rooftop pool, fitness center, and co-working lounge. Ideal for buyers seeking a low-maintenance lifestyle in the heart of Scottsdale.',
      status: 'active',
      slug: '7801-e-mcdowell-rd-scottsdale',
    },
  ]).returning();

  console.log(`Inserted ${insertedListings.length} listings`);

  // Insert photos for each listing
  for (const listing of insertedListings) {
    await db.insert(listingPhotos).values([
      { listingId: listing.id, url: PHOTOS.exterior, label: 'Front Exterior', sortOrder: 0 },
      { listingId: listing.id, url: PHOTOS.living, label: 'Living Room', sortOrder: 1 },
      { listingId: listing.id, url: PHOTOS.kitchen, label: 'Kitchen', sortOrder: 2 },
      { listingId: listing.id, url: PHOTOS.bedroom, label: 'Master Bedroom', sortOrder: 3 },
      { listingId: listing.id, url: PHOTOS.backyard, label: 'Backyard', sortOrder: 4 },
    ]);
  }

  console.log('Inserted listing photos');

  // Insert team members
  await db.insert(teamMembers).values([
    {
      name: 'Sarah Dixon',
      title: 'Founder & Designated Broker',
      bio: 'Sarah has been a cornerstone of the Arizona real estate market for over 15 years. A native Arizonan, she founded Dixon Premier Group with a vision to deliver white-glove service and unmatched local expertise to every client. Her deep knowledge of the Phoenix metro market has helped hundreds of families find their dream homes.',
      photoUrl: null,
      email: 'sarah@dixonpremiergroup.com',
      phone: '(480) 555-0101',
      sortOrder: 0,
    },
    {
      name: 'Marcus Dixon',
      title: "Buyer's Specialist",
      bio: "Marcus specializes in guiding first-time buyers and relocating families through the home purchase process with clarity and confidence. His patient approach and thorough market analysis ensure clients make informed decisions in Arizona's fast-moving market.",
      photoUrl: null,
      email: 'marcus@dixonpremiergroup.com',
      phone: '(480) 555-0102',
      sortOrder: 1,
    },
    {
      name: 'Lindsey Voss',
      title: 'Listing Specialist',
      bio: 'Lindsey brings a marketing-first mindset to every listing, combining professional photography, targeted digital campaigns, and strategic pricing to achieve premium results for sellers. Her listings average 98% of list price and sell in under 21 days.',
      photoUrl: null,
      email: 'lindsey@dixonpremiergroup.com',
      phone: '(480) 555-0103',
      sortOrder: 2,
    },
  ]);

  console.log('Inserted team members');

  // Insert QR redirects
  await db.insert(qrRedirects).values([
    {
      code: 'camelback',
      targetUrl: '/properties/4821-e-camelback-rd-phoenix',
      listingId: insertedListings[0].id,
      label: '4821 E Camelback Rd — Yard Sign QR',
    },
    {
      code: 'scottsdale201',
      targetUrl: '/properties/9342-n-scottsdale-rd-scottsdale',
      listingId: insertedListings[1].id,
      label: '9342 N Scottsdale Rd #201 — Flyer QR',
    },
    {
      code: 'desert-hills',
      targetUrl: '/properties/2156-w-desert-hills-dr-chandler',
      listingId: insertedListings[2].id,
      label: '2156 W Desert Hills Dr — Open House QR',
    },
    {
      code: 'listings',
      targetUrl: '/properties',
      listingId: null,
      label: 'All Active Listings redirect',
    },
  ]);

  console.log('Inserted QR redirects');
  console.log('Seed complete!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
