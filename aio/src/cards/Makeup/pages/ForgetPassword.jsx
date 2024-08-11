import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/login/login.jfif";
import * as YUP from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { large } from "../responsive";
import axios from "axios";
import { Link } from "react-router-dom";
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
  top: 23%;
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

export default function ForgetPassword() {
  const [info, setInfo] = React.useState("");
  const [loading, setLoading] = useState(false);

  const signInSchema = YUP.object().shape({
    email: YUP.string().required("Please Enter Email").email(),
  });

  return (
    <Container>
      <OuterContainer>
        <Brand>MakeYouUp</Brand>
        <FormContainer>
          <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Reset Password
          </div>
          <hr />
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={signInSchema}
            onSubmit={async (values) => {
              setLoading(true);
              console.log(values);
              try {
                const response = await axios.post(
                  "https://ecommercebackend-o0yl.onrender.com/auth/resetToken",
                  {
                    email: values.email,
                  }
                );
                console.log(response);
                setInfo("Please check your email for activation link");
                setLoading(false);
              } catch (err) {
                setInfo("Invalid Email/Email already exists");
                console.log(err);
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
                      placeholder="Email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                    <Error>
                      <ErrorMessage name="email" />
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
                    <Button type="submit">Send Link</Button>
                  </div>
                  <p>
                    Note: Please register with own Email account and proceed
                    with Reset Password in order to receive Activation Link{" "}
                  </p>
                  <h3 className="text-warning">{info}</h3>
                  <div className="text-start">
                    <Link to="/login">
                      <Para>Back to Login</Para>
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
