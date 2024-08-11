/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import AdminNav from "../AdminComponents/AdminNav";
import Footer from "../components/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as YUP from "yup";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { large, small } from "../responsive";
// import {DataGrid} from "@mui/x-data-grid"

const Maincontainer = styled.div`
  background-color: whitesmoke;
`;
const Container = styled.div`
  margin: 2rem 8rem;
  ${large({ margin: "2rem 1rem" })}
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled(Field)`
  height: 2rem;
  margin: 1rem 0;
  width: 25rem;
  text-align: center;
  overflow: hidden;
  ${small({ width: "18rem" })}
`;

const TextArea = styled(Field)`
  height: 4rem;
  margin: 1rem 0;
  width: 30rem;
  text-align: center;
  ${small({ width: "18rem" })}
`;

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  padding: 8px;
  margin-bottom: 1rem;
  width: 12rem;
`;
const Error = styled.div`
  color: red;
  font-size: 0.8rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25283d;
`;
const Label = styled.label`
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1.3rem;
`;

export default function AdminProductEdit() {
  const [product, setProduct] = useState({});
  const [info, setInfo] = useState("");
  const params = useParams();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const signInSchema = YUP.object().shape({
    name: YUP.string().required("Please Enter Product Name"),
    brand: YUP.string().required("Please Enter Brand"),
    price: YUP.number().required("Please Enter Price"),
    image_link: YUP.string().required("Please Enter Image URL"),
    description: YUP.string().required("Please Enter description"),
    rating: YUP.number().required("Please Enter rating").min(1).max(5),
    product_type: YUP.string().required("Please Enter Product type"),
    product_colors: YUP.array(),
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://ecommercebackend-o0yl.onrender.com/product/find/${params.id}`
        );
        setProduct(res.data);
        setLoading(false);
      } catch {}
    };
    getProduct();
  }, []);

  if (!product.name) return [];
  let colors;
  if (product.product_colors.length > 1) {
    colors = product.product_colors.map((a) => {
      return a.hex_value;
    });
    console.log(product.product_colors, colors);
  }
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
            <FormContainer>
              <div>
                {" "}
                <h3 style={{ color: "white" }}>Edit Product</h3>
              </div>
              <div>
                {" "}
                <Formik
                  initialValues={{
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    image_link: product.image_link,
                    description: product.description,
                    rating: product.rating,
                    product_type: product.product_type,
                    product_colors: colors || "",
                  }}
                  validationSchema={signInSchema}
                  onSubmit={async (values, { resetForm }) => {
                    console.log(values);
                    try {
                      const res = await axios.put(
                        `https://ecommercebackend-o0yl.onrender.com/product/${params.id}`,
                        values,
                        {
                          headers: {
                            token: user.currentUser.token,
                          },
                        }
                      );

                      console.log(res);
                      setInfo("Product Updated Successfully");
                    } catch (err) {
                      console.log(err);
                      setInfo("oops something went wrong!");
                    }
                  }}
                >
                  {() => {
                    return (
                      <Form>
                        {console.log(product.name)}
                        <InputDiv className="form-group ">
                          <Label> Product Name</Label>
                          <Input
                            type="text"
                            placeholder="Product Name"
                            className="form-control"
                            id="name"
                            name="name"
                          />
                          <Error>
                            <ErrorMessage name="name" />
                          </Error>
                        </InputDiv>
                        <InputDiv className="form-group">
                          <Label> Product Brand</Label>
                          <Input
                            type="text"
                            placeholder="Brand"
                            className="form-control"
                            id="brand"
                            name="brand"
                          />
                          <Error>
                            <ErrorMessage name="brand" />
                          </Error>
                        </InputDiv>
                        <InputDiv className="form-group">
                          <Label> Product Price</Label>
                          <Input
                            type="number"
                            placeholder="Price"
                            className="form-control"
                            id="price"
                            name="price"
                          />
                          <Error>
                            <ErrorMessage name="price" />
                          </Error>
                        </InputDiv>
                        <InputDiv className="form-group">
                          <Label>Image URL</Label>
                          <Input
                            type="text"
                            placeholder="Image Url"
                            className="form-control"
                            id="image_link"
                            name="image_link"
                          />
                          <Error>
                            <ErrorMessage name="image_link" />
                          </Error>
                        </InputDiv>
                        <InputDiv className="form-group">
                          <Label>Description</Label>
                          <TextArea
                            height="3rem"
                            syle={{ height: "3rem" }}
                            type="text"
                            placeholder="Product Description"
                            className="form-control"
                            id="description"
                            name="description"
                          />
                          <Error>
                            <ErrorMessage name="description" />
                          </Error>
                        </InputDiv>
                        <InputDiv className="form-group">
                          <Label> Product Rating</Label>
                          <Input
                            type="number"
                            placeholder="Rating"
                            className="form-control"
                            id="rating"
                            name="rating"
                            max={5}
                            min={1}
                          />
                          <Error>
                            <ErrorMessage name="rating" />
                          </Error>
                        </InputDiv>
                        <InputDiv className="form-group">
                          <Label>Product Type</Label>
                          <Input
                            type="text"
                            placeholder="Product Type"
                            className="form-control"
                            id="product_type"
                            name="product_type"
                          />
                          <Error>
                            <ErrorMessage name="product_type" />
                          </Error>
                        </InputDiv>
                        <InputDiv className="form-group">
                          <Label>Product Colors</Label>
                          <Input
                            type="text"
                            placeholder="Enter color in HEX code"
                            className="form-control"
                            id="product_colors"
                            name="product_colors"
                          />
                          <Error>
                            <ErrorMessage name="product_colors" />
                          </Error>
                        </InputDiv>
                        <div className="text-center">
                          <Button type="submit">Update</Button>
                        </div>
                        <div>
                          <p style={{ color: "orange" }}>{info}</p>
                        </div>
                        <div>
                          <Link to="/adminProductList">
                            {" "}
                            <Button>View List</Button>
                          </Link>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </FormContainer>
          </Container>
        )}
      </Maincontainer>
      {!loading && <Footer />}
    </>
  );
}
