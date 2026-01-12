import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section, #home");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar sticky-navbar">
      <h2>Daily Needs Store</h2>
      <ul>
        <li>
          <a href="#home" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#products" className={active === "products" ? "active" : ""}>
            Products
          </a>
        </li>
        <li>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
