# Bookshop System

## Project Overview

| | |
|---|---|
| **Project** | Bookshop System |
| **Type** | Internship Project |
| **Role** | Full-Stack Developer |
| **Period** | September 2025 – February 2026 |
| **Status** | 🟢 Live |

## Description

Developed a comprehensive multi-vendor bookshop e-commerce platform for schools using WordPress, Elementor, and WooCommerce. The system supports a complex architecture with multiple subdomains, where different vendors manage one or multiple schools with customized product catalogs, pricing, and fulfillment options. Each vendor operates independently with their own booklist and custom product styling while maintaining a unified platform infrastructure. The solution accommodates diverse operational models including pickup-only vendors and those offering both pickup and shipping options, with a custom tracking system to manage orders and communicate shipping updates when vendor partners lack API integration capabilities.

## Key Features

### Multi-Vendor Multi-Subdomain Architecture
- Dedicated subdomains for different vendors and schools with independent WordPress instances and separate order systems
- Scalable infrastructure supporting one-to-one and one-to-many vendor-school relationships with centralized DNS and Cloudflare management

### Customizable E-commerce Experience
- WooCommerce with Elementor page builder for flexible design enabling customized product catalogs and booklists per vendor
- Dynamic product styling and presentation varying by subdomain with vendor-specific pricing and promotional management

### Flexible Fulfillment Options
- Support for pickup-only and hybrid shipping+pickup fulfillment models with vendor-specific configuration
- Custom order status tracking and vendor-specific fulfillment workflows aligned with operational requirements

### Advanced Tracking & Integration
- Custom bulk tracking plugin for manual tracking number assignment without requiring vendor API integration
- Python-based DSR (Daily Sales Report) generation for automated order processing and school filtering for vendor management

## Technical Stack

<div class="skills-grid">
  <div class="skill-item">WordPress</div>
  <div class="skill-item">Elementor</div>
  <div class="skill-item">WooCommerce</div>
  <div class="skill-item">PHP</div>
  <div class="skill-item">Python</div>
  <div class="skill-item">MySQL</div>
  <div class="skill-item">Cloudflare</div>
  <div class="skill-item">HTML/CSS</div>
</div>

## My Contributions

### Subdomain & Infrastructure Management
- Created and configured subdomains for different vendors and schools with independent WordPress instances and separate order systems
- Managed Cloudflare DNS configuration for all subdomains including SSL certificates, CDN optimization, and DNS propagation verification

### End-to-End Order Testing & Quality Assurance
- Tested complete order lifecycle from product selection through checkout and order confirmation across all vendor configurations
- Performed comprehensive testing of different fulfillment models (pickup-only and shipping options) ensuring proper order status handling

### Custom Tracking Plugin Development
- Developed custom bulk tracking plugin enabling vendors to manually assign and manage tracking numbers without requiring vendor API integration
- Created user-friendly interface for tracking number upload with automated customer notifications for shipment updates

### Python & Excel Report Generation
- Built Python scripts to automatically generate DSR (Daily Sales Report) Excel files for faster order processing and administrative reporting
- Automated data extraction from WooCommerce database and formatted actionable reports for vendor and school administrators

### School Filtering & Vendor Order Management
- Implemented school filtering system enabling vendors to organize and manage orders across multiple schools with custom views and searches
- Created custom order dashboard filters for tracking orders by school, fulfillment status, and delivery method

### Bug Fixes & Rapid Troubleshooting
- Identified and resolved critical bugs affecting order processing, payment handling, and fulfillment workflows under tight deadlines
- Debugged Elementor page builder issues, WooCommerce plugin conflicts, and custom PHP functionality with rapid problem resolution
- Collaborated with team to address customer-reported issues and implement fixes within 24-48 hour cycles during intense project phase

## Challenges & Solutions

### Challenge 1: Multi-Vendor Customization at Scale
**Problem:** Each vendor required different product catalogs, pricing, and fulfillment options across multiple subdomains, but needed fast implementation.

**Solution:** Designed modular WordPress configuration with subdomain-specific settings, custom PHP functions, and Elementor templates allowing rapid customization while maintaining platform consistency.

### Challenge 2: Vendor API Limitations & Tracking Management
**Problem:** Vendors couldn't directly integrate tracking numbers into the system due to lack of API capability, risking delayed customer communication.

**Solution:** Created custom bulk tracking plugin with simple interface for manual tracking number entry and automated order status notifications to customers.

### Challenge 3: High-Pressure Timeline with Complex Requirements
**Problem:** Project needed completion and stabilization within one month while handling multiple vendor-specific requirements and customer issues.

**Solution:** Prioritized critical functionality, implemented rapid testing cycles, built automation tools (Python DSR generation) to reduce manual work, and established efficient bug-fix workflows to meet aggressive deadlines.

## Lessons Learned

::: info Key Takeaways
- Multi-vendor systems require careful architectural planning to balance customization with maintainability
- WooCommerce customization through hooks, filters, and custom plugins enables complex e-commerce scenarios
- Automation tools (Python scripts, bulk operations) are critical for scaling operations quickly
- Custom solutions (tracking plugin) can bridge gaps when third-party integrations aren't available
- Agile problem-solving and rapid prioritization are essential in fast-paced projects with evolving requirements
- Direct vendor communication and feedback loops accelerate issue resolution and feature refinement
- DNS and subdomain planning must happen early to avoid deployment delays
:::

## Impact

- Successfully launched multi-vendor bookshop platform enabling multiple schools to sell textbooks online simultaneously with independent vendor management
- Reduced manual order processing time through automated DSR generation and custom school filtering system
- Enabled vendors with different fulfillment models (pickup-only and shipping) to operate efficiently on unified platform
- Improved customer experience with custom tracking system providing transparency for orders without vendor API integration
- Established scalable subdomain architecture supporting future growth to additional vendors and schools
- Delivered complex multi-tenant e-commerce system within aggressive one-month timeline meeting all critical deadlines
- Provided vendors with intuitive order management tools and automation reducing administrative overhead
