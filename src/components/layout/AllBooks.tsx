import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/baseApi";
import { Button } from "../ui/button";
import type { IBooks } from "@/Interface/book.interface";
import { Eye, Trash2 } from "lucide-react";

import { Link } from "react-router";
import { AddBookModal } from "./AddBookModal";
import { EditBookModal } from "./EditBookModal";
import { BorrowBookModal } from "./BorrowBookModal";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (bookId: string) => {
    try {
      await deleteBook(bookId).unwrap();
      // console.log("Book deleted successfully!");
    } catch (err) {
      // console.error("Failed to delete book:", err);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <div className="mt-16"></div>
      <div className="my-4 flex justify-end">
        <AddBookModal></AddBookModal>
      </div>
      <Card>
        <CardContent>
          <p className="text-center text-3xl font-semibold">Borrow Summary</p>
          <br />
          <br />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Genre</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Copies</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead className="flex justify-center items-center">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {!isLoading &&
                data.data.map((book: IBooks, index: number) => (
                  <TableRow key={book._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.genre}</TableCell>
                    <TableCell>{book.isbn}</TableCell>
                    <TableCell>{book.copies}</TableCell>
                    <TableCell>{book.available ? "Available" : "Unavailable"}</TableCell>
                    <TableCell className="flex justify-center items-center">
                      <Link to={`/books/${book._id}`}>
                        <Button className="mr-2">
                          <Eye></Eye>
                          View
                        </Button>
                      </Link>

                      <span className="mr-2">
                        <EditBookModal id={book._id}></EditBookModal>
                      </span>

                      <Button
                        className="mr-2"
                        variant="destructive"
                        onClick={() => handleDelete(book._id)}
                      >
                        <Trash2></Trash2>
                        Delete
                      </Button>
                      <span className="mr-2">
                        <BorrowBookModal id={book._id}></BorrowBookModal>
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default AllBooks;
