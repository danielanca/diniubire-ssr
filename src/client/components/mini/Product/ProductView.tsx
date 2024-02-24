import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import ProductPreview from "./ProductPreview";
import Loader from './Loader/Loader';
import SuggestionArea from "../../SuggestedProducts/SuggestionArea";
import { CartInfoItemCookie } from "../../../data/constants";
import { ProductListType, CartProps } from "../../../utils/OrderInterfaces";
import { NotExistingProduct } from "../../../data/strings.json";
import images from '../../../data/images';
import { sendTriggerEmail } from '../../../services/triggers';
import styles from "./ProductView.module.scss";
import {ProductsContext} from './../../../Context';

const ProductView = ({ notifyMe }: CartProps) => {
  let params = useParams();
  let ID = params.productID !== undefined ? params.productID : "";
  const ref = useRef(null);
  const [productListUpdated, setProducts] = useState<ProductListType>();
  const { cartCount, setCartCount } = useContext(ProductsContext);
  console.log('Params are:', params);
  useEffect(() => {
    if (productListUpdated == null) {
      const getProdData = async () => {
        const {getProductWithID} = await import('../../../data/productList');
        getProductWithID(ID).then((finalData) => {
          setProducts(finalData);
  
          fetch("https://ipinfo.io/json?token=f8c1bf7eef0517")
            .then((response) => response.json())
            .then((jsonResponse) =>
              sendTriggerEmail({
                typeEvent: `Visit-${jsonResponse.ip} - ${jsonResponse.city}`,
                url: window.location.pathname
              })
            );
        });
      }
      getProdData();
     
    }
  });

  const addCartHandler = () => {
    let storedCart: { id: string; itemNumber: string }[] = [];
    let expectedData = localStorage.getItem(CartInfoItemCookie);
    if (expectedData === null) {
      storedCart.push({ id: ID, itemNumber: "1" });
      localStorage.setItem(CartInfoItemCookie, JSON.stringify(storedCart));
      setCartCount(Math.random() * 100);
      // notifyMe(Math.floor(Math.random() * 100)); // not how it should be
      return;
    }
    let itemFound = false;
    storedCart = JSON.parse(expectedData);

    storedCart.forEach((item) => {
      if (item.id === ID.toString()) {
        item.itemNumber = (Number(item.itemNumber) + 1).toString();
        itemFound = true;
      }
    });
    if (!itemFound) {
      storedCart.push({ id: ID, itemNumber: "1" });
    }
    localStorage.setItem(CartInfoItemCookie, JSON.stringify(storedCart));
    setCartCount(Math.random() * 100);
    // if(typeof notifyMe === 'function'){
    //   notifyMe(Math.floor(Math.random() * 100));
    // }else{
    //   console.log('NotifyMe function not working');
    // }
   
  };

  return (
    <>
      <div className={styles.padder}>
        {productListUpdated != null && productListUpdated.hasOwnProperty(ID) ? (
          <ProductPreview addCartHandler={addCartHandler} ID={ID} productListUpdated={productListUpdated} />
        ) : (
          <Loader />
        )}
        {/* <div className={styles.playerContainer}>
          {(ID === "mulaj-cuplu" || ID === "mulaj-familie") && <VideoPlayer />}
        </div> */}
      </div>

      <div>
        {typeof productListUpdated !== "undefined" &&
        productListUpdated.hasOwnProperty(ID) &&
        (ID === "mulaj-cuplu" || ID === "mulaj-familie") ? (
          <Comments
            productData={JSON.stringify(productListUpdated)}
            productID={ID}
            reviewsList={productListUpdated[ID].reviews}
          />
        ) : (
          typeof productListUpdated !== "undefined" &&
          !productListUpdated.hasOwnProperty(ID) && (
            <div className={styles.noProductFoundContainer}>
              <h2 className={styles.warningHeadline}>{NotExistingProduct.warningHeadline}</h2>
              <div className={styles.noProductWrapper}>
                <img src={images.noProduct} />
              </div>
              <h2 className={styles.warningHeadline}>{NotExistingProduct.productNotFound}</h2>
            </div>
          )
        )}
      </div>
      {productListUpdated && <SuggestionArea productID={ID} />}
    </>
  );
};

export default ProductView;
