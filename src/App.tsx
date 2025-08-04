import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import routeLinks from "./routes/router";

import { Fragment } from "react/jsx-runtime";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter basename="/lazynoize-web">
      <div className="app">
        <Routes>
          <Route>
            {routeLinks.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout === null ? Fragment : MainLayout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Fragment>
                      <Layout>
                        <Page />
                      </Layout>
                    </Fragment>
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
