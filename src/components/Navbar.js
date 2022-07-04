import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 mb-2 bg-white text-dark">
      <Link to="/">
        <img
          src="https://i.pinimg.com/564x/eb/0f/e8/eb0fe858775d7dccb85c92075d4abd90.jpg"
          height={80}
          width={140}
        />
      </Link>
    </nav>
  );
}
