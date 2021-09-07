import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto text-6xl pt-20">
      <p>Home Page</p>
      <Link to="/shop">Go to Shop</Link>
    </div>
  );
}

export default Home;
