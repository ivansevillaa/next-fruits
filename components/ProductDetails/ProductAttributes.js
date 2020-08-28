import React from "react";

const ProductAttributes = ({ attributes }) => {
  const {
    description,
    kingdom,
    sciencetificName,
    family,
    conservationStatus,
  } = attributes;

  return (
    <section>
      <h3>About this fruit</h3>
      <p className="fruits__description">{description}</p>
      <div className="attributes-table">
        <h4 className="field attributes-table__title">Attributes</h4>
        <p className="field attributes-table__content">Sciencetific Name</p>
        <p className="field attributes-table__content">{sciencetificName}</p>
        <p className="field attributes-table__content">Kingdom</p>
        <p className="field attributes-table__content">{kingdom}</p>
        <p className="field attributes-table__content">Family</p>
        <p className="field attributes-table__content">{family}</p>
        <p className="field attributes-table__content">Conservation Status</p>
        <p className="field attributes-table__content">{conservationStatus}</p>
      </div>

      <style jsx>{`
        .fruits__description {
          line-height: 1.5;
        }

        .attributes-table {
          display: grid;
          grid-template-columns: 40% 60%;
          border-top: 1px solid #34363815;
          border-left: 1px solid #34363815;
        }

        .attributes-table__title {
          grid-column: span 2;
          margin: 0;
          background-color: #f9fafb;
        }

        .attributes-table__content {
          margin: 0;
        }

        .attributes-table__content:nth-of-type(2n + 1) {
          font-weight: bold;
        }

        .field {
          padding: 15px;
          border-bottom: 1px solid #34363815;
          border-right: 1px solid #34363815;
        }

        @media only screen and (max-width: 460px) {
          .attributes-table__content {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductAttributes;
