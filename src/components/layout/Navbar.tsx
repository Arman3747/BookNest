import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { ModeToggle } from "@/providers/mode-toggle";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Navbar() {
  return (
    <section className="m-2 p-2">
      <Card>
        <CardContent className="flex items-center justify-center">
          <nav className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 px-2">
            <Link to="/">
              <div className="flex items-center">
                {/* <Logo></Logo> */}
                <img className="w-16 h-16" src={logo} alt="code" />
                <span className="font-bold ml-2">Book</span>Nest
              </div>
            </Link>

            <div className="mb-4 flex flex-wrap justify-center">
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
            </div>

            <div>
              <ModeToggle></ModeToggle>
            </div>
          </nav>
        </CardContent>
      </Card>
    </section>
  );
}
