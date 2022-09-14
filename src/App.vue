<template>
  <header>
    <div id="header-left" class="header-part">
      <img id="header-logo" src="data:image/jpeg;base64,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" alt="더쿠로고">
      <div>theqoo</div>
    </div>
    <div id="header-right" class="header-part">
      <font-awesome-icon icon="right-from-bracket" class="logo-font" />
    </div>
  </header>
  <div id="top-ad">
    <div id="top-ad-content">광고</div>
  </div>
  <router-view />
  <div id="bottom-ad">
    <div id="bottom-ad-content">광고</div>
  </div>
  <footer>
    <div id="footer-first">
      <button class="footer-button">로그인</button>
      <button class="footer-button">회원가입</button>
      <button class="footer-button">다크모드</button>
      <button class="footer-button">PC</button>
      <button class="footer-button">이용약관</button>
      <button class="footer-button">개인정보처리방침</button>
      <button class="footer-button">청소년 보호정책</button>
    </div>
    <div id="footer-second">@ theqoo</div>
    <div id="footer-third"><span id="footer-third-text">40444명</span></div>
  </footer>
</template>

<style>
/* common */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* header */
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color:#2c3880;
  color: white;
}

.header-part {
  text-align : center;
  padding: 10px;
}

#header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#header-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#header-logo {
  height: 30px;
  padding-right: 5px;
}

.logo-font {
  font-size: 20px;
}

/* top-ad */
#top-ad {
  display: flex;
  flex-direction: row;
  height: 120px;
  background-color: hsl(0, 0%, 87%);
}

#top-ad-content {
  /* align-self: center;
  justify-content: center; */
  background-color: yellow;
  width: 75%;
  height: 80%;
  margin: auto;
}

#bottom-ad {
  display: flex;
  flex-direction: row;
  height: 300px;
  background-color: white;
  border: 0.2px solid #d1d1d1;
  margin-top: 10px;
}

#bottom-ad-content {
  /* align-self: center;
  justify-content: center; */
  background-color: yellow;
  width: 80%;
  height: 90%;
  margin: auto;
}

/* footer */
footer {
  background-color: hsl(0, 0%, 87%);
}

#footer-first {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  margin: auto;
  padding: 10px 0px 10px 0px;
}

.footer-button {
  margin: 5px;
  padding: 2px;
  border-color: rgb(236, 236, 236);
  border-radius: 3px;
}

#footer-second {
  color: #878787;
  font-size: 15px;
  padding-bottom: 10px;
}

#footer-third {
  color: #f9f9f9;
  font-size: 15px;
  padding-bottom: 30px;
}
#footer-third-text {
  background-color: #2c3880;
  padding: 2px;
}
</style>
