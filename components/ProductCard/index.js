import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  const { id, name, image, price } = product;

  return (
    <Link href='/product/[id]' as={`/product/${id}`}>
      <article>
        <img src={image} alt='product item' />
        <div className="product-details">
          <h3>{name}</h3>
          <p>${price}</p>
        </div>

        <style jsx>{`
          article {
            height: 412px;
            border-radius: 10px;
            cursor: pointer;
            transition: .5s;
            border: 1px solid #e5e5e5;
            box-shadow: 0px 5px 5px 0px rgba(229,229,229,0.75);
          }

          article:hover {
            transform: scale(1.1);
            transform: translateY(-10px)
          }

          img {
            width: 100%;
            height: 80%;
            object-fit: cover;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            border-bottom: inherit; 
          }

          .product-details {
            padding: 16px;
          }

          .product-details > p, h3 {
            margin: 0;
          }
        `}</style>
      </article>
    </Link>
  )
}

export default ProductCard;
