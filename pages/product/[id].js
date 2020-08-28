import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ProductDetails from "@components/ProductDetails";
import useFetchData from "@hooks/useFetchData";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [{ data, isLoading, error }, setUrl] = useFetchData(
    `/api/fruits/${id}`,
    []
  );

  useEffect(() => {
    setUrl(`/api/fruits/${id}`);
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>; // TODO: add a spinner component
  }

  if (error) {
    return <h1>{error.message}</h1>; // TODO: add an error component
  }
  return <main>{data ? <ProductDetails product={data} /> : null}</main>;
};

export default Product;
