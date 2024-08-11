/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  padding: 10px;
  background-color: white;
`;
export default function UserNum() {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          `https://ecommercebackend-o0yl.onrender.com/users/?new=true`,
          {
            headers: {
              token: user.currentUser.token,
            },
          }
        );
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  console.log(users);
  return (
    <TableContainer>
      <h4>Newly Added Users</h4>
      <table className="table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.username}</td>
                <td> {user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
}
