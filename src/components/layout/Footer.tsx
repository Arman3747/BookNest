import logo from "../../assets/logo.png";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <section className="m-2 p-2">
      <Card>
        <CardContent className="flex items-center justify-center">
          <div className="flex items-center">
            <img className="w-16 h-16" src={logo} alt="code" />
            <span className="font-bold ml-2">Book</span>Nest
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-center items-center">
          <Link to="/" className="m-2">
            <Button>Home</Button>
          </Link>
          <Link to="/books" className="m-2">
            <Button>All Books</Button>
          </Link>
          <Link to="/create-book" className="m-2">
            <Button>Add Book</Button>
          </Link>
          <Link to="/borrow-summary" className="m-2">
            <Button>Borrow Summary</Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Footer;
