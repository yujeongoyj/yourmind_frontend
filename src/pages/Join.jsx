// import '../css/Login.css';
// // import {Route} from "react-router-dom";

const Join = () => {
    return(
        <div>
            {/* <div id="LogInImg">
                <img id="LogInImg" src={그림1}/>
            </div> */}
            <form id="LogInput">
                이름 : <input id="Name" type="text" placeholder="이름을 입력하세요."/> <br/>
                나이 : <input id="Age" type="number"/><br/>
                이메일 : <input id="Id" type="text" placeholder="이메일을 입력하세요."/> <br/>
                비밀번호 : <input id="Password" type="password" placeholder="비밀번호를 입력하세요."/><br/>
                비밀번호 확인 : <input id="Password" type="password" placeholder="비밀번호를 입력하세요."/><br/>
                상태 메세지 : <input id="Messege" type="text" placeholder=""/><br/>
            </form>
            <button id="NewMember" type="submit">가입하기</button>
        </div>
    )
}

export default Join;