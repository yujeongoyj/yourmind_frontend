import { useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Styles from './module.css/Join.module.css';

function Login() {
  let [loginId, setLoginId] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [savedLoginId, setSavedLoginId] = useState("");
  let [savedLoginPassword, setSavedLoginPassword] = useState("");

  const navigate = useNavigate();
  const navigateToPurchase1 = () => {
    navigate("/Main");
  };
  const navigateToPurchase2 = () => {
    navigate("/Join");
  };

  return (
    <div>
      <div>
        ID :{" "}
        <input
          type="text"
          size={20}
          onChange={(e) => {
            setLoginId(e.target.value);
          }}
        />
      </div>
      <div>
        PW :{" "}
        <input
          type="password"
          size={20}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </div>

      <div>
        <button
          onClick={() => {
            window.localStorage.setItem("loginId", loginId);
            window.localStorage.setItem("loginPassword", loginPassword);

            setSavedLoginId(window.localStorage.getItem("loginId"));
            setSavedLoginPassword(window.localStorage.getItem("loginPassword"));
          }}
        >
          <button onClick={navigateToPurchase1}>로그인</button>
        </button>
        
        <button onClick={navigateToPurchase2}>회원가입</button>
      </div>
    </div>
  );
}

export default Login;
