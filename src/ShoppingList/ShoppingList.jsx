import { useState } from "react";

const Shopping = () => {
  const [cart, setCart] = useState([{}]);
  const [products, setproducts] = useState([{}]);
  return (
    <>
      <form
        action=""
        onChange={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={products}
          onSubmit={(e) => {
            setproducts([...products, e.target.value]);
          }}
        />
        <input
          type="text"
          value={products}
          onChange={(e) => {
            setproducts([...products, e.target.value]);
          }}
        />
        <button type="button" onClick={() => {
          setCart([...products, products]);
          
        }}>
          submit
        </button>
      </form>
    </>
  );
};
