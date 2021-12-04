import "./register.css"
import { Cancel, Room } from "@material-ui/icons"
import { useState, useRef } from "react"
import { useMutation } from "@apollo/client";

import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Register({setShowRegister}) {
  const [addUser] = useMutation(ADD_USER);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value
    };

    try {
      const { data } = await addUser({ variables: { ...newUser } });
      Auth.login(data.addUser.token);
      setError(false);
      setSuccess(true);
    } catch(err) {
      setError(true);
    }

  }

  return (
    <div className="registerContainer">
      <div className="logo">
        <Room />
        Fara
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={nameRef}/>
        <input type="email" placeholder="email" ref={emailRef}/>
        <input type="password" placeholder="password" ref={passwordRef}/>
        <button className="registerBtn">Register</button>
        {success &&
        <span className="success">Successful! You may login now!</span>
        } {error &&
        <span className="failure">Error. Something went wrong!</span>
        }
      </form>
      <Cancel className="registerCancel" onClick={()=>setShowRegister(false)} />
    </div>
  )
}