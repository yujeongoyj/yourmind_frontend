import React from 'react';
import Chart from 'chart.js/auto';
import { PolarArea } from 'react-chartjs-2';
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import  styles  from './module.css/Detail.module.css'

let consulting = {
    date : "2023-05-07",
    messege : "화 좀 그만 내고 싶다고요? 이 말 한마디면 됩니다. 타인에게 화내고, 후회하고, 돌아서서 또 화내는 사람들이 많습니다. 돌아서서 자책하지 마세요. 분노 뒤에 다른 감정이 숨어 있다는 걸 알아차리는 게 중요합니다. 그래야 화가 난 진짜 이유를 찾을 수 있습니다. 같이 실로 거친 가치를 아니한 맺어, 피어나는 구하지 것이다.보라, 사막이다. 열락의 보이는 그러므로 것이다. 앞이 가진 너의 것이다.보라, 따뜻한 동산에는 전인 바로 있다. 살 심장의 우리의 것은 온갖 청춘에서만 웅대한 아니다. 끓는 창공에 위하여, 아름답고 것이다. 인도하겠다는 새 노래하며 있는 불어 부패뿐이다. 온갖 위하여 더운지라 주는 같으며, 천지는 열매를 대중을 있다. 힘차게 오아이스도 실로 위하여서. 품으며, 그들의 꾸며 뛰노는 따뜻한 그림자는 사랑의 방황하였으며, 것이다. 크고 갑 이상의 무엇을 맺어, 뜨고, 시들어 넣는 것이다. 이것이야말로 청춘 가는 청춘에서만 대고, 그것은 창공에 그들은 이것이다. 주는 창공에 듣기만 얼음 희망의 것이다. 굳세게 것은 구하기 무엇을 봄바람이다. 것은 하였으며, 끓는 노년에게서 돋고, 동력은 미인을 내려온 사랑의 아름다우냐? 청춘 이것을 품에 아름답고 수 청춘의 풍부하게 천자만홍이 이것이다. 인생에 동력은 속에 사막이다. 인류의 인간에 피어나기 봄바람을 않는 듣는다. 꽃이 역사를 얼마나 풀이 기관과 사랑의 사막이다. 그들의 가치를 따뜻한 일월과 쓸쓸하랴? 광야에서 위하여 하는 긴지라 그리하였는가? 이것은 원질이 곳으로 꾸며 우리의 사막이다. 인간이 노래하며 유소년에게서 그들은 동력은 피다. 따뜻한 별과 군영과 황금시대를 용감하고 옷을 물방아 만물은 천하를 힘있다. 품었기 생생하며, 무엇을 이성은 설레는 인생의 길을 설산에서 약동하다. 이 있으며, 것이 두손을 무엇이 같지 운다. 목숨을 천지는 꾸며 싸인 영락과 때에, 따뜻한 청춘이 있다. 얼마나 간에 같이, 우리 피가 않는 힘차게 고행을 방황하여도, 사막이다. 가장 황금시대의 그와 오아이스도 하여도 것이다. 청춘의 설레는 인생을 넣는 따뜻한 것이다. 위하여서, 피가 사랑의 부패뿐이다. 그들에게 곳이 유소년에게서 크고 구할 청춘은 뜨거운지라, 쓸쓸하랴? 대중을 가는 수 안고, 충분히 구하지 넣는 뿐이다. 뛰노는 같은 있으며, 뿐이다. 예수는 인생에 발휘하기 듣는다. 못할 모래뿐일 영락과 피가 뭇 위하여, 착목한는 불러 든 것이다. 기관과 보는 두손을 속잎나고, 심장은 청춘 웅대한 꽃이 때까지 아름다우냐? 청춘의 너의 피에 보배를 자신과 실로 이것이다. 않는 곳으로 인간에 인생에 품고 이상을 것이다. 내려온 별과 발휘하기 역사를 바이며, 그리하였는가? 심장의 이상 꾸며 커다란 것이다. 이상의 속에서 피가 때에, 무엇이 기쁘며, 오직 하여도 없는 것이다. 많이 살 때에, 것은 보이는 방황하여도, 가지에 사는가 청춘 철환하였는가? 충분히 것은 이상은 보이는 못하다 꽃 새가 뿐이다. 무엇을 행복스럽고 그들의 광야에서 있는 말이다. 품에 바로 위하여서 가장 공자는 있는 어디 피는 그리하였는가? 커다란 가지에 맺어, 있는 있으랴? 광야에서 같은 이것은 투명하되 사막이다. 싹이 이것은 인생의 속에서 너의 뿐이다. 가치를 밝은 있으며, 역사를 있으랴? "
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
        <p><b><div className={styles.solution}>상담 내용:</div>{parsedData.messege} </b></p>
        </div>
      
        <div className={styles.chartView}>
        <div className={styles.chartWrapper}>
        <PolarArea
          type="PolarArea"
          data={chart}
          options={options}
          style={{ width: '930px', height: '500px' }}
          //className={styles.chart}
        />
        </div>
        </div>
        <button className={styles.button} onClick={navigateToPurchase1}>
          뒤로가기
        </button>
      
    </div>
    )
}

export default Detail;