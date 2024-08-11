/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UpperAnnouncement from "../components/UpperAnnouncement";
import Navbar from "../components/Navbar";
import LowerAnnouncement from "../components/LowerAnnouncement";
import { medium, large } from "../responsive";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "react-loader-spinner";

const Maincontainer = styled.div`
  background-color: whitesmoke;
`;

const TopButtons = styled.div`
  display: flex;
  gap: 5rem;
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

export default function Order() {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get(
          `https://ecommercebackend-o0yl.onrender.com/order/find/${user.currentUser._id}`,
          {
            headers: {
              token: user.currentUser.token,
            },
          }
        );
        console.log(res.data);
        setOrder(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getOrder();
  }, []);

  return (
    <>
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
            <h1>Your Orders</h1>
          </div>
        </TopButtons>
        {loading ? (
          <div className="d-flex justify-content-center m-5">
            <Loader type="TailSpin" color="#25283D" height={100} width={100} />
          </div>
        ) : (
          <Container>
            {order.length > 0 ? (
              <table className="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Products</th>
                    <th scope="col">Shipping Address</th>
                    <th scope="col">Order Placed</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item._id}</th>
                        <td>
                          {item.products.map((a) => {
                            return (
                              <>
                                <span>{a.productName}</span>
                                <br />
                              </>
                            );
                          })}
                        </td>
                        <td>
                          {item.address.city},{item.address.country}
                        </td>
                        <td>{new Date(item.createdAt).toDateString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <>
                <h2 style={{ textAlign: "center", width: "100%" }}>
                  Your have not yet ordered any items
                </h2>
              </>
            )}
          </Container>
        )}
      </Maincontainer>
      <Newsletter />
      <Footer />
    </>
  );
}
