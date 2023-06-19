import React from 'react';
import Chart from 'chart.js/auto';
import { PolarArea } from 'react-chartjs-2';
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import  styles  from './module.css/Detail.module.css'

let consulting = {
    date : "2023-06-04",
    messege : "이 선언의 어떠한 규정도 어떤 국가, 집단 또는 개인에게 이 선언에 규정된 어떠한 권리와 자유를 파괴하기 위한 활동에 가담하거나 또는 행위를 할 수 있는 권리가 있는 것으로 해석되어서는 아니된다. 모든 인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를 인정하는 것이 세계의 자유, 정의 및 평화의 기초이며, 인권에 대한 무시와 경멸이 인류의 양심을 격분시키는 만행을 초래하였으며, 인간이 언론과 신앙의 자유, 그리고 공포와 결핍으로부터의 자유를 누릴 수 있는 세계의 도래가 모든 사람들의 지고한 열망으로서 천명되어 왔으며, 인간이 폭정과 억압에 대항하는 마지막 수단으로서 반란을 일으키도록 강요받지 않으려면, 법에 의한 통치에 의하여 인권이 보호되어야 하는 것이 필수적이며, 국가간에 우호관계의 발전을 증진하는 것이 필수적이며, 국제연합의 모든 사람들은 그 헌장에서 기본적 인권, 인간의 존엄과 가치, 그리고 남녀의 동등한 권리에 대한 신념을 재확인하였으며, 보다 폭넓은 자유속에서 사회적 진보와 보다 나은 생활수준을 증진하기로 다짐하였고, 회원국들은 국제연합과 협력하여 인권과 기본적 자유의 보편적 존중과 준수를 증진할 것을 스스로 서약하였으며 "
}

let chart =  {
    labels: ['공포', '분노', '슬픔', '혐오', '행복', '놀람', '중립'],
  datasets: [
    {
      data: [2, 12, 8, 6, 2, 12, 8],
      borderWidth: 1,
    },
],
}
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
function Detail  ()  {
const user1 = window.localStorage.getItem("JoinName")
const user2 = window.localStorage.getItem("User2Id")
const consultingJson = JSON.stringify(consulting)
const parsedData = JSON.parse(consultingJson)
const navigate = useNavigate();
  const navigateToPurchase1 = () => {
    navigate("/Main");
  };

    return(
      <div className={styles.container}>
      <h1 className={styles.header}>상담 정보</h1>
      <div className={styles.content}>
        <p>내담자: {user1}</p>
        <p>상담사: {user2}</p>
        <p>날짜: {parsedData.date}</p>
        <p>상담 내용: {parsedData.messege}</p>
        <PolarArea className= {styles.chartView}
          type="PolarArea"
          data={chart}
          options={options}
          style={{ position: 'center',height: '400px' }}
        />
        <button className={styles.button} onClick={navigateToPurchase1}>
          뒤로가기
        </button>
      </div>
    </div>
    )
}

export default Detail;