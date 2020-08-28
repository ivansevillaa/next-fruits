import React from "react";
import ProductList from "@components/ProductList";
import { FruitStand } from "@components/SVGIcons";

export const getStaticProps = async () => {
  const response = await fetch("https://next-fruits.vercel.app/api/fruits");
  const { fruits } = await response.json();

  return {
    props: {
      fruits,
    },
  };
};

const Home = ({ fruits }) => {
  return (
    <main>
      <section className="title">
        <h1>
          Exotic <FruitStand size="40px" /> Fruits
        </h1>
      </section>
      <ProductList products={fruits} />

      <style jsx>{`
        .title {
          margin: 52px 0;
          display: flex;
          justify-content: center;
        }

        .title h1 {
          font-size: 2.4em;
        } 

        .title svg {
          cursor
        }
      `}</style>
    </main>
  );
};

export default Home;
