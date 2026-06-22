# Enrollment APP

A React-based Student Enrollment Portal built with Vite that demonstrates modern React concepts including reusable components, props, state management, API integration, controlled and uncontrolled forms, conditional rendering, and component composition.

## Live Demo

Add your deployed link here:

- Live Site: https://enrollment-app-orpin.vercel.app/

## Repository

Add your GitHub repository link here:

- GitHub: https://github.com/Eduaina/Enrollment-App

## Features

- Display a roster of enrolled students using reusable card components
- Fetch student data from an external API
- Merge fetched data with local seed data
- Enroll new students through an interactive form
- Demonstrate both controlled and uncontrolled form inputs
- Show loading and error states while fetching data
- Calculate and display the class average score
- Display student grades based on their scores
- Support active and inactive student statuses
- Responsive and clean card-based layout

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Fetch API

## Project Structure

```
src/
├── App.jsx               ← Routes + lifted roster state
├── App.css               ← All styles
├── main.jsx              ← BrowserRouter wraps <App />
├── components/
│   ├── Navbar.jsx        ← NavLink nav, shows on every page
│   ├── Badge.jsx
│   ├── Button.jsx        ← Functional component
│   ├── ClassButton.jsx   ← Class component (refresh button)
│   ├── EnrollForm.jsx    ← Controlled + uncontrolled inputs
│   ├── StatBar.jsx
│   ├── StatusMessage.jsx
│   ├── StudentCard.jsx   ← Name links to /students/:id
│   └── StudentList.jsx
└── pages/
    ├── HomePage.jsx          → /
    ├── StudentDetailPage.jsx → /students/:id
    ├── EnrollPage.jsx        → /enroll
    └── NotFoundPage.jsx      → * (catch-all 404)
```

---

## Routing

| Route | Component | Description |
|---|---|---|
| `/` | `HomePage` | Roster grid + refresh button |
| `/students/:id` | `StudentDetailPage` | Full profile for one student |
| `/enroll` | `EnrollPage` | Enroll form; redirects to `/` on success |
| `*` | `NotFoundPage` | Friendly 404 catch-all |

**Key decisions:**
- `<BrowserRouter>` wraps `<App />` in `main.jsx` — the app never sees a HashRouter.
- `<Navbar />` is rendered **outside** `<Routes>` so it persists across every route.
- Roster state lives in `App.jsx` so a student enrolled on `/enroll` immediately appears on `/` after `useNavigate("/")` fires.
- `<NavLink>` with an `isActive` callback applies `.nav-link--active` on the current route; the `end` prop on the Home link prevents it staying active when on child routes.
- `<Link>` (never `<a href>`) is used for all internal navigation — no full-page reloads.

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Eduaina/Enrollment-App.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Getting Started

```bash
npm install
npm install react-router-dom
npm run dev
```

## API Used

This project uses the Random User API:

https://randomuser.me/api/?results=6&nat=us,gb

The application fetches student information when it loads and maps the API response into the student data structure used throughout the app.

## Loading/Error Handling

Each result provides `name.first/last`, `email`, `picture.medium`, and `login.uuid` (used as `id`). Each student is assigned a random score (40–100) and a track from `TRACKS` by index.

- `useState(true)` for `loading` — shows `<StatusMessage type="loading" />` while in-flight.
- `try/catch/finally` wraps the `fetch`; a non-OK response throws (`if (!response.ok) throw ...`).
- On failure, `error` state is set, `<StatusMessage type="error" />` is shown, and `SEED_STUDENTS` is still displayed — the app never crashes.
- A `fetchTrigger` counter increments on "Refresh", re-running the `useEffect`.

---

## Component-Based Architecture

React applications are built from small, reusable pieces called components. Each component is responsible for a specific part of the user interface and can receive data through props.

Benefits include:

- Better code organization
- Reusability across the application
- Easier maintenance and testing
- Clear separation of responsibilities


## Controlled vs Uncontrolled Forms

### Controlled Inputs

- Their values are managed by React state using `useState`.
- They use the `value` and `onChange` props.
- React is the single source of truth.
- Best suited for real-time validation and dynamic UI updates.

### Uncontrolled Inputs

- Their values are stored in the DOM rather than React state.
- They are accessed using `useRef`.
- They typically use `defaultValue` instead of `value`.
- Useful for simple forms or integrations where continuous state tracking is unnecessary.
