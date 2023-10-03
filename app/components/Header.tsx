import React from "react";
import headerLogo from "../assets/unsolve.png";
import headerLogoBlack from "../assets/Unsolved-black.png";
import { Images } from "../utils/ImageService";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <a href="/" className="logo">
        <Image src={Images.UnsolvedLogo} alt="" height={50} width={50} />
      </a>

      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/work">Works</a>
          </li>
          <li>
            <a href="/service">Services</a>
          </li>
          <li>
            <a href="/unsolved">Unsolved</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
