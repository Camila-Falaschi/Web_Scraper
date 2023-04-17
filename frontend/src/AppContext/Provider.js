import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import AppContext from "./AppContext";

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorNotFound, setErrorNotFound] = useState(false);

  const providerValue = useMemo(
    () => ({
      products,
      setProducts,
      loading,
      setLoading,
      errorNotFound,
      setErrorNotFound,
    }),
    [products, loading, errorNotFound]
  );

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
