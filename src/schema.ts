import { pgTable, serial, text, integer, boolean, decimal, timestamp } from "drizzle-orm/pg-core";
// import { users } from "./db"; // Assuming 'users' is imported from the appropriate module

export const state = pgTable('state', {
    id: serial('id').primaryKey(),
    name: text('name'),
    code: text('code')
});

export const city = pgTable('city', {
    id: serial('id').primaryKey(),
    name: text('name'),
    state_id: integer('state_id').references(() => state.id)
});

export const address = pgTable('address', {
    id: serial('id').primaryKey(),
    street_address_1: text('street_address_1'),
    street_address_2: text('street_address_2'),
    zip_code: text('zip_code'),
    delivery_instructions: text('delivery_instructions'),
    user_id: integer('user_id').references(() => users.id),
    city_id: integer('city_id').references(() => city.id),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});

export const category = pgTable('category', {
    id: serial('id').primaryKey(),
    name: text('name')
});

export const orders = pgTable('orders', {
    id: serial('id').primaryKey(),
    restaurant_id: integer('restaurant_id').references(() => restaurant.id),
    estimated_delivery_time: timestamp('estimated_delivery_time'),
    actual_delivery_time: timestamp('actual_delivery_time'),
    delivery_address_id: integer('delivery_address_id').references(() => address.id),
    user_id: integer('user_id').references(() => users.id),
    driver_id: integer('driver_id').references(() => driver.id),
    price: decimal('price'),
    discount: decimal('discount'),
    final_price: decimal('final_price'),
    comment: text('comment'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});

export const comment = pgTable('comment', {
    id: serial('id').primaryKey(),
    order_id: integer('order_id').references(() => orders.id),
    user_id: integer('user_id').references(() => users.id),
    comment_text: text('comment_text'),
    is_complaint: boolean('is_complaint'),
    is_praise: boolean('is_praise'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});

export const driver = pgTable('driver', {
    id: serial('id').primaryKey(),
    car_make: text('car_make'),
    car_model: text('car_model'),
    car_year: integer('car_year'),
    user_id: integer('user_id').references(() => users.id),
    online: boolean('online'),
    delivering: boolean('delivering'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});

export const menu_item = pgTable('menu_item', {
    id: serial('id').primaryKey(),
    name: text('name'),
    restaurant_id: integer('restaurant_id').references(() => restaurant.id),
    category_id: integer('category_id').references(() => category.id),
    description: text('description'),
    ingredients: text('ingredients'),
    price: decimal('price'),
    active: boolean('active'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});

export const order_menu_item = pgTable('order_menu_item', {
    id: serial('id').primaryKey(),
    order_id: integer('order_id').references(() => orders.id),
    menu_item_id: integer('menu_item_id').references(() => menu_item.id),
    quantity: integer('quantity'),
    item_price: decimal('item_price'),
    price: decimal('price'),
    comment: text('comment')
});

export const order_status = pgTable('order_status', {
    id: serial('id').primaryKey(),
    order_id: integer('order_id').references(() => orders.id),
    status_catalog_id: integer('status_catalog_id').references(() => status_catalog.id),
    created_at: timestamp('created_at').defaultNow()
});

export const restaurant = pgTable('restaurant', {
    id: serial('id').primaryKey(),
    name: text('name'),
    street_address: text('street_address'),
    zip_code: text('zip_code'),
    city_id: integer('city_id').references(() => city.id),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});

export const status_catalog = pgTable('status_catalog', {
    id: serial('id').primaryKey(),
    name: text('name')
});

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name'),
    contact_phone: text('contact_phone'),
    phone_verified: boolean('phone_verified'),
    email: text('email'),
    email_verified: boolean('email_verified'),
    confirmation_code: text('confirmation_code'),
    password: text('password'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow()
});

export const restaurant_owner = pgTable('restaurant_owner', {
    id: serial('id').primaryKey(),
    restaurant_id: integer('restaurant_id').references(() => restaurant.id),
    owner_id: integer('owner_id').references(() => users.id)
});
