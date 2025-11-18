import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Link, useParams } from "react-router";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";

const SingleBook = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleBookQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  //console.log(data);

  return (
    <div className="flex justify-center items-center my-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{data.data.title}</CardTitle>
          <CardDescription>
            By <span className="italic">{data.data.author}</span> <br /> ISBN:{" "}
            {data.data.isbn}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            {data.data.description}
            <br />
            <br />
            <div className="flex justify-center">
              <Button variant="outline">{data.data.genre}</Button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              <Button variant="outline">
                Available : {data.data.available ? "True" : "False"}
              </Button>
              <Button variant="outline">Copies : {data.data.copies}</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-2">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/books">
            <Button>All Books</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SingleBook;
