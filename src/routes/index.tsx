import { createBrowserRouter } from "react-router";
import Root from "@/components/layout/Root";
import Home from "@/components/layout/Home";
import AllBooks from "@/components/layout/AllBooks";
import BorrowSummary from "@/components/layout/BorrowSummary";
import SingleBook from "@/components/layout/SingleBook";
import AddBook from "@/components/layout/AddBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "books/:id",
        element: <SingleBook></SingleBook>,
      },
      {
        path: "create-book",
        element: <AddBook></AddBook>
      },
      {
        path: "borrow-summary",
        element: <BorrowSummary></BorrowSummary>,
      },
    ],
  },
]);

export default router;
