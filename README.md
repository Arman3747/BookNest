![BookNest](https://i.ibb.co/pjxD3J1t/Book-Nest-Home.png)

---

# 📖 **Book**Nest - (Minimal Library Management System)

A simple library management system to add, edit, delete, and borrow books, track availability, and view a borrow summary—built with React, TypeScript, and RTK Query for clean, real-time updates.

---

### Live Link

- Please Visit [BookNest Link add]() !

---

### Features

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

### Technology Stack

| **Layer**        |            **Technology** |
| :--------------- | ------------------------: |
| Frontend         |        React + TypeScript |
| State Management | Redux Toolkit + RTK Query |
| Backend          |      Node.js + Express.js |
| Database         |        MongoDB + Mongoose |
| Styling          |   Tailwind CSS and Shadcn |

---

### Page List

| Pages             | Functionalities                                              |
| :---------------- | :----------------------------------------------------------- |
| `/`               | Display a home page with a hero section, header, and footer. |
| `/books`          | Displays a list of all books in tabular format.              |
| `/books/:id`      | Detailed view of a single book’s information.                |
| `/create-book`    | Form interface to add a new book to the system.              |
| `/borrow-summary` | Displays an aggregated summary of all borrowed books.        |

---

### UI/UX

- Minimalist UI
  - Sleek and functional interface designed with Tailwind CSS and ShadCN UI components.
- User Experience
  - Intuitive navigation, clearly labeled actions, and straightforward, user-friendly forms.
- Responsive Design
  - Fully adaptive layout that works seamlessly across mobile, tablet, and desktop screens.

---

### npm packages

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

---

### Technologies Used

- ![TypeScript](https://img.shields.io/badge/typescript-333333?logo=typescript&logoColor=3178C6)
- ![React.js](https://img.shields.io/badge/React.js-v19.2.0-155dfc?logo=react&logoColor=%2361DAFB)
- ![Redux.js](https://img.shields.io/badge/Redux.js-v7.9.6-155dfc?logo=redux&logoColor=%23764ABC)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.1.17-155dfc?logo=tailwindcss&logoColor=%2306B6D4)
- ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-v3.5.0-155dfc?logo=shadcnui&logoColor=%23000000)
- ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-v7.66.0-155dfc?logo=reacthookform&logoColor=%23EC5990)
- ![date-fns](https://img.shields.io/badge/date_fns-v4.1.0-155dfc?logo=datefns&logoColor=%23770C56)
- ![Lucide](https://img.shields.io/badge/Lucide-v0.553.0-155dfc?logo=lucide&logoColor=%23F56565)
- ![React Router](https://img.shields.io/badge/React_Router-v7.9.6-155dfc?logo=reactrouter&logoColor=%23CA4245)
- ![Zod](https://img.shields.io/badge/Zod-v4.1.12-155dfc?logo=zod&logoColor=%23408AFF)
- ![Netlify](https://img.shields.io/badge/Netlify-333333?logo=netlify&logoColor=%2300C7B7)
- ![git](https://img.shields.io/badge/git-333333?logo=git&logoColor=%23F05032)
- ![GitHub](https://img.shields.io/badge/GitHub-333333?logo=github&logoColor=%23ffffff)

---

## 🛠️ Installation & Setup Instructions

### Server Setup

Follow the steps below to set up the **Library Management API** application locally:

### 1. Clone the Repositories

```bash
git clone https://github.com/Arman3747/Library_Management_API.git

```

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

### API Route Summary

| **Route**                                                          | **Method** |                   **Description** |
| :----------------------------------------------------------------- | :--------: | --------------------------------: |
| `/api/books`                                                       |    POST    |                 Create a new Book |
| `/api/books`                                                       |    GET     |                     Get All Books |
| `/api/books?filter=NON_FICTION&sortBy=createdAt&sort=desc&limit=5` |    GET     | Get All Books Based on the Search |
| `/api/books/:bookId`                                               |    GET     |                    Get Book by ID |
| `/api/books/:bookId`                                               |   PATCH    |                       Update Book |
| `/api/books/:bookId`                                               |   DELETE   |                     Delete a Book |
| `/api/borrow`                                                      |    POST    |                     Borrow a Book |
| `/api/borrow`                                                      |    GET     |            Borrowed Books Summary |

---

### Server Deployment

1. Push the code to GitHub.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Set environment variables in Vercel dashboard.
4. Deploy the site. Live URL will be generated automatically.

---

### Client Setup

Follow the steps below to set up the **BookNest** application locally:

### 1. Clone the Repositories

```bash
git clone https://github.com/Arman3747/BookNest.git

```

### 2. Setup

```bash
cd BookNest
npm install
```

Then start the server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

---

### Thank you for Reading!
