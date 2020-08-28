import React from "react";
import useFetchData from "@hooks/useFetchData";
import ProductList from "@components/ProductList";
import { Apple, FruitStand } from "@components/SVGIcons";

const Home = () => {
  const [{ data, isLoading, error }, setUrl] = useFetchData("/api/fruits", []);

  if (isLoading) {
    return <h1>Loading...</h1>; // TODO: add a spinner component
  }

  if (error) {
    return <h1>{error.message}</h1>; // TODO: add an error component
  }

  return (
    <main>
      <section className="title">
        <h1>
          Exotic <FruitStand size="40px" /> Fruits
        </h1>
      </section>
      <ProductList products={data.fruits} />

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

{
  /* <ul>
    {data.fruits.map(fruit => (
      <li>
        <img src={fruit.image} alt="fruit image" />
        <p>{fruit.name}</p>
      </li>
    ))}
  </ul> 
*/
}
