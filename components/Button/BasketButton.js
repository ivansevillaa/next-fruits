import React, { useState } from "react";
import { useProductDispatch } from "@context/Basket";

const BasketButton = () => {
  const productDispatch = useProductDispatch();
  const [inputValue, setInputValue] = useState(1);
  const [error, setError] = useState("");

  const handleInputChange = ({ target }) => {
    setError("");
    setInputValue(target.value);
  };

  const handleAddClick = () => {
    if (inputValue > 0) {
      productDispatch({ type: "add", quantity: parseInt(inputValue, 10) });
    } else {
      setError("Cant't be under 1");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <input
          type="number"
          placeholder="Quantity"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddClick}>Add to basket</button>
      </div>
      {error && <p className="error-message">{error}</p>}

      <style jsx>{`
        .wrapper {
          display: flex;
        }

        input {
          padding: 10px 16px;
          width: 135px;
          border: 1px solid ${error ? "#e0b4b4" : "#34363815"};
          background-color: ${error ? "#fff6f6" : "#fff"};
          border-right: none;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          outline: none;
        }

        button {
          padding: 10px 16px;
          color: #fff;
          background: #21ba45;
          border: none;
          border-radius: inherit;
          cursor: pointer;
          outline: none;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        button:hover {
          background: #16ab39;
        }

        .error-message {
          width: 100%;
          color: #ff0000;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default BasketButton;
