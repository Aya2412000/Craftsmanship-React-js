import React from "react";
// import { Link } from "react-router-dom";
import "./Style.css";
import { Link } from "./styled";
export default function NavLinks({ navLinks, navText, color }) {
  return (
    <div>
      <Link className="link" style={{ color: color }} href={navLinks}>
        {navText}
      </Link>
    </div>
  );
}
