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
import { large, small } from "../responsive";

const Maincontainer = styled.div`
  background-color: whitesmoke;
`;
const Container = styled.div`
  margin: 2rem 8rem;
  ${large({ margin: "2rem 1rem" })}
`;
const Input = styled(Field)`
  height: 2rem;
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

export default function AdminUserAdd() {
  const [info, setInfo] = useState("");

  const Puser = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const signInSchema = YUP.object().shape({
    username: YUP.string()
      .required("Please Enter UserName")
      .min(6, "Username length should be more than 5"),
    email: YUP.string().required("Please Enter Email").email(),
    password: YUP.string()
      .required("Please Enter Password")
      .min(6, "Password length should be more than 5"),
    confirmPassword: YUP.string()
      .required()
      .oneOf([YUP.ref("password"), null], "Password Should Match"),
  });

  return (
    <>
      <Maincontainer>
        <AdminNav />
        {/* {loading ?  
                    <div className="d-flex justify-content-center m-5">
                    <Loader
                        type="TailSpin"
                        color="#25283D"
                        height={100}
                        width={100}
                        
                    />
                    </div>
                  :   */}
        <Container>
          <FormContainer>
            <div>
              {" "}
              <h3 style={{ color: "white" }}>Add User</h3>
            </div>
            <div>
              {" "}
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={signInSchema}
                onSubmit={async (values, { resetForm }) => {
                  setInfo("");
                  setLoading(true);
                  const { confirmPassword, ...others } = { ...values };
                  try {
                    const res = await axios.post(
                      `https://ecommercebackend-o0yl.onrender.com/auth/register`,
                      others
                    );

                    console.log(res);
                    if (res.status === 201)
                      setInfo("User Created Successfully");
                    else if (res.status === 400) setInfo("User Already Exists");
                    resetForm();
                    setLoading(false);
                  } catch (err) {
                    console.log(err);
                    setInfo("oops something went wrong!");
                    resetForm();
                    setLoading(false);
                  }
                }}
              >
                {() => {
                  return (
                    <Form>
                      <div className="form-group">
                        <Label> UserName</Label>
                        <Input
                          type="text"
                          placeholder="UserName"
                          className="form-control"
                          id="username"
                          name="username"
                        />
                        <Error>
                          <ErrorMessage name="username" />
                        </Error>
                      </div>
                      <div className="form-group">
                        <Label> Email</Label>
                        <Input
                          type="text"
                          placeholder="Email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                        <Error>
                          <ErrorMessage name="email" />
                        </Error>
                      </div>
                      <div className="form-group">
                        <Label> Password</Label>
                        <Input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          id="password"
                          name="password"
                        />
                        <Error>
                          <ErrorMessage name="password" />
                        </Error>
                      </div>
                      <div className="form-group">
                        <Label> Confirm Password</Label>
                        <Input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          id="confirmPassword"
                          name="confirmPassword"
                        />
                        <Error>
                          <ErrorMessage name="confirmPassword" />
                        </Error>
                      </div>
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
                        <Button type="submit">Create</Button>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p style={{ color: "orange" }}>{info}</p>
                      </div>
                      <div>
                        <Link to="/adminUserList">
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
