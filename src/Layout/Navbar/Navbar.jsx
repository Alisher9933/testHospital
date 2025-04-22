import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "/public/Icons/Logo.png";
import Footer from "../../Layout/Footer/Footer";


// Clerk
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

function NavbarLayout() {
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header>
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <Link to={"/"}>
            <img className="main-logo" src={Logo} alt="Logo" />
          </Link>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/doctors"}>Doctors</Link>
            </li>
            <li>
              <Link to={"/departments"}>Departments</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>

          {/* Sign In / User Button */}
          <div className="auth-button">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <button className="ques-butt">Sign In</button>
              </SignInButton>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default NavbarLayout;
