import React from "react";
import "./Header.scss";
import gold from "../../images/gold.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link className="header" to={"/"}>
      <img src={gold} className="logo" />
      <span className="text">
        <b>CRYPTOBORD</b>
      </span>
    </Link>
  );
}
