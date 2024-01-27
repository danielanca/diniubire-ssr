import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextWrapper } from "./Context";
import "@fontsource/luckiest-guy";

import routes from "./routes/routes";

export const App = () => {
  return (
    <ContextWrapper>
      <Suspense fallback={<div>LOADING URS...</div>}> 
        <Routes>
          {routes.map((route, index) => (
            <Route 
              key={index}
              path={route.path}
              element={<route.component />} 
            />
          ))}
        </Routes>
      </Suspense>
    </ContextWrapper>
  );
};

export default App;
