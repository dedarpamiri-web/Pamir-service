# Pamir Service — Code Map and Comment Guide

This guide explains the main code divisions. The same numbered headings are included as comments inside the source files.

## `src/App.jsx` — Application logic and interface

1. **Sample data** — starter services displayed in the catalogue.
2. **Service categories** — category options used by filters and the provider form.
3. **Demo accounts** — customer, provider and administrator test accounts.
4. **Local Storage helper** — reads saved browser data and fallback values.
5. **Currency formatter** — formats prices in AFN.
6. **Main App component** — central state and application behavior:
   - 6.1 Application state
   - 6.2 Persisting data in LocalStorage
   - 6.3 Toast notification timer
   - 6.4 Navigation and search/filter helpers
   - 6.5 Login and registration
   - 6.6 Creating service requests
   - 6.7 Publishing services
   - 6.8 Updating request status
   - 6.9 Logout and dashboard navigation
7. **Page layout** — each page is marked with a JSX comment:
   - 7.1 Header and navigation
   - 7.2 Home page
   - 7.3 Services catalogue
   - 7.4 About page
   - 7.5 Contact page
   - 7.6 Customer/provider dashboard
   - 7.7 Add service page
   - 7.8 Administrator dashboard
   - 7.9 Access restriction message
   - 7.10 Footer
   - 7.11 Service details modal
   - 7.12 Login/register modal
   - 7.13 Toast notification
8. **Reusable components** — category bar and service grid.

## `src/style.css` — Visual design

The stylesheet includes comments for font imports, global variables, header/navigation, hero, trust strip, page sections, category filters, service cards, how-it-works, call-to-action/footer, inner pages, contact layout, forms, dashboard statistics, modals, notifications, tablet rules and mobile rules.

## `src/main.jsx` — React entry point

Loads React, imports the main App component and CSS, then mounts the application in the `root` element.

## `index.html` — HTML shell

Comments identify document metadata, the React mount point and the application script.

> Comments explain code organization; they do not change the app's functionality. This remains an educational front-end prototype using browser LocalStorage rather than a production backend.
