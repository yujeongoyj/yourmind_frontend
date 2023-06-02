import logo from './logo.svg';
import './App.css';
import Main from "./Main";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Login from './Login';
import Join from './Join';
import JoinOk from './JoinOk';
import Detail from './Detail';
import Character from './character';

function App() {
  return (
    <>      
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Main" element={<Main />}></Route>
      <Route path='/Join' element={<Join/>}></Route>
      <Route path='/JoinOk' element={<JoinOk/>}></Route>
      <Route path='/Detail' element={<Detail/>}></Route>
      <Route path='/Character' element={<Character/>}></Route>
    </Routes>
    </>
  );
}

export default App;
