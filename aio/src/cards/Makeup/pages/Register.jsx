import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/login/login.jfif";
import * as YUP from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { large } from "../responsive";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

const Container = styled.div`
  background-image: url(${background});
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  background-position: 55% 30%;
  ${large({ display: "flex", justifyContent: "center", alignItems: "center" })}
`;
const OuterContainer = styled.div`
  height: 25rem;
  width: 25rem;
  background-color: transparent;
  position: relative;
  top: 13%;
  left: 55%;
  box-sizing: border-box;
  ${large({ position: "relative", top: "0", left: "0" })}
`;
const Brand = styled.div`
  text-align: center;
  font-size: 2rem;
`;
const FormContainer = styled.div`
  background-color: white;
  padding: 14px;
  margin-top: 1rem;
`;
const Input = styled(Field)`
  height: 2rem;
  margin: 1rem 0;
`;
// const Forget=styled.div`
// text-align: end;
// `

const Para = styled.p`
  cursor: pointer;
  display: inline-block;
  color: #e46acf;
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
  margin: 0;
`;
export default function Register() {
  const [info, setInfo] = useState("");
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
    <Container>
      <OuterContainer>
        <Brand>MakeYouUp</Brand>
        <FormContainer>
          <div style={{ textAlign: "center", fontSize: "1.5rem" }}>Sign Up</div>
          <hr />
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signInSchema}
            onSubmit={async (values, { resetForm }) => {
              setLoading(true);
              console.log(values);
              try {
                const { confirmPassword, ...other } = values;
                const res = await axios.post(
                  "https://ecommercebackend-o0yl.onrender.com/auth/register",
                  other
                );
                console.log(res);
                setInfo(
                  "User created Successfully,Please Login with your Email/Password "
                );
                setLoading(false);
              } catch (err) {
                console.log(err);
                setInfo("Email already exists");
                setLoading(false);
              }
            }}
          >
            {() => {
              return (
                <Form>
                  <div className="form-group">
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
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                    />
                    <Error>
                      <ErrorMessage name="confirmPassword" />
                    </Error>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                    <Button type="submit">Sign Up</Button>
                  </div>
                  <div>
                    <p style={{ color: "orange" }}>{info}</p>
                  </div>
                  <div className="text-start">
                    <Link to="/login">
                      <Para>Back to login</Para>
                    </Link>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </FormContainer>
      </OuterContainer>
    </Container>
  );
}
