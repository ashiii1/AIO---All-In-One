/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AdminNav from "../AdminComponents/AdminNav";
import Footer from "../components/Footer";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline, Edit } from "@material-ui/icons";
import axios from "axios";
import Loader from "react-loader-spinner";
import { large } from "../responsive";

const Maincontainer = styled.div`
  background-color: whitesmoke;
`;
const Container = styled.div`
  margin: 2rem 8rem;
  ${large({ margin: "2rem 1rem" })}
`;

const GridContainer = styled.div`
  background-color: white;
  height: 100vh;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin: 20px;
`;
const Header = styled.div`
  display: flex;
  margin: 2rem 0;
  width: 100%;
`;

const AddContainer = styled.div`
  width: 100%;
  text-align: right;
  height: 3rem;
`;
export default function AdminUserList() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://ecommercebackend-o0yl.onrender.com/users`,
        {
          headers: {
            token: user.currentUser.token,
          },
        }
      );
      setUsers(res.data);
      setLoading(false);
    } catch {}
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://ecommercebackend-o0yl.onrender.com/users/${id}`,
        {
          headers: {
            token: user.currentUser.token,
          },
        }
      );
      console.log(res);
      getUsers();
    } catch {}
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "username",
      headerName: "USERNAME",
      width: 300,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/adminuseredit/" + params.row._id}>
              <Edit />
            </Link>
            <DeleteOutline
              style={{ color: "red", cursor: "pointer", marginLeft: "15px" }}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Maincontainer>
        <AdminNav />
        {loading ? (
          <div className="d-flex justify-content-center m-5">
            <Loader type="TailSpin" color="#25283D" height={100} width={100} />
          </div>
        ) : (
          <Container>
            <Header>
              <div style={{ width: "20rem" }}>
                <h3>User Details</h3>
              </div>
              <AddContainer>
                <Link to="/adminuseradd">
                  <Button className="bg-primary">Add New </Button>
                </Link>
              </AddContainer>
            </Header>
            <GridContainer>
              <DataGrid
                rows={users}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                checkboxSelection
              />
            </GridContainer>
          </Container>
        )}
      </Maincontainer>
      {!loading && <Footer />}
    </>
  );
}
