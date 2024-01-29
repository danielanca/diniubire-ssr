import React,{ Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextWrapper } from "./Context";
import "@fontsource/luckiest-guy";
import useScrollHandler from "./components/hooks/hooks/useScrollHandler";
import useProductData from "./components/hooks/hooks/useProductData";
import routes from "./routes/routes";
import CookieConsent from "./components/CookieConsent/CookieConsent";
import { getCookie } from "./utils/functions";
import ProductView from "./components/mini/Product/ProductView";

export const App = () => {
  const getCookieConsent = () => typeof document !== 'undefined' && getCookie("cookieConsentBrasov") !== "userAccepted";
  useScrollHandler();
  

  const [ssProducts, setSSproducts] = useProductData(); // This will manage product data
  const [letsCartHandler, CartHandler] = useState(0);


  return (
    <ContextWrapper>
       {getCookieConsent() && <CookieConsent />}
      <Suspense fallback={<div>LOADING URS...</div>}> 
        <Routes>
        {routes.map((route, index) => {
            const Layout = route.layout || React.Fragment;
            const Component = route.component;
            const additionalProps = route.component === ProductView ? { notifyMe: CartHandler } : {};
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Component {...route.props} {...additionalProps} />
                  </Layout>
                } 
              />
            );
          })}
        </Routes>
      </Suspense>
    </ContextWrapper>
  );
};

export default App;
