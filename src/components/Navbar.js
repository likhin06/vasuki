import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          🛒 Daily Needs Store
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

            {/* 🌙 Dark Mode Button */}
            <li className="nav-item">
              <button
  className={`btn btn-sm ${
    darkMode ? "btn-light text-dark" : "btn-dark text-white"
  }`}
  onClick={toggleDarkMode}
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
