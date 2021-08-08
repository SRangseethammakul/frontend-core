import React from "react";
import { Table } from "react-bootstrap";
//redux
import axios from "axios";
import Script from "react-load-script";
import { useSelector, useDispatch } from "react-redux";
import { clearAllCart } from "../redux/actions/cartAction";
import { PublicKey } from "../config/keys";
import { useToasts } from "react-toast-notifications";
let OmiseCard;
const CartPage = () => {
  const { addToast } = useToasts();
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);
  const sum = useSelector((state) => state.cartReducer.sum);
  const profileValue = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const createCreditCard = async (email, name, amount, token) => {
    try {
      const resp = await axios({
        method: "post",
        url: "https://center-coreapi.herokuapp.com/checkout/creditcard",
        data: {
          email,
          name,
          amount,
          token,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.data.status) {
        dispatch(clearAllCart());
        addToast('payment success', { appearance: "success" });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: PublicKey,
      currency: "THB",
      frameLabel: "Core API Name",
      submitLabel: "Pay now",
      buttonLabel: "Pay 1000 THB",
    });
  };
  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: ["truemoney", "rabbit_linepay"],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };
  const createInternetBangking = async (email, name, amount, token) => {
    try {
      const resp = await axios({
        method: "post",
        url: "https://center-coreapi.herokuapp.com/checkout/internetbangking",
        data: {
          email,
          name,
          amount,
          token,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { authorizeUri } = resp.data;
      if (authorizeUri) {
        window.location.href = authorizeUri;
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const omiseCardHandler = () => {
    OmiseCard.open({
      amount: sum * 100,
      submitFormTarget: "#checkout-form",
      onCreateTokenSuccess: (nonce) => {
        /* Handler on token or source creation.  Use this to submit form or send ajax request to server */
        console.log(nonce);
        createCreditCard(
          profileValue.email,
          profileValue.name,
          sum * 100,
          nonce
        );
      },
      onFormClosed: () => {
        /* Handler on form closure. */
      },
    });
  };
  const internetBankingConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "internet_banking",
      otherPaymentMethods: ["truemoney", "rabbit_linepay"],
    });
    OmiseCard.configureButton("#internet-banking");
    OmiseCard.attach();
  };
  const omiseBankingHandler = () => {
    OmiseCard.open({
      amount: sum * 100,
      submitFormTarget: "#checkout-form",
      onCreateTokenSuccess: (nonce) => {
        /* Handler on token or source creation.  Use this to submit form or send ajax request to server */
        console.log(nonce);
        createInternetBangking(
          profileValue.email,
          profileValue.name,
          sum * 100,
          nonce
        );
      },
      onFormClosed: () => {
        /* Handler on form closure. */
      },
    });
  };
  const handleOnClick = async () => {
    creditCardConfigure();
    omiseCardHandler();
  };
  const handleBankingOnClick = async () => {
    internetBankingConfigure();
    omiseBankingHandler();
  };

  return (
    <div className="container mt-3">
      <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
      <div className="row">
        <div className="col-md-12">
          <h2>
            Cart Sum {total} {sum}
          </h2>
          <button
            className="btn btn-danger btn-sm m-3"
            onClick={() => {
              dispatch(clearAllCart());
            }}
          >
            Clear Product All
          </button>
          {sum > 20 && (
            <>
              <form>
                <button
                  id="credit-card"
                  className="btn btn-info"
                  type="button"
                  onClick={handleOnClick}
                >
                  Pay with Credit Card
                </button>
              </form>
              <form>
                <button
                  id="internet-banking"
                  className="btn btn-info"
                  type="button"
                  onClick={handleBankingOnClick}
                >
                  Pay with Internet Banking / Others
                </button>
              </form>
            </>
          )}

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>product Number</th>
                <th>Sum</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty * item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
