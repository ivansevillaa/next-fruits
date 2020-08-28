import React from 'react';
import ProductCard from '@components/ProductCard';

const ProductList = ({ products }) => {

  return (
    <section>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

      <style jsx>{`
        section {
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
      `}</style>
    </section>
  )
}

export default ProductList;
