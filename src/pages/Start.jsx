// import '../css/Login.css';
import {Route} from "react-router-dom";

import './Start.css';

const Start = () => {
    return(
        <div id box1>
            {/* <div id="LogInImg">
                <img id="LogInImg" src={그림1}/>
            </div> */}
            <form id="LogInput">
                아이디 : <input id="Id" type="text" placeholder="이메일을 입력하세요."/> <br/>
                비밀번호 : <input id="Password" type="password" placeholder="비밀번호를 입력하세요."/><br/>
                <button id="Button" type="submit">로그인</button>
                <br/>
                <button id="FindId" type="submit">아이디 찾기</button>
                <button id="FindPassword" type="submit">비밀번호 찾기</button>
                <button id="Member" type="submit">회원가입 하기</button>
            </form>

        </div>
    )
}


export default Start;

