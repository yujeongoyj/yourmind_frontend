import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import JoinOk from "./JoinOk";
import Styles from './module.css/Join.module.css';

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
    <div className={Styles.detail}>
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
          <NavLink to="/JoinOk" >회원가입</NavLink>
        </button>
      </div>
      <div>{JSON.stringify(localStorage)}</div>
      </div>
    </>
  );

// function Join() {
//   const [joinData, setJoinData] = useState({
//     JoinName: "",
//     JoinAge: "",
//     JoinId: "",
//     JoinPassword: "",
//     JoinMessege: "",
//   });

//   const [savedJoinData, setSavedJoinData] = useState({
//     savedJoinName: "",
//     savedJoinAge: "",
//     savedJoinId: "",
//     savedJoinPassword: "",
//     savedJoinMessege: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setJoinData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSavedJoinData({ ...joinData });
//     setJoinData({
//       JoinName: "",
//       JoinAge: "",
//       JoinId: "",
//       JoinPassword: "",
//       JoinMessege: "",
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="JoinName"
//             value={joinData.JoinName}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Age:
//           <input
//             type="text"
//             name="JoinAge"
//             value={joinData.JoinAge}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           ID:
//           <input
//             type="text"
//             name="JoinId"
//             value={joinData.JoinId}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="JoinPassword"
//             value={joinData.JoinPassword}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Message:
//           <textarea
//             name="JoinMessege"
//             value={joinData.JoinMessege}
//             onChange={handleChange}
//           ></textarea>
//         </label>
//         <button type="submit">Join</button>
//       </form>
//       <div>
//         <h3>Saved Join Data:</h3>
//         <p>Name: {savedJoinData.savedJoinName}</p>
//         <p>Age: {savedJoinData.savedJoinAge}</p>
//         <p>ID: {savedJoinData.savedJoinId}</p>
//         <p>Password: {savedJoinData.savedJoinPassword}</p>
//         <p>Message: {savedJoinData.savedJoinMessege}</p>
//       </div>
//     </div>
//   );
// }
}


export default Join;
