import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext/AppContext";
import { requestGet } from "../Services/requests";
import "../Styles/search.css";

function Search() {
  const { setProducts, setLoading, setErrorNotFound } = useContext(AppContext);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(true);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isWebsiteSelected, setIsWebsiteSelected] = useState(false);
  const [category, setCategory] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (category !== "" && website !== "") {
      setIsSubmitEnabled(false);
    } else {
      setIsSubmitEnabled(true);
    }
  }, [category, website]);

  const handleChangeCategory = (target) => {
    const { value } = target;
    setIsCategorySelected(true);
    setCategory(value);
  };

  const handleChangeWebsite = (target) => {
    const { value } = target;
    setIsWebsiteSelected(true);
    setWebsite(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const productsList = await requestGet("/", { category, website });
      setLoading(false);
      setProducts(productsList);
    } catch (error) {
      setLoading(false);
      setErrorNotFound(true);
    }
  };

  return (
    <section className="search-section">
      <label htmlFor="category-select" className="input">
        Category
        <select
          name="category"
          id="category-select"
          onChange={({ target }) => handleChangeCategory(target)}
        >
          <option value="" disabled={isCategorySelected}>
            ----Select Category----
          </option>
          <option value="mobile">Mobile</option>
          <option value="refrigerator">Refrigerator</option>
          <option value="tv">TV</option>
        </select>
      </label>
      <label htmlFor="website-select" className="input">
        Website
        <select
          name="website"
          id="website-select"
          onChange={({ target }) => handleChangeWebsite(target)}
        >
          <option value="" disabled={isWebsiteSelected}>
            ----Select Website----
          </option>
          <option value="mobile">Mercado Livre</option>
          <option value="refrigerator">Buscape</option>
        </select>
      </label>
      <button
        className="search-button"
        type="button"
        onClick={(event) => handleSubmit(event)}
        disabled={isSubmitEnabled}
      >
        Search
      </button>
    </section>
  );
}

export default Search;
