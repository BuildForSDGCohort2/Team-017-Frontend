import React from "react";
import { Categories, Footer, Header } from "../common";
import Products from "../Products";
function Home() {
  return (
    <div className="grid-container">
      <Header />
      <aside class="sidebar">
        <Categories />
      </aside>
      <main className="main">
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
