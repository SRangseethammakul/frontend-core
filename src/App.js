import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
// import PrivateRoute from "./guard/auth";
import UserStoreProvider from "./context/UserContext";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import ProducrPage from "./pages/ProducrPage";
import CartPage from "./pages/CartPage";
const { store } = configureStore();
function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
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
            <Route exact path="/cart">
              <CartPage />
            </Route>
          </Switch>
        </Router>
      </UserStoreProvider>
    </Provider>
  );
}

export default App;
