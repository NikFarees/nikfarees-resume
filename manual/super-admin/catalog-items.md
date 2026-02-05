# Catalog Items

## What this manages
The master list of billable items (labor, materials, fees) used by Pricing Tables and Service Orders.

## Where to find it
Admin Panel → Pricing Table → Catalog Items.

## Key fields to review
- Category and Type: aligns items to pricing categories (e.g., Labor, Parts, Travel).
- Code / SKU: unique identifier for the item; keep consistent across pricing tables.
- Description: customer-facing description; keep concise and clear.
- Unit of Measure: hour, piece, visit, etc.
- Base Rate / List Price: default price before overrides.
- Taxable / Billable flags: determines downstream invoicing behavior.

## Common actions
1) Add a catalog item
- Click **Create Catalog Item**.
- Set **Category**, **Type**, **Code**, **Description**, **Unit**, and **Base Rate**.
- Mark **Taxable/Billable** as required.
- Save. The item becomes available to Pricing Tables.

2) Update an item
- Edit the item to adjust description or pricing fields.
- If changing the code, confirm downstream references in Pricing Tables and overrides.

3) Deactivate instead of deleting
- Use an **Active** toggle (if available) to prevent new usage while keeping history on existing Service Orders.

## Best practices
- Keep codes short and structured (e.g., LAB-STD-1H, PART-PUMP-MTR).
- Avoid duplicating items; reuse codes across tables and manage differences via Pricing Overrides.
- Review taxable flags with finance before go-live.

