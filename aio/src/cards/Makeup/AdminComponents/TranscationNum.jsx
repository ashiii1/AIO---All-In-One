/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  padding: 10px;
  background-color: white;
`;
export default function TranscationNum() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `https://ecommercebackend-o0yl.onrender.com/order`,
          {
            headers: {
              token: user.currentUser.token,
            },
          }
        );
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  console.log(orders);
  return (
    <Container>
      <h4>Latest Transactions</h4>
      <table className="table">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr>
                <td width="1rem">{order.userId}</td>
                <td>{order.amount}$</td>
                <td>{new Date(order.createdAt).toDateString()}</td>
                <td>{order.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
