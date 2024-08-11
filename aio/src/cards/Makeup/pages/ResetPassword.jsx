import React from "react";
import styled from "styled-components";
import background from "../assets/login/login.jfif";
import * as YUP from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { large } from "../responsive";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
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

export default function ResetPassword() {
  const [info, setInfo] = React.useState("");
  const param = useParams();
  const id = param.id;
  const token = param.token;

  const signInSchema = YUP.object().shape({
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
          <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Reset Password
          </div>
          <hr />
          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signInSchema}
            onSubmit={async (values) => {
              console.log(values);

              try {
                const response = await axios.post(
                  `https://ecommercebackend-o0yl.onrender.com/auth/verifyAndUpdatePassword/${id}/${token}`,
                  {
                    password: values.password,
                  }
                );
                console.log(response);

                setInfo("Please log in again with the new password");
              } catch (err) {
                setInfo("Something went wrong");
                console.log(err);
              }
            }}
          >
            {() => {
              return (
                <Form>
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
                  <div className="text-center">
                    <Button type="submit">Change Password</Button>
                  </div>
                  <p className="text-dark">{info}</p>
                  <div className="text-start">
                    <Link to="/login">
                      {" "}
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
