import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Login from "./Login";

function JoinOk() {
  const userName = window.localStorage.getItem("JoinName");
  return (
    <div>
      {userName}님 회원가입을 축하드립니다.
      <NavLink to="/">로그인 하러 가기</NavLink>
    </div>
  );
}
export default JoinOk;
