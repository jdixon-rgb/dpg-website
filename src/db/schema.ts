import { pgTable, serial, text, integer, decimal, timestamp } from 'drizzle-orm/pg-core';

export const listings = pgTable('listings', {
  id: serial('id').primaryKey(),
  address: text('address').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull().default('AZ'),
  zip: text('zip').notNull(),
  price: integer('price').notNull(),
  beds: integer('beds').notNull(),
  baths: decimal('baths', { precision: 3, scale: 1 }).notNull(),
  sqft: integer('sqft').notNull(),
  lotSize: decimal('lot_size', { precision: 10, scale: 2 }),
  yearBuilt: integer('year_built'),
  mlsNumber: text('mls_number'),
  description: text('description'),
  status: text('status').notNull().default('active'), // active, pending, sold
  listingAgentId: integer('listing_agent_id'),
  slug: text('slug').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const listingPhotos = pgTable('listing_photos', {
  id: serial('id').primaryKey(),
  listingId: integer('listing_id').notNull(),
  url: text('url').notNull(),
  label: text('label'),
  sortOrder: integer('sort_order').notNull().default(0),
});

export const qrRedirects = pgTable('qr_redirects', {
  id: serial('id').primaryKey(),
  code: text('code').notNull().unique(),
  targetUrl: text('target_url').notNull(),
  listingId: integer('listing_id'),
  label: text('label'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  title: text('title').notNull(),
  bio: text('bio'),
  photoUrl: text('photo_url'),
  email: text('email'),
  phone: text('phone'),
  sortOrder: integer('sort_order').notNull().default(0),
});

export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  message: text('message').notNull(),
  listingId: integer('listing_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
