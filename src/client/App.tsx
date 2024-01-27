import React,{ Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextWrapper } from "./Context";
import "@fontsource/luckiest-guy";

import routes from "./routes/routes";

export const App = () => {

  // const [letsCartHandler, CartHandler] = useState(0);
  // const [ssProducts, setSSproducts] = useState<any>();

  return (
    <ContextWrapper>
      <Suspense fallback={<div>LOADING URS...</div>}> 
        <Routes>
        {routes.map((route, index) => {
            const Layout = route.layout || React.Fragment;
            const Component = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Component />
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
