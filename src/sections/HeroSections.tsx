import hero from "../assets/books_hero_section.png";
import { Button } from "@/components/ui/button";
import { ArrowRightFromLine } from "lucide-react";
import { Link } from "react-router";

const HeroSections = () => {
  return (
    <section className="p-2 m-2">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div>
          <h1 className="text-7xl">
            <span className="font-bold">Book</span>Nest
          </h1>
          <br />
          <p className="text-2xl">
            A minimalist library system to borrow books, maintain <br />
            organised entries, and view detailed borrowing summaries.
          </p>
          <br />
          <Link to="/books">
            <Button>
              All Books <ArrowRightFromLine></ArrowRightFromLine>
            </Button>
          </Link>
        </div>
        <div>
          <img className="w-lg h-lg" src={hero} alt="code" />
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
