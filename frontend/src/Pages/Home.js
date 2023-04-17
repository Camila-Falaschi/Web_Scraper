import React, { useContext } from "react";
import AppContext from "../AppContext/AppContext";
import LoadingIcon from "../Images/loading.gif";
import SearchIcon from "../Images/icons-search.svg";
import NotFoundIcon from "../Images/icons-not-found.svg";
import Search from "../Components/Search";
import ProductCard from "../Components/ProductCard";
import "../Styles/home.css";

function Home() {
  const { products, loading, errorNotFound } = useContext(AppContext);

  return (
    <main className="main">
      <Search />
      <section className="products-container">
        {errorNotFound && (
          <img src={NotFoundIcon} alt="not-found-icon" className="icon" />
        )}
        {products.length === 0 && !errorNotFound && !loading && (
          <img src={SearchIcon} alt="search-icon" className="icon" />
        )}
        {products.length > 0 &&
          !loading &&
          products.map((item, index) => {
            return (
              <div key={index}>
                <ProductCard product={item} />
              </div>
            );
          })}
        {loading && (
          <img src={LoadingIcon} alt="loading-icon" className="icon" />
        )}
      </section>
    </main>
  );
}

export default Home;
