import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, decimal, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const customPackageRequests = pgTable("custom_package_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  wantsChampagne: text("wants_champagne").notNull(),
  champagneQuantity: integer("champagne_quantity"),
  whiteWineQuantity: integer("white_wine_quantity").notNull().default(0),
  redWineQuantity: integer("red_wine_quantity").notNull().default(0),
  wantsDessertWine: text("wants_dessert_wine").notNull(),
  dessertWineQuantity: integer("dessert_wine_quantity"),
  budget: text("budget").notNull(),
  additionalWishes: text("additional_wishes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertCustomPackageRequestSchema = createInsertSchema(customPackageRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertCustomPackageRequest = z.infer<typeof insertCustomPackageRequestSchema>;
export type CustomPackageRequest = typeof customPackageRequests.$inferSelect;

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  language: text("language").notNull().default('nl'),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (table) => ({
  emailIdx: index("idx_contact_submissions_email").on(table.email),
}));

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  phone: z.string().optional().nullable(),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  language: text("language").notNull().default('nl'),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).omit({
  id: true,
  createdAt: true,
});

export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;

export const subscriptionOrders = pgTable("subscription_orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  molliePaymentId: text("mollie_payment_id").notNull().unique(),
  mollieCustomerId: text("mollie_customer_id"),
  mollieSubscriptionId: text("mollie_subscription_id"),
  mandateId: text("mandate_id"),
  isRecurring: boolean("is_recurring").notNull().default(false),
  subscriptionStatus: text("subscription_status"),
  nextBillingDate: timestamp("next_billing_date"),
  cancelledAt: timestamp("cancelled_at"),
  tier: text("tier").notNull(),
  tierName: text("tier_name").notNull(),
  bottles: integer("bottles").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  extras: text("extras").array(),
  ageVerified: boolean("age_verified").notNull().default(false),
  paymentStatus: text("payment_status").notNull().default('pending'),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  customerPhone: text("customer_phone"),
  deliveryAddress: text("delivery_address").notNull(),
  deliveryCity: text("delivery_city").notNull(),
  deliveryPostalCode: text("delivery_postal_code").notNull(),
  deliveryCountry: text("delivery_country").notNull().default('BE'),
  language: text("language").notNull().default('nl'),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  paidAt: timestamp("paid_at"),
}, (table) => ({
  customerEmailIdx: index("idx_subscription_orders_customer_email").on(table.customerEmail),
  mollieSubscriptionIdIdx: index("idx_subscription_orders_mollie_subscription_id").on(table.mollieSubscriptionId),
  mollieCustomerIdIdx: index("idx_subscription_orders_mollie_customer_id").on(table.mollieCustomerId),
}));

export const insertSubscriptionOrderSchema = createInsertSchema(subscriptionOrders).omit({
  id: true,
  createdAt: true,
  paidAt: true,
});

export type InsertSubscriptionOrder = z.infer<typeof insertSubscriptionOrderSchema>;
export type SubscriptionOrder = typeof subscriptionOrders.$inferSelect;

export const cancellationTokens = pgTable("cancellation_tokens", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  token: text("token"),
  tokenId: text("token_id").notNull().unique(),
  tokenHash: text("token_hash").notNull(),
  subscriptionId: text("subscription_id").notNull(),
  email: text("email").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  usedAt: timestamp("used_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
}, (table) => ({
  subscriptionIdIdx: index("idx_cancellation_tokens_subscription_id").on(table.subscriptionId),
}));

export const insertCancellationTokenSchema = createInsertSchema(cancellationTokens).omit({
  id: true,
  createdAt: true,
  usedAt: true,
});

export type InsertCancellationToken = z.infer<typeof insertCancellationTokenSchema>;
export type CancellationToken = typeof cancellationTokens.$inferSelect;
