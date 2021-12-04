import "./login.css"
import { Cancel, Room } from "@material-ui/icons"
import { useState, useRef } from "react"
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";


export default function Login({setShowLogin, myStorage, setCurrentUser}) {
  const [loginUser] = useMutation(LOGIN_USER);
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username:nameRef.current.value,
      password:passwordRef.current.value
    };

    try {
      const { data } = await loginUser({ variables: { ...user } });
      Auth.login(data.login.token);
      setShowLogin(false)
      setError(false);
    } catch(err) {
      setError(true);
    }

  }

  return (
    <div className="loginContainer">
      <div className="logo">
        <Room />
        Fara
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={nameRef}/>
        <input type="password" placeholder="password" ref={passwordRef}/>
        <button className="loginBtn">Login</button>
        {error &&
        <span className="failure">Error. Something went wrong!</span>
        }
      </form>
      <Cancel className="loginCancel" onClick={()=>setShowLogin(false)} />
    </div>
  )
}