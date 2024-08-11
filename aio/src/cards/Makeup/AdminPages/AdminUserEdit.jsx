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

export default function AdminUserEdit() {
  const [user, setUser] = useState({});
  const [info, setInfo] = useState("");
  const params = useParams();
  const Puser = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const signInSchema = YUP.object().shape({
    username: YUP.string()
      .required("Please Enter UserName")
      .min(6, "Username length should be more than 5"),
    email: YUP.string().required("Please Enter Email").email(),
  });

  const getUser = async () => {
    try {
      const res = await axios.get(
        `https://ecommercebackend-o0yl.onrender.com/users/find/${params.id}`,
        {
          headers: {
            token: Puser.currentUser.token,
          },
        }
      );
      console.log(res.data);
      setUser(res.data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  if (!user.username) return [];
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
                <h3 style={{ color: "white" }}>Edit User</h3>
              </div>
              <div>
                {" "}
                <Formik
                  initialValues={{
                    username: user.username,
                    email: user.email,
                  }}
                  validationSchema={signInSchema}
                  onSubmit={async (values) => {
                    console.log(values);
                    try {
                      const res = await axios.put(
                        `https://ecommercebackend-o0yl.onrender.com/users/${params.id}`,
                        values,
                        {
                          headers: {
                            token: Puser.currentUser.token,
                          },
                        }
                      );

                      console.log(res);
                      setInfo("User Updated Successfully");
                    } catch (err) {
                      console.log(err);
                      setInfo("oops something went wrong!");
                    }
                  }}
                >
                  {(handleSubmit) => {
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
                        <div className="text-center">
                          <Button type="submit">Update</Button>
                        </div>
                        <div>
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
        )}
      </Maincontainer>
      {!loading && <Footer />}
    </>
  );
}
