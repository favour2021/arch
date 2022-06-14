import Nav from "../styles/Nav.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={Nav.tabDiv}>
      <header>
        <span className={Nav.span}>BR </span>Architects
      </header>

      <div className={Nav.tabLink_head}>
        <Link href="/">
          <a> Home</a>
        </Link>
        <Link href="/about">
          <a> About</a> 
        </Link>
        <Link href="/contact">
          <a> Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
