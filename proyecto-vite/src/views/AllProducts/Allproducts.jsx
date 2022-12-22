import { useState } from "react";
export default function Allproducts() {
  const [title, setTitle] = useState("products");
  return (
    <div className="allproducts">
      <h1>Here are all the {title}</h1>
      <button onClick={() => setTitle("services")}>Change title</button>
    </div>
  );
}


