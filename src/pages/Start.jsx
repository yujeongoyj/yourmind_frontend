// import '../css/Login.css';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Join from "./Join";
import Mainpage from "./Mainpage";

const Start = () => {
    return(
        <div>
            {/* <div id="LogInImg">
                <img id="LogInImg" src={그림1}/>
            </div> */}
            <form id="LogInput">
                아이디 : <input id="Id" type="text" placeholder="이메일을 입력하세요."/> <br/>
                비밀번호 : <input id="Password" type="password" placeholder="비밀번호를 입력하세요."/><br/>
                <NavLink to = "/Mainpage">
                    <button id="Button" type="submit">로그인</button>
                </NavLink>
                <br/>
                <button id="FindId" type="submit">아이디 찾기</button>
                <button id="FindPassword" type="submit">비밀번호 찾기</button>
                <NavLink to = "/join">
                    <button id="Member" type="submit">회원가입 하기</button>
                </NavLink>
            </form>
            <Routes>
                <Route path="/join" element = {<Join/>}></Route>
                <Route path="/Mainpage" element = {<Mainpage/>}></Route>
            </Routes>

        </div>
    )
}

export default Start;
