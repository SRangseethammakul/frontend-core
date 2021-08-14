import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./guard/auth";
import AdminRoute from "./guard/admin";
import UserStoreProvider from "./context/UserContext";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import ProducrPage from "./pages/ProducrPage";
import CartPage from "./pages/CartPage";
import ResumePage from "./pages/ResumePAge";
import ProductDetail from "./pages/ProductDetail";
import IndexPage from "./pages/category/IndexPage";
import CreatePage from "./pages/category/CreatePage";
import ProductIndex from "./pages/product/ProductIndex";
import ProductCreate from "./pages/product/ProductCreate";
const { store } = configureStore();
function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
        <ToastProvider
          placement="top-right"
          autoDismiss
          autoDismissTimeout={3 * 1000}
        >
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/register">
                <RegisterPage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/product">
                <ProducrPage />
              </Route>
              <Route exact path="/resume">
                <ResumePage />
              </Route>
              <PrivateRoute exact path="/cart">
                <CartPage />
              </PrivateRoute>
              <Route exact path="/detail/:name">
                <ProductDetail />
              </Route>
              <Route
                path="/cms/category"
                render={({ match: { url } }) => (
                  <>
                    <AdminRoute path={`${url}/`} exact>
                      <IndexPage />
                    </AdminRoute>
                    <Route path={`${url}/create`} exact>
                      <CreatePage />
                    </Route>
                    <Route path={`${url}/edit/:id`} exact>
                      <IndexPage />
                    </Route>
                  </>
                )}
              ></Route>
              <Route
                path="/cms/product"
                render={({ match: { url } }) => (
                  <>
                    <AdminRoute path={`${url}/`} exact>
                      <ProductIndex />
                    </AdminRoute>
                    <AdminRoute path={`${url}/create`} exact>
                      <ProductCreate />
                    </AdminRoute>
                    <Route path={`${url}/edit/:id`} exact>
                      <IndexPage />
                    </Route>
                  </>
                )}
              ></Route>
            </Switch>
          </Router>
        </ToastProvider>
      </UserStoreProvider>
    </Provider>
  );
}

export default App;
