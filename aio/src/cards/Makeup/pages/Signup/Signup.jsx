import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import './Signup.css'
import { AuthContext } from '../../AuthProvider'
import { StateContext } from '../../Context'
import { Toast } from '../../components/index'

const Signup = () => {
  const {  setToken,  setUser } = useContext(AuthContext)
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { state, dispatch } = useContext(StateContext)
  const [msg, setMsg] = useState('')
  let navigate = useNavigate();
  const signupHandler = async (e) => {
    const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = email.match(mailformat);
    e.preventDefault()
    if (isEmailValid && firstName && lastName && password) {
      try {
        const {
          data: { createdUser, encodedToken },
          status,
        } = await axios.post('/api/auth/signup', {
          firstName,
          lastName,
          email,
          password
        });
        if (status === 201) {
          localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: createdUser }));
          setUser(createdUser)
          navigate('/productlistingpage')
        }
      } catch (error) {
        console.log("Error in signup user", error);
      }
    } else {
      dispatch({ type: 'SET_SHOW_TOAST', payload: !state.showtoast })
      setMsg("Please enter valid details")
    }
  };
  return (
    <>
      {state.showtoast === true && <Toast msg={msg} />}
      <form class="form-container">
        <h5 class="sub-heading">Signup</h5>
        <div class="form-group flex-vt">
          <label for="name-input" class="form-label form-field-required">Name</label>
          <input type="text" class="form-control" placeholder="enter name" required onChange={(e) => setfirstName(e.target.value)} />
        </div>
        <div class="form-group flex-vt">
          <label for="name-input" class="form-label form-field-required">Surname</label>
          <input type="text" class="form-control" placeholder="enter name" required onChange={(e) => setlastName(e.target.value)} />
        </div>
        <div class="form-group flex-vt">
          <label for="email-input" class="form-label form-field-required">Email</label>
          <input type="email" id="email-input" class="form-control" placeholder="abc@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
          <small class="form-text text-mutated">We will never share your email with anyone.</small>
        </div>
        <div class="form-group flex-vt">
          <label for="password-input" class="form-label form-field-required">Password</label>
          <input type="password" id="password-input" class="form-control" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button class="btn btn-secondary" onClick={signupHandler}>Submit</button>
        <Link to="/signin" className="links text-link">Already have an account?</Link>
      </form>
    </>
  )
}
export { Signup }