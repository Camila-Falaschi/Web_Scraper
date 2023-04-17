import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext/AppContext";
import LoadingIcon from "../Images/loading.gif";
import SearchIcon from "../Images/icons-search.svg";
import NotFoundIcon from "../Images/icons-not-found.svg";
import Search from "../Components/Search";
import ProductCard from "../Components/ProductCard";

function Home() {
  const { products, loading, errorNotFound } = useContext(AppContext);

  return (
    <main>
      <Search />
      <section>
        {errorNotFound && <img src={NotFoundIcon} alt="not-found-icon" />}
        {products.length === 0 && !errorNotFound && !loading ? (
          <img src={SearchIcon} alt="search-icon" />
        ) : (
          products.map((item, index) => {
            return (
              <div key={index}>
                <ProductCard prodct={item} />
              </div>
            );
          })
        )}
        {loading && <img src={LoadingIcon} alt="loading-icon" />}
      </section>
    </main>
  );
}

export default Home;
