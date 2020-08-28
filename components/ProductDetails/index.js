import React from "react";
import { BasketButton } from "@components/Button";
import ProductAttributes from "./ProductAttributes";

const ProductDetails = ({ product }) => {
  const { image, name, price, sku, attributes } = product;

  return (
    <>
      <section className="main-details">
        <figure className="main-details__image">
          <img src={image} alt="fruit" />
        </figure>
        <div className="main-details__text">
          <h2 className="main-details__name">{name}</h2>
          <p className="main-details__price">${price}</p>
          <p className="main-details__sku">SKU:{sku}</p>
          <BasketButton />
        </div>
      </section>
      <ProductAttributes attributes={attributes} />

      <style jsx>{`
        .main-details {
          margin: 80px 0 65px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(auto, 300px));
          grid-template-rows: 300px;
          gap: 20px 32px;
          align-items: center;
          justify-content: center;
        }

        .main-details__image,
        .main-details__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .main-details__name {
          margin: 0;
        }

        .main-details__price {
          margin: 8px 0;
        }

        .main-details__sku {
          display: inline-block;
          padding: 7px 10px;
          margin: 0 0 8px;
          font-size: 12px;
          color: #00000099;
          font-weight: bold;
          background: #e8e8e8;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};

export default ProductDetails;
