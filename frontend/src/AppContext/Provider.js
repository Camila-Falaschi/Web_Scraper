import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(False);

  const providerValue = useMemo(() => ({
    products,
    setProducts,
    loading,
    setLoading,

  }), [products, loading]);

  return (
    <AppContext.Provider value={ providerValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
