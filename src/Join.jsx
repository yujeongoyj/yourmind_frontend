import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import JoinOk from "./JoinOk";

function Join() {
  let [JoinName, setJoinName] = useState("");
  let [JoinAge, setJoinAge] = useState("");
  let [JoinId, setJoinId] = useState("");
  let [JoinPassword, setJoinPassword] = useState("");
  let [JoinMessege, setJoinMessege] = useState("");
  let [savedJoinName, setSavedJoinName] = useState("");
  let [savedJoinAge, setSavedJoinAge] = useState("");
  let [savedJoinId, setSavedJoinId] = useState("");
  let [savedJoinPassword, setSavedJoinPassword] = useState("");
  let [savedJoinMessege, setSavedJoinMessege] = useState("");

  return (
    <>
      <div>
        Name :{" "}
        <input
          type="text"
          size={20}
          onChange={(e) => {
            setJoinName(e.target.value);
          }}
        />
      </div>
      <div>
        Age :{" "}
        <input
          type="text"
          size={20}
          onChange={(e) => {
            setJoinAge(e.target.value);
          }}
        />
      </div>
      <div>
        ID :{" "}
        <input
          type="text"
          size={20}
          onChange={(e) => {
            setJoinId(e.target.value);
          }}
        />
      </div>
      <div>
        PW :{" "}
        <input
          type="password"
          size={20}
          onChange={(e) => {
            setJoinPassword(e.target.value);
          }}
        />
      </div>
      <div>
        Messege :{" "}
        <input
          type="text"
          size={20}
          onChange={(e) => {
            setJoinMessege(e.target.value);
          }}
        />
      </div>

      <div>
        <button
          onClick={() => {
            window.localStorage.setItem("JoinName", JoinName);
            window.localStorage.setItem("JoinAge", JoinAge);
            window.localStorage.setItem("JoinId", JoinId);
            window.localStorage.setItem("JoinPassword", JoinPassword);
            window.localStorage.setItem("JoinMessege", JoinMessege);

            setSavedJoinName(window.localStorage.getItem("JoinName"));
            setSavedJoinAge(window.localStorage.getItem("JoinAge"));
            setSavedJoinId(window.localStorage.getItem("JoinId"));
            setSavedJoinPassword(window.localStorage.getItem("JoinPassword"));
            setSavedJoinMessege(window.localStorage.getItem("JoinMessege"));
          }}
        >
          <NavLink to="/JoinOk">회원가입</NavLink>
        </button>
      </div>
      <div>{JSON.stringify(localStorage)}</div>
    </>
  );
}

export default Join;
