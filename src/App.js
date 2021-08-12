import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./guard/auth";
import UserStoreProvider from "./context/UserContext";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import ProducrPage from "./pages/ProducrPage";
import CartPage from "./pages/CartPage";
import ResumePage from "./pages/ResumePAge";
import ProductDetail from "./pages/ProductDetail";
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
            </Switch>
          </Router>
        </ToastProvider>
      </UserStoreProvider>
    </Provider>
  );
}

export default App;
