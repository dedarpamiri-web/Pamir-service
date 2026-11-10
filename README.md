# Pamir Service — Front-end First Marketplace

A responsive local-services marketplace prototype that connects customers with service providers. The project is built with React, Vite, JavaScript and CSS, with a strong focus on front-end design, responsive layouts and usable interactions.

## 1. Requirements
- Node.js LTS (includes npm)
- Visual Studio Code or another code editor
- A modern browser (Chrome, Edge or Firefox)

## 2. Run on Windows
1. Extract `Pamir-Service-Full-Project.zip`.
2. In VS Code, open the extracted `pamir-service` folder — the folder containing `package.json`.
3. Select **Terminal → New Terminal**.
4. Run `npm install` and wait for it to finish.
5. Run `npm run dev`.
6. Open the local URL shown by Vite (normally `http://localhost:5173`).

To verify a production bundle, run `npm run build`. To preview that bundle, run `npm run preview`.

## 3. Demo accounts
All demo accounts use the password `123456`.

| Role | Email | Password |
|---|---|---|
| Customer | customer@demo.com | 123456 |
| Service provider | provider@demo.com | 123456 |
| Administrator | admin@demo.com | 123456 |

You can also register a new customer or provider. Administrator registration is intentionally disabled; use the demo administrator account.

## 4. Main features
- Responsive landing page and mobile navigation
- Service catalogue, keyword search and category filters
- Accessible service cards and service detail modal
- Customer/provider registration and sign-in demo
- Customer dashboard and request history
- Provider dashboard, service publishing and request status management
- Administrator overview
- About and Contact pages with form validation and local demo feedback
- Browser persistence through `localStorage`
- Empty states and feedback notifications

## 5. Prototype limitations and security
This is an educational **front-end prototype**, not a production marketplace. Demo users, passwords, services and requests are stored in the browser's `localStorage`. This is not secure authentication: do not use real passwords or sensitive personal information. Contact form messages are not sent to a server. The seeded catalogue uses illustrative sample data. For production, add a backend API, database, password hashing, server-side authorization, validation, moderation, privacy controls and secure payment/communication workflows.

## 6. Code comments and section map
Important parts of the source code are marked with numbered comments so the project is easier to read and explain. See `CODE-MAP.md` for a quick explanation of each section.

## 6. Project structure
```text
pamir-service/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── PROJECT_GUIDE_FA.md
├── docs/
│   ├── 01-project-proposal.md
│   ├── 02-requirements.md
│   ├── 03-use-cases.md
│   ├── 04-data-model.md
│   ├── 05-sitemap-and-user-flows.md
│   ├── 06-ui-ux-specification.md
│   ├── 07-test-plan.md
│   └── 08-presentation-outline.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── style.css
```

## 7. Before academic submission
- Validate the problem statement with real interviews or a survey; do not present assumptions as research findings.
- Add the actual team members and their real responsibilities.
- Capture screenshots from the running project.
- Execute the test plan and record actual results, date, browser and tester.
- Make sure every team member can explain the code and design decisions.
- Disclose AI assistance if required by your instructor.
