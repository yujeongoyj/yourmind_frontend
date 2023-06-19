import { useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import styles from './module.css/Login.module.css';

function Login() {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [savedLoginId, setSavedLoginId] = useState("");
  const [savedLoginPassword, setSavedLoginPassword] = useState("");

  const navigate = useNavigate();
  const navigateToPurchase1 = () => {
    navigate("/Main");
  };
  const navigateToPurchase2 = () => {
    navigate("/Join");
  };

  return (
    <div className={styles.start}>
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
        <button className={styles.loginBox}
          onClick={() => {
            window.localStorage.setItem("loginId", loginId);
            window.localStorage.setItem("loginPassword", loginPassword);

            setSavedLoginId(window.localStorage.getItem("loginId"));
            setSavedLoginPassword(window.localStorage.getItem("loginPassword"));
          }}
        >
        <button className={styles.loginId} onClick={navigateToPurchase1}>로그인</button>
        <button className={styles.loginPw} onClick={navigateToPurchase2}>회원가입</button>
         </button>
        
      </div>
    </div>
  );
}

export default Login;
