  
import React, { useEffect, useRef, useState } from "react";

const AddProduct = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    // console.log("inputRef", inputRef.current);
    inputRef.current.focus();    
  }, []);
  
  // console.log("inputRef", inputRef.current);


  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() => {
          props.onAdd(input);
          setInput("");
        }}
      >
       Add Product
      </button>
    </div>
  );
};

export default AddProduct;