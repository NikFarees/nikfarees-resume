# Pricing Tables

## What this manages
Master price books that define rates for Catalog Items across customers, regions, and vendors.

## Where to find it
Admin Panel → Pricing Table → Pricing Tables.

## Key fields to review
- Name and Code: unique identifiers for the table.
- Currency: currency used for rates.
- Effective Dates: validity period; use future-dated tables for planned changes.
- Catalog Items and Rates: the priced items included in the table.
- Associated Regions / Customers / Vendors: scope of where the table applies (if configured).

## Common actions
1) Create a pricing table
- Click **Create Pricing Table**.
- Set **Name/Code**, **Currency**, and **Effective Dates**.
- Add **Catalog Items** with rates. Import or bulk add if available.
- Save. Assign the table to the appropriate customers/vendors.

2) Update rates
- Edit the table and adjust item rates.
- For major changes, create a new table with future effective dates rather than editing in-place.

3) Manage scope
- Link the table to regions, customers, or vendors based on your contracting model.

## Best practices
- Avoid overlapping effective periods for the same scope.
- Keep a “Standard” base table and handle exceptions with Pricing Overrides.
- Review taxable flags and units of measure for each item.

