import {getData} from './../../../data/productList';
import { useState, useEffect } from 'react';

const useProductData = () => {
  const [ssProducts, setSSproducts] = useState<any>();

  useEffect(() => {
    if (ssProducts == null) {
      // Replace getData() with your actual data fetching function
      getData().then((finalData) => {
        sessionStorage.setItem("productsFetched", JSON.stringify(finalData));
      });
    }
  }, [ssProducts]);

  return [ssProducts, setSSproducts];
};

export default useProductData;
