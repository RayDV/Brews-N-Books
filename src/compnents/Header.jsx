import { Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

// fix this later
export default function Header() {
  const path = useLocation.pathName;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
      >
        <span>Brews'N'Books</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Find your study spot..."
          icon={AiOutlineSearch}
        />
      </form>
      <div className="flex gap-2 md:order-2">
        <Link to="/sign-in">
          <Button>Sign in</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Cafe</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/write-review"} as={"div"}>
          <Link to="/write-review">Tea House</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Bakery</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
