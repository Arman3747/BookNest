import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);

  // console.log({ data, isLoading });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <div className="mt-16"></div>
      <Card>
        <CardContent>
          <p className="text-center text-3xl font-semibold">Borrow Summary</p>
          <br />
          <br />
          <Table>
            {/* <TableCaption>A list of recent books.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Total Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {!isLoading &&
                data.data.map((borrow : any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{borrow.book.title}</TableCell>
                    <TableCell>{borrow.book.isbn}</TableCell>
                    <TableCell>{borrow.totalQuantity}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default BorrowSummary;
