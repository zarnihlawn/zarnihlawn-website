import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const post = sqliteTable('posts', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),

	title: text('title').unique().notNull(),
	description: text('description').notNull(),
	description1: text('description_1'),
	description2: text('description_2'),

	// images
	imageUrl: text('image_url').notNull(),
	bannerUrl: text('banner_url').notNull(),

	// filter
	types: text('types').notNull(),

	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.notNull()
		.$onUpdate(() => new Date()),
});
