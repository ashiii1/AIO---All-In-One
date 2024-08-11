/* eslint-disable react-hooks/exhaustive-deps */
// import { Add, Remove } from '@material-ui/icons'
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import LowerAnnouncement from "../components/LowerAnnouncement";
import Navbar from "../components/Navbar";
import UpperAnnouncement from "../components/UpperAnnouncement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { medium, large } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router";
import { ToastContainer, Toast } from "react-bootstrap";
// import { userRequest } from '../axiosMethods'
import axios from "axios";

// const KEY=process.env.REACT_APP_STRIPE

const Maincontainer = styled.div`
  background-color: whitesmoke;
`;

const TopButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 8rem;
  ${medium({ margin: "2rem 1rem" })}
`;
const Container = styled.div`
  margin: 2rem 8rem;
  display: flex;
  gap: 2rem;
  ${large({ margin: "2rem 1rem", gap: "0" })}
  ${medium({ flexDirection: "column" })}
`;

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin: 1rem;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
  }
`;
const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 75%;
  height: 100%;
  gap: 2rem;
  ${medium({ width: "100%" })}
`;
const SummaryContainer = styled.div`
  background-color: white;
  padding: 18px;
  width: 25%;
  height: 100%;
  ${medium({ width: "100%" })}
`;

const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        console.log(cart.total);
        const res = await axios.post(
          "https://ecommercebackend-o0yl.onrender.com/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 500,
          },
          {
            headers: {
              token: user.currentUser.token,
            },
          }
        );
        dispatch({ type: "emptyCart" });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <>
      <ToastContainer position="bottom-end">
        <Toast
          bg={"danger"}
          style={{ width: "15rem", height: "3rem", padding: "5px" }}
          onClose={() => setAlert(false)}
          show={alert}
          delay={3000}
          autohide
        >
          Please Log in to proceed to checkout
        </Toast>
      </ToastContainer>
      <Maincontainer>
        <UpperAnnouncement />
        <Navbar />
        <LowerAnnouncement />
        <TopButtons>
          <div>
            <Link to="/products">
              {" "}
              <Button>Continue To Shop</Button>
            </Link>
          </div>
          <div>
            <h1>Your Bag</h1>
          </div>
          <div></div>
        </TopButtons>
        <Container>
          {cart.products.length > 0 ? (
            <>
              <OrderContainer>
                <CartItem />
              </OrderContainer>
              <SummaryContainer>
                <div>
                  <h3>SUMMARY</h3>
                </div>
                <SummaryLine>
                  <div>SubTotal</div>
                  <div> ${cart.total}</div>
                </SummaryLine>
                <SummaryLine>
                  <div>Shipping</div>
                  <div> $5</div>
                </SummaryLine>
                <SummaryLine>
                  <div>Shipping Discount</div>
                  <div> - $5</div>
                </SummaryLine>
                <SummaryLine>
                  <div>Total</div>
                  <div> ${cart.total}</div>
                </SummaryLine>
                <div>
                  {user.currentUser ? (
                    <StripeCheckout
                      name="MakeYouUp"
                      image="https://source.unsplash.com/yd3mg93Smn8"
                      billingAddress
                      shippingAddress
                      description={`Your Cart Total is $ ${cart.total}`}
                      amount={cart.total * 100}
                      token={onToken}
                      stripeKey="pk_test_51JpnsFSJXTWe5Zf11N05XLzTKIGjBGK5H030E43f2cOWiJnaGM6fXqHt7FMEqLEs6BqbjZosPSLxGWgblW8V04CU00CSqFgR2n"
                    >
                      <Button>Checkout</Button>
                    </StripeCheckout>
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          setAlert(true);
                        }}
                      >
                        checkOut
                      </Button>
                    </>
                  )}
                </div>
                <div style={{ color: "red" }}>
                  <p>IMP Note:</p>
                  <p>Please use the below credentials to checkout</p>
                  <p>
                    card number: <b>4242424242424242</b>
                  </p>
                  <p>
                    Expiry:<b> 02/22 or any future dates </b>
                  </p>
                  <p>
                    CVV: <b>222 or any three digit number</b>
                  </p>
                </div>
              </SummaryContainer>
            </>
          ) : (
            <>
              <h2 style={{ textAlign: "center", width: "100%" }}>
                Your Bag is empty
              </h2>
            </>
          )}
        </Container>

        <Newsletter />
        <Footer />
      </Maincontainer>
    </>
  );
}
