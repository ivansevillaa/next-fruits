import React from "react";
import ProductDetails from "@components/ProductDetails";

export const getStaticPaths = async () => {
  const response = await fetch("https://next-fruits.vercel.app/api/fruits");
  const { fruits } = await response.json();

  const paths = fruits.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://next-fruits.vercel.app/api/fruits/${params.id}`
  );
  const fruit = await response.json();

  return {
    props: {
      fruit,
    },
  };
};

const Product = ({ fruit }) => {
  return <main>{fruit ? <ProductDetails product={fruit} /> : null}</main>;
};

export default Product;
