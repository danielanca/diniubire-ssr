import React,{ useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextWrapper } from "./Context";
import "@fontsource/luckiest-guy";
import useScrollHandler from "./components/hooks/hooks/useScrollHandler";
import useProductData from "./components/hooks/hooks/useProductData";
import routes from "./routes/routes";
import CookieConsent from "./components/CookieConsent/CookieConsent";
import { getCookie } from "./utils/functions";
import { ProductsContext } from './Context';

/* XXXXXXXXXXXXXXXXXXX */

/* WORDS BEFORE: If you run the SSR server as yarn build and then yarn serve, it will be marked as NODE_ENV=PRODUCTION*/
/* If you run by using yarn dev:server, it will use NODE_ENV=DEVELOPMENT */

/* XXXXXXXXXXXXXXXXXXX */

export const App = () => {
  const getCookieConsent = () => typeof document !== 'undefined' && getCookie("cookieConsentBrasov") !== "userAccepted";
  useScrollHandler();
  

  const [ssProducts, setSSproducts] = useProductData(); // This will manage product data
  const [cartCount, setCartCount] = useState(0); // Cart state


  return (
    <ContextWrapper>
       {getCookieConsent() && <CookieConsent />}
       <ProductsContext.Provider value={{ ssProducts, setSSproducts, cartCount, setCartCount }}>
        <Routes>
        {routes.map((route, index) => {
            const Layout = route.layout || React.Fragment;
            const Component = route.component;
           
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout >
                    <Component {...route.props} />
                  </Layout>
                } 
              />
            );
          })}
        </Routes>
      </ProductsContext.Provider>
    </ContextWrapper>
  );
};

export default App;
