/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router";
import styled from "styled-components";

const SuccessDiv = styled.div`
  background-image: url("https://source.unsplash.com/VJ4pn_PSBLo");
  width: 100vw;
  height: 100vh;
`;

export default function Success() {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const data = location.state.stripeData;
  const cart = location.state.products;
  const user = useSelector((state) => state.user);
  // console.log(user.currentUser._id)
  const [orderId, setOrderId] = useState(null);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    console.log("in success effect");
    const createOrder = async () => {
      try {
        console.log("in send");
        const res = await axios.post(
          "https://ecommercebackend-o0yl.onrender.com/order",
          {
            userId: user.currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              productName: item.name,
              quantity: item._quantity,
            })),
            amount: cart.total,
            address: data.billing_details.address,
          },
          {
            headers: {
              token: user.currentUser.token,
            },
          }
        );
        console.log(res);
        setOrderId(res.data.insertedId);
      } catch (err) {
        console.log(err);
      }
    };
    data && createOrder();
  }, [cart, data]);

  return (
    <>
      <SuccessDiv>
        <Modal show={show} onHide={handleClose} backdrop="static" centered>
          <Modal.Header>
            <Modal.Title>Your Order Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {orderId
              ? `Order has been created successfully. Your order number is ${orderId}`
              : `Successfull. Your order is being prepared...`}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => history.push("/")}
              style={{ padding: 10, marginTop: 20 }}
            >
              Home
            </Button>
            <Button
              className="bg-success"
              onClick={() => history.push("/order")}
              style={{ padding: 10, marginTop: 20 }}
            >
              {" "}
              Orders
            </Button>
          </Modal.Footer>
        </Modal>
      </SuccessDiv>
    </>
  );
}
