# picture ZZZ

# 📖 Minimal Library Management System - (BookNest)

A simple library management system to add, edit, delete, and borrow books, track availability, and view a borrow summary—built with React, TypeScript, and RTK Query for clean, real-time updates.

## Live Link

- Please Visit [Blood Connect](https://bloodconnect-3e8aa.web.app/) !

## Features

- View all books in a structured table with title, author, genre, ISBN, copies, and availability.
- Create a new book with a form containing all essential fields (title, author, genre, ISBN, description, copies).
- Open a pre-filled form to update any book’s details and instantly reflect changes in UI.
- Secure delete flow with confirmation dialog and immediate UI updates.
- Borrow form with quantity and due date, plus validation to prevent borrowing more than available copies.
- If a book's copies reach 0, the system automatically marks it as Unavailable.
- Shows an aggregated summary of all borrowed books with total quantity per book.
- State automatically updates after every create/edit/delete/borrow action (no manual refreshing).
- Easy access to Books List, Add Book, and Borrow Summary through a minimal and clean navbar.

---

## Technology Stack

| **Layer**        |            **Technology** |
| :--------------- | ------------------------: |
| Frontend         |        React + TypeScript |
| State Management | Redux Toolkit + RTK Query |
| Backend          |      Node.js + Express.js |
| Database         |        MongoDB + Mongoose |
| Styling          |   Tailwind CSS and Shadcn |

## npm packages

- Uses [TypeScript](https://www.typescriptlang.org/) for type safety, improved code readability, and early error detection during development.
- Uses [React](https://react.dev/) for building an interactive, fast, and component-based UI to manage books, borrowing, and summaries efficiently.
- Uses [Redux Toolkit](https://redux.js.org/) and [RTK Query](https://redux-toolkit.js.org/) for efficient state management, API handling, caching, and real-time UI updates, ensuring smooth data flow for book CRUD operations and borrowing features.
- Uses [tailwindcss](https://tailwindcss.com/) for fast, responsive, utility-based styling, enabling a clean and modern UI design with minimal custom CSS and consistent layout across all pages and components.
- Uses [shadcn UI](https://ui.shadcn.com/) for building high-quality, accessible, and reusable UI components, providing consistent design, smooth interactions, and faster development of forms, dialogs, tables, and navigation elements.
- Uses [React Hook Form](https://react-hook-form.com/) for efficient, performant form handling with built-in validation, minimal re-renders, and easy integration into create, edit, and borrow book forms across the application.
- Uses [clsx](https://www.npmjs.com/package/clsx) for cleanly combining and conditionally applying CSS class names, making component styling simpler, more readable, and easier to manage based on dynamic UI states.
- Uses [date-fns](https://date-fns.org/) for lightweight, efficient date formatting and manipulation, helping manage due dates, display readable dates, and handle borrowing-related date logic throughout the application.
- Uses [Lucide React](https://lucide.dev/guide/packages/lucide-react) to provide scalable, customizable, and consistent SVG icons, enhancing the UI with intuitive visuals for actions like edit, delete, borrow, and navigation across the library system.
- Uses [react-router](https://reactrouter.com/) for client-side routing, enabling smooth navigation between pages like book list, add/edit book, borrow forms, and borrow summary without full page reloads.
- Uses [Zod](https://zod.dev/) for runtime schema validation and ensuring request data integrity.
- Uses [netlify](https://www.netlify.com/) to deploy the React TypeScript library system as a fast, secure, and fully static website, providing continuous deployment, global CDN hosting, and easy management of builds and updates.

## Technologies Used

- ![TypeScript](https://img.shields.io/badge/typescript-333333?logo=typescript&logoColor=3178C6)
- ![]()
<!-- - ![Express.js](https://img.shields.io/badge/Express.js-v5.01.00-155dfc?logo=express&logoColor=%23000000)
- ![MongoDB](https://img.shields.io/badge/MongoDB-v6.20.00-155dfc?logo=mongodb&logoColor=%2347A248)
- ![Mongoose.js](https://img.shields.io/badge/Mongoose.js-v8.19.02-155dfc?logo=mongoose&logoColor=%23880000)
- ![Zod](https://img.shields.io/badge/Zod-v4.1.12-155dfc?logo=zod&logoColor=%23408AFF)
- ![.ENV](https://img.shields.io/badge/.ENV-v17.2.3-155dfc?logo=dotenv&logoColor=%23ECD53F)
- ![Vercel](https://img.shields.io/badge/Vercel-333333?logo=vercel&logoColor=%23ffffff)
- ![GitHub](https://img.shields.io/badge/GitHub-333333?logo=github&logoColor=%23ffffff) -->

## 🛠️ Installation & Setup Instructions

Follow the steps below to set up the **NextProduct** application locally:

---

### 1. Clone the Repositories

```bash
git clone https://github.com/Arman3747/Library_Management_API.git

```

---

### 2. Setup

```bash
cd Library_Management_API
npm init --y
```

Create a `.env` file in the root of the folder and add the following:

```env
##MongoDB_Credential
MONGODB_URI=mongodb_uri_with_userName_and_password
```

Then start the server:

```bash
npm run dev
```

Open http://localhost:5000 in your browser.

---

## **Route Summary**

```md
# API Route Summary

| Route                                                              | Method | Description                       |
| ------------------------------------------------------------------ | ------ | --------------------------------- |
| `/api/books`                                                       | POST   | Create a new Book                 |
| `/api/books`                                                       | GET    | Get All Books                     |
| `/api/books?filter=NON_FICTION&sortBy=createdAt&sort=desc&limit=5` | GET    | Get All Books Based on the Search |
| `/api/books/:bookId`                                               | GET    | Get Book by ID                    |
| `/api/books/:bookId`                                               | PATCH  | Update Book                       |
| `/api/books/:bookId`                                               | DELETE | Delete a Book                     |
| `/api/borrow`                                                      | POST   | Borrow a Book                     |
| `/api/borrow`                                                      | GET    | Borrowed Books Summary            |
```

## Deployment

1. Push the code to GitHub.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Set environment variables in Vercel dashboard.
4. Deploy the site. Live URL will be generated automatically.

---

### Thank you for Reading!
