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
├── App.jsx
├── App.css
└── components/
    ├── Header.jsx
    ├── Button.jsx
    ├── ClassButton.jsx
    ├── StudentCard.jsx
    ├── StudentList.jsx
    ├── EnrollForm.jsx
    └── StatusMessage.jsx
```

## Getting Started

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

## API Used

This project uses the Random User API:

https://randomuser.me/api/?results=6&nat=us,gb

The application fetches student information when it loads and maps the API response into the student data structure used throughout the app.

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