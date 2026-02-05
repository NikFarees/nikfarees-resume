# Agents

## What this manages
Customer-side contacts who receive notifications, approvals, or serve as site points of contact on Service Orders.

## Where to find it
Admin Panel → Customers → Agents.

## Key fields to review
- Customer: parent customer record the agent belongs to.
- Name and Contact: full name, email, phone for notifications.
- Role / Title: business role for context.
- Default Region or Site: optional default assignment used when creating Service Orders.
- Notification Preferences: channels or triggers (if configured in your environment).

## Common actions
1) Create an agent
- Click **Create Agent**.
- Select the **Customer** and fill contact details.
- Optionally set **Default Region/Site** and notification preferences.
- Save. The agent becomes selectable on Service Orders.

2) Edit or deactivate
- Open the agent record and update details.
- Use **Active/Inactive** toggle (if present) instead of deleting to preserve history.

3) Link to Service Orders
- When creating or editing a Service Order, pick the agent under customer contacts. This keeps communication aligned with the right person.

## Best practices
- Keep one primary agent per customer site to avoid confusion in dispatching.
- Use clear job titles (e.g., “Facilities Manager”, “IT Lead”).
- Inactivate agents that leave the customer; do not delete if the agent appears on past Service Orders.

