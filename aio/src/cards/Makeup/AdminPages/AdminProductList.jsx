import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AdminNav from "../AdminComponents/AdminNav";
import Footer from "../components/Footer";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline, Edit } from "@material-ui/icons";
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

const ProductDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin: 1rem;
  height: 100%;
  border-radius: 10px;
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

export default function AdminProductList() {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `https://ecommercebackend-o0yl.onrender.com/product`
      );
      setProducts(res.data);
      setLoading(false);
    } catch {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://ecommercebackend-o0yl.onrender.com/product/${id}`,
        {
          headers: {
            token: user.currentUser.token,
          },
        }
      );
      console.log(res);
      getProducts();
    } catch {}
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <ProductDiv>
            <ProductImg src={params.row.image_link} alt="" />
            {params.row.name}
          </ProductDiv>
        );
      },
    },
    {
      field: "price",
      headerName: "Price in $",
      width: 150,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/adminproductedit/" + params.row._id}>
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
                <h3>Product Details</h3>
              </div>
              <AddContainer>
                <Link to="/adminproductadd">
                  <Button className="bg-primary">Add New </Button>
                </Link>
              </AddContainer>
            </Header>
            <GridContainer>
              <DataGrid
                rows={products}
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
