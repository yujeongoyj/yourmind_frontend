import LoginImg from "../img/login.png"
import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Start from "./Start";

let member = {
    name : "minify",
    age : 15,
    now : "난 지금 배고프다."
}

let dataday = {
    one : "2022-05-07",
    two : "2022-05-04",
    three : "2022-05-03"
}

let chart =  {
    labels: ['4월 2일', '4월 5일', '4월 14일', '5월 3일', '5월 8일'],
    datasets: [
      {
        label: '공포',
        // data: [2, 12, 12, 12, 60],
        borderWidth: 1
      },
      {
        label: '분노',
        data: [12, 19, 3, 5, 9],
        borderWidth: 1
      },{
        label: '슬픔',
        data: [8, 14, 31, 23, 12],
        borderWidth: 1
      },{
        label: '혐오',
        data: [6, 23, 15, 28, 32],
        borderWidth: 1
      },{
        label: '행복',
        data: [2, 12, 12, 12, 2],
        borderWidth: 1
      },
      {
        label: '놀람',
        data: [12, 19, 3, 5, 9],
        borderWidth: 1
      },{
        label: '중립',
        data: [8, 14, 31, 23, 12],
        borderWidth: 1
      },
    ],
  };
  
const memberJson = JSON.stringify(member)
const parsedData1 = JSON.parse(memberJson)
const datadayJson = JSON.stringify(dataday)
const parsedData2 = JSON.parse(datadayJson)

const Mainpage = () => {
    return(
        <div>
          <NavLink to = "/Login">
            <img src = {LoginImg} width="50px"></img><br/>
          </NavLink>
          이름 : {parsedData1.name}<br/>
          나이 : {parsedData1.age}<br/>
          상태 메시지 : {parsedData1.now}<br/><br/>
          상담 기록 : <br/>
          <NavLink to = "/detail">
            {parsedData2.one}<br/>
          </NavLink>
          <NavLink to = "/detail">
            {parsedData2.two}<br/>
          </NavLink>
          <NavLink to = "/detail">
            {parsedData2.three}<br/>
          </NavLink>
          <Bar type="Bar" data={chart}/>
          <Routes>
            <Route path = "/detail" element = {<Detail/>}></Route>
            <Route path = "/Login" element = {<Start/>}></Route>
          </Routes>
        </div>
    )
}

export default Mainpage;