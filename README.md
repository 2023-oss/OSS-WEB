

<h1 align="center">📜OSS-WEB</h1>
<p align="center">
<img src="https://img.shields.io/github/contributors/2023-oss/OSS-WEB">
<img src="https://img.shields.io/github/languages/count/2023-oss/OSS-WEB">
<img alt="GitHub license" src="https://img.shields.io/github/issues/2023-oss/OSS-WEB">
<img alt="GitHub license" src="https://img.shields.io/github/issues-closed/2023-oss/OSS-WEB">
<img src="https://img.shields.io/github/license/2023-oss/OSS-WEB">
</p>
<br/>


[English Document](https://github.com/2023-oss/OSS-WEB/blob/main/EnglishREADME.md)

## 설명
OSS WEB은 블록체인 기반 동의서 제작에서 양식 제작 부분을 담당한다 개발에서 가장 신경썼던 건 **어떻게 사용자가 편하게 동의서 양식을 제작할 수 있는지** 였습니다. 기획 단계에서 DND 오픈소스를 이용해 드래그 기능으로 사용자가 편하게 블록들을 옮기는 게 좋겠다는 의견이 나왔고 그 의견들을 토대로 최종적으로 beautiful-dnd 오픈소스를 사용하게 되었습니다. 
 <br/>
 
## 목적
동의서가 필요한 기관들은 필요한 양식들을 하나하나 찾아봐야 합니다. 또 기관들은 어떻게 책임조항, 안전수칙 등 이러한 것들을 배치할지도 고민해야 합니다. <br/>
이러한 고려사항들을 해결하고 싶었고 그 해결방안으로 **카테고리별로 각 조항들을 담고 있는 블록, 드래그 기능을 이용한 블록배치, 그리고 프리뷰 화면**을 구현해 보다 편리하게 동의서를 제작할 수 있도록 하였습니다. 
 <br/>
 
## 주요 기능


 <p align="center"> <img src="https://github.com/2023-oss/OSS-ISSUER/assets/102888719/6828fb42-856e-4f2a-8ae7-d70669edac10"> </p>
 

 **1.** 드래그 앤 드롭으로 블럭들을 옮기는 기능
 <br/>
 **2.** 블럭들을 클릭하면 한꺼번에 옮기는 기능
  <br/>
 **3.** 리셋 버튼을 누르면 After화면과 맨 우측 화면 리셋 기능
  <br/>
 **4.** Register Template 을 누르면 동의서 양식 렌더링
  <br/>
 **5.** Submit Template 을 누르면 동의서를 서버에 제출

 <br/>
 
 ## 페이지들
<p>
<img src="https://github.com/2023-oss/OSS-WEB/assets/102888719/6a0ad2c5-1476-43f1-9a90-a124aab8376a">
</p>
<p>
<img src="https://github.com/2023-oss/OSS-WEB/assets/102888719/ad414a3e-ce1f-4f4e-a886-cf741eeaa27b">
</p>

 <br/>

## 설치 환경

아래와 같은 환경을 권장합니다.

| service           | version  |
| ----------------- | -------- |
| **React**        | 18.2.0      |
| **node.js**      | 9.5.1    |

 <br/>
 
## Stack
|                             Icon                              |   Stack   | Description                                      |
| :-----------------------------------------------------------: | :-------: | ------------------------------------------------ |
| <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>    |  HTML5   | HTML                               |
|  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>  |  CSS  |  design for HTML  
|  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>  |  JS   | Business Logic        
| <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>|  React   | React
| <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>|  NodeJs  | npm


