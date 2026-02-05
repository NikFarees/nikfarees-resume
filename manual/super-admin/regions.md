# Regions

## What this manages
Geographic regions used for routing, pricing scope, and technician/vendor coverage.

## Where to find it
Admin Panel → Settings → Regions.

## Key fields to review
- Name and Code: clear identifier (e.g., "US-West", "SG-North").
- Parent/Hierarchy: if regions are nested (state → city), maintain the hierarchy.
- Active: controls availability in dropdowns and assignments.

## Common actions
1) Create a region
- Click **Create Region**.
- Enter **Name/Code** and optional parent region.
- Save. The region becomes selectable on customers, pricing, and technicians.

2) Edit or deactivate
- Adjust naming or hierarchy as needed.
- Inactivate only when no active customers/vendors rely on it.

## Best practices
- Keep codes stable; downstream integrations may rely on them.
- Align regions with how vendors and technicians are organized for dispatch.
- Avoid duplicates; merge usage before retiring an old region.

