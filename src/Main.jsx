import { useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function Main() {
  const userName = window.localStorage.getItem("JoinName");
  const userAge = window.localStorage.getItem("JoinAge");
  const userMessege = window.localStorage.getItem("JoinMessege");
const navigate = useNavigate();
  const navigateToPurchase1 = () => {
    navigate("/Detail");
  };
  const navigateToPurchase2 = () => {
    navigate("/");
  };
  let dataday = {
    one: "2022-05-07",
    two: "2022-05-04",
    three: "2022-05-03",
  };

  let chart = {
    labels: ["4월 2일", "4월 5일", "4월 14일", "5월 3일", "5월 8일"],
    datasets: [
      {
        label: "공포",
        data: [2, 12, 12, 12, 60],
        borderWidth: 1,
      },
      {
        label: "분노",
        data: [12, 19, 3, 5, 9],
        borderWidth: 1,
      },
      {
        label: "슬픔",
        data: [8, 14, 31, 23, 12],
        borderWidth: 1,
      },
      {
        label: "혐오",
        data: [6, 23, 15, 28, 32],
        borderWidth: 1,
      },
      {
        label: "행복",
        data: [2, 12, 12, 12, 2],
        borderWidth: 1,
      },
      {
        label: "놀람",
        data: [12, 19, 3, 5, 9],
        borderWidth: 1,
      },
      {
        label: "중립",
        data: [8, 14, 31, 23, 12],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    // responsive 속성을 false로 지정한다.
    responsive: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const datadayJson = JSON.stringify(dataday);
  const parsedData2 = JSON.parse(datadayJson);

  return (
    <div>
      이름 : {userName}
      <br />
      나이 : {userAge}
      <br />
      상테 메시지 : {userMessege}
      <br />
      상담 기록 : <br />
      <button onClick={navigateToPurchase1}>{parsedData2.one}</button>
      <br />
      {parsedData2.two}
      <br />
      {parsedData2.three}<br/>
      <Bar type="Bar" data={chart}  options={options} style={{ position: "relative", height: "200px" }}/>
      <button
          onClick={() => {
            window.localStorage.removeItem("loginId");
            window.localStorage.removeItem("loginPassword");
          }}
        >
          <button onClick={navigateToPurchase2}>로그아웃</button>
        </button>
    </div>
  );
}
export default Main;
