import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imagesKumo/logo.png";
import { collection, getDocs } from "firebase/firestore";
import db from "../configs/firebase";

function Header() {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartCollection = collection(db, "cart");
        const querySnapshot = await getDocs(cartCollection);
        setIsCartEmpty(querySnapshot.empty);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      header.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let menu = document.querySelector("#menu-icon");
    let navmenu = document.querySelector(".navmenu");

    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navmenu.classList.toggle("open");
    };
  }, []);

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
      </Link>
      {/*Nav Menu*/}
      <ul className="navmenu">
        <li>
          <Link to="/" onClick={handleHomeClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/">Hasil Products</Link>
        </li>
        <li>
          <Link to="/">Hasil Premium Shirts</Link>
        </li>
        <li>
          <Link to="/">Hasil Kids</Link>
        </li>
        <li>
          <Link to="/">Hasil Caps</Link>
        </li>
      </ul>
      {/*Nav Icon*/}
      <div className="nav-icon">
        <a href="#">
          <i className="bx bx-search"></i>
        </a>
        <a href="#">
          <i className="bx bx-user"></i>
        </a>
        <Link
          to={`/cart`}
          className={isCartEmpty ? "cart-empty" : "cart-has-items"}
        >
          <a href="#">
            <i className="bx bx-cart"></i>
          </a>
        </Link>
        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  );
}

export default Header;
