import React, { useContext } from "react";
import Link from "next/link";
import { Basket, FruitStand } from "@components/SVGIcons";
import { useProductState } from "@context/Basket";

const Navbar = () => {
  const { totalProducts } = useProductState();

  return (
    <nav>
      <Link href="/">
        <a>
          <FruitStand size="38px" />
          <p>Products</p>
        </a>
      </Link>
      <Link href="/basket">
        <a>
          <Basket size="38px" />
          <p>Basket ({totalProducts > 99 ? "99+" : totalProducts})</p>
        </a>
      </Link>

      <style jsx>{`
        nav {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
        }

        nav a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: inherit;
          padding: 0 18px;
        }

        nav a:hover {
          background: #0000000d;
        }

        nav a p {
          margin: 2px 0 0 10px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
