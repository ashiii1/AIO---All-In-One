/* eslint-disable no-unused-vars */
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
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
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
  width: 30rem;
  text-align: center;
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
const Para = styled.p`
  cursor: pointer;
  display: inline-block;
  color: #e46acf;
`;
const ParaContainer = styled.div`
  background-color: white;
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

export default function AdminProductAdd() {
  console.log("in");
  const [info, setInfo] = useState("");
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const signInSchema = YUP.object().shape({
    name: YUP.string().required("Please Enter Product Name"),
    brand: YUP.string().required("Please Enter Brand"),
    price: YUP.number().required("Please Enter Price"),
    description: YUP.string().required("Please Enter description"),
    rating: YUP.number().required("Please Enter rating").min(1).max(5),
    product_type: YUP.string().required("Please Enter Product type"),
    product_colors: YUP.string(),
  });

  const handleImage = (product) => {
    setInfo("");
    console.log(product);
    setUpload(true);
    setLoading(true);
    console.log();
    const storage = getStorage(app);
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setUpload(true);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            setUpload(false);
            setLink(downloadURL);
            console.log(typeof product.product_colors);
            let colors = product.product_colors.split(",");
            const Product = {
              ...product,
              image_link: downloadURL,
              product_colors: colors,
            };
            console.log(Product);
            const res = axios.post(
              `https://ecommercebackend-o0yl.onrender.com/product/`,
              Product,
              {
                headers: {
                  token: user.currentUser.token,
                },
              }
            );
            res.then((output) => {
              console.log(output);
              if (output.status === 201)
                setInfo("Product Created Successfully");
              setLoading(false);
            });
          })
          .catch((err) => {
            console.log(err);
            setInfo("Oops Something went wrong");
            setLoading(false);
          });
      }
    );
  };
  return (
    <>
      <Maincontainer>
        <AdminNav />
        <Container>
          <FormContainer>
            <div>
              {" "}
              <h3 style={{ color: "white" }}>Add Product</h3>
            </div>
            <div>
              {" "}
              <Formik
                initialValues={{
                  name: "",
                  brand: "",
                  price: 0,
                  description: "",
                  rating: 0,
                  product_type: "",
                  product_colors: "",
                }}
                validationSchema={signInSchema}
                onSubmit={async (values, { resetForm }) => {
                  console.log(values, file);
                  handleImage(values);
                  resetForm();
                }}
              >
                {() => {
                  return (
                    <Form>
                      <InputDiv className="form-group">
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
                        <Label> Upload Image </Label>
                        <input
                          style={{ height: "2rem" }}
                          type="file"
                          className="form-control"
                          id="image_link"
                          name="image_link"
                          onChange={(e) => {
                            setFile(e.target.files[0]);
                          }}
                        />
                        {upload && (
                          <>
                            <p
                              style={{
                                color: "white",
                                display: "inline-block",
                              }}
                            >
                              Your image is uploading
                            </p>
                            <Loader
                              type="Grid"
                              color="#adb4ec"
                              height={30}
                              width={30}
                            />
                          </>
                        )}
                        {/* <Error><ErrorMessage name="image_link"/></Error> */}
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
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {loading && (
                          <>
                            <Loader
                              type="Bars"
                              color="#adb4ec"
                              height={30}
                              width={30}
                            />
                          </>
                        )}
                      </div>
                      <div className="text-center">
                        <Button type="submit">Add</Button>
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
      </Maincontainer>
      <Footer />
    </>
  );
}
