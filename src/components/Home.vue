<template>
  <div id='home-page'>
    <div id="HomePage-Content">
      <div id="LoggedOutHomePage-SignupBlock" class="LoggedOutHomePage-Cell">
        <div id='account-login'>
          <input v-model="login_name" class='inputBar1' type="text" placeholder="手机、邮件地址或用户名" onfocus='if(placeholder=="手机、邮件地址或用户名") {placeholder=""}'
            onblur='if(placeholder=="") {placeholder="手机、邮件地址或用户名"}'>
          <input v-model="login_password" class='inputBar1' type="password" placeholder="密码" onfocus='if(placeholder=="密码") {placeholder=""}'
            onblur='if(placeholder=="") {placeholder="密码"}'>
          <button id="login-submit" @click='login()'>登录</button>
        </div>

        <div id="signHeader">
          <span class="signHeader-bird fa fa-twitter fa-3x"></span>
          <a href="">登录</a>
        </div>

        <div id="user-register">
          <h1 class="text1">看看世界的新鲜事</h1>
          <h2 class="text2">现在就加入Twitter!</h2>
          <div>
            <input v-model="account" class='inputBar2' type="text" placeholder="手机号码或邮件地址" onfocus='if(placeholder=="手机号码或邮件地址") {placeholder=""}'
              onblur='if(placeholder=="") {placeholder="手机号码或邮件地址"}'>
          </div>
          <div>
            <input v-model="password" class='inputBar2' type="password" placeholder="密码" onfocus='if(placeholder=="密码") {placeholder=""}'
              onblur='if(placeholder=="") {placeholder="密码"}'>
          </div>
          <div id="getStartedBlock">
            <button @click='signup' class="getStartedButton started-text">现在开始</button>
            <p class="started-text">已有账号？
              <router-link to="/login">登录</router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="LoggedOutHomePage-Cell" id="LoggedOutHomePage-CommunicationBlock">
        <svg class="twitterIcon-bird" viewBox="0 0 1208 982" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 45.2 (43514) - http://www.bohemiancoding.com/sketch -->
          <title>bird</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Final-Horizon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-286.000000, -117.000000)" fill-rule="nonzero" fill="#1B95E0">
              <path d="M1493.75308,233.195911 C1449.31783,252.922544 1401.56126,266.207828 1351.43951,272.19627 C1402.61804,241.549536 1441.92034,192.987798 1460.3889,135.116296 C1412.53168,163.498493 1359.49119,184.130942 1303.02874,195.252335 C1257.88897,147.093181 1193.42514,117 1122.16771,117 C962.190754,117 844.636121,266.258151 880.768067,421.202806 C674.896491,410.886582 492.324484,312.253414 370.089808,162.341063 C305.17308,273.705962 336.423691,419.391176 446.731805,493.16476 C406.171431,491.856361 367.925917,480.734968 334.561738,462.165765 C331.844294,576.95263 414.122472,684.342008 533.287442,708.245454 C498.413572,717.706186 460.218381,719.9204 421.368991,712.47259 C452.871217,810.904465 544.358512,882.514158 652.854997,884.52708 C548.686294,966.201382 417.443793,1002.68559 286,987.186091 C395.653915,1057.48739 525.940278,1098.50067 665.838342,1098.50067 C1125.89162,1098.50067 1385.81015,709.956437 1370.10936,361.469352 C1418.52012,326.494836 1460.53987,282.864756 1493.75308,233.195911 Z"
                id="bird"></path>
            </g>
          </g>
        </svg>
        <div id="LoggedOutHomePage-CommunicationContent">
          <div class="LoggedOutHomePage-CommunicationItem">
            <span class="Item-Span fa fa-search"></span>关注你的兴趣所在。
          </div>
          <div class="LoggedOutHomePage-CommunicationItem">
            <span class="Item-Span fa fa-users"></span>听听大家在谈论什么。
          </div>
          <div class="LoggedOutHomePage-CommunicationItem">
            <span class="Item-Span fa fa-comment-o"></span>加入对话。
          </div>
        </div>
      </div>
    </div>
    <div class="StreamFooter container-fluid fixed-bottom">
      <ul class="StreamFooter-list">
        <li>关于</li>
        <li>帮助中心</li>
        <li>博客</li>
        <li>状态</li>
        <li>工作机会</li>
        <li>条款</li>
        <li>隐私状态</li>
        <li>Cookies</li>
        <li>广告信息</li>
        <li>商标</li>
        <li>应用</li>
        <li>广告</li>
        <li>市场营销</li>
        <li>企业</li>
        <li>开发者</li>
        <li>目录</li>
        <li>设置</li>
      </ul>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data: function () {
    return {
      account: null,
      password: null,
      login_name: null,
      login_password: null
    }
  },

  methods: {

    signup () {
      if (this.account === null || this.account === '' || this.password === null || this.password === '') {
        alert('用户名或密码不能为空！')
        return
      }
      axios.post('/user', {
        name: this.account,
        password: this.password
      }).then(function (res) {
        var data = res.data
        if (data.status === true) {
          alert('注册成功')
        } else {
          alert(data.err)
        }
      })
    },

    login () {
      if (this.login_name === null || this.login_name === '' || this.login_password === null || this.login_password ===
          '') {
        alert('用户名或密码不能为空！')
        return
      }
      axios.post('/session', {
        name: this.login_name,
        password: this.login_password
      }).then((res) => {
        if (res.data.status === true) {
          localStorage.login_name = this.login_name
          this.$router.push('/MyHomePage')
        } else {
          alert(res.data.err)
        }
      })
    }

    // signup () {
    //   axios.post('/user', {
    //     name: this.account,
    //     password: this.password
    //   }).then(function (response) {
    //     if (response.data.status === true) {
    //       alert(response.data.message)
    //     } else {
    //       alert(response.data.err)
    //     }
    //   })
    // }
  }
}

</script>

<style>
  #account-login {
    position: absolute;
    left: 0;
    width: 100%;
    top: 20px;
    margin-top: 12px;
    /* display: none; */
    display: flex;
    justify-content: center;
  }

  #user-register {
    width: 245px;
    height: 360px;
  }

  #home-page {
    display: flex;
    flex-direction: column;
  }

  #HomePage-Content {
    display: flex;
    flex-direction: row-reverse;
  }

  .inputBar1 {
    width: 210px;
    margin-right: 10px;

    height: 46px;
    border-radius: 3px;
    border: 1px solid #e6ecf0;
    background-color: rgb(250, 255, 189);
  }

  .inputBar2 {
    width: 250px;
    height: 46px;
    margin: 8px 0px;
    border-radius: 3px;
    border: 1px solid #e6ecf0;
    padding: 12px;
    background-color: rgb(250, 255, 189);
  }

  body {
    margin: 0;
  }

  .text1 {
    margin: 0;
    font-size: 27px;
    font-weight: bold;
    line-height: 32px;
    color: #14171a;
  }

  .text2 {
    font-size: 18px;
    font-weight: bold;
    margin: 24px 0px;
    color: #14171a;
  }

  .started-text {
    display: inline-block;
    font-size: 14px;
    margin: 0;
  }

  #getStartedBlock {
    justify-content: space-between;
    align-items: center;
    display: flex;
    width: 235px;
    margin: 24px 0px;
  }

  .getStartedButton {
    height: 34px;
    width: 90px;
    color: #fff;
    background-color: #1da1f2;
    border-radius: 15px;
    border: 0px;
    font-weight: bold;
    font-size: 14px;
  }

  #login-submit {
    border-radius: 100px;
    height: 42px;
    width: 50px;
    background-color: #fff;
    color: #1da1f2;
    border: 1px solid #1da1f2;
    font-size: 12px;
    font-weight: bold;
  }

  .LoggedOutHomePage-Cell {
    flex: 1;
    /* text-align: center; */
    height: 100vh;
    /* align-content: center; */
    background: #1da1f2;
    position: relative;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #LoggedOutHomePage-CommunicationBlock {
    align-items: center;
    overflow: hidden;
    justify-content: center;
  }

  #LoggedOutHomePage-CommunicationContent {
    z-index: 1;
    position: relative;
    max-width: 440px;
    /* height: 264px; */
    width: 231px;
    display: block;
    align-items: center;
  }

  .LoggedOutHomePage-CommunicationItem {
    font-size: 18px;
    height: 24px;
    font-weight: bold;
    margin: 48px auto;
    color: #fff;
    display: flex;
  }

  .twitterIcon-bird {
    height: 140vh;
    position: absolute;
    /* overflow: hidden; */
    right: -80vh;
    top: -20vh;
  }

  #LoggedOutHomePage-SignupBlock {
    background-color: #fff;
    z-index: 1;
    /* justify-content: center; */
  }

  .StreamFooter {
    width: 100%;
    background: #fff;
    border-top: 1px solid #e6ecf0;
    bottom: 0;
    z-index: 2;
    padding: 11px auto;
    text-align: center;
    height: 45px;
  }

  .StreamFooter-list {
    /* display: flex; */
    list-style: none;
    line-height: 44px;
    height: 44px;
  }

  .StreamFooter-list li {
    padding: 0px 9px;
    display: inline-block;
    font-size: 12px;
    color: #aab8c2;
  }

  .Item-Span {
    font-size: 35px;
    margin-right: 10px;
    vertical-align: baseline;
  }

  .signHeader-bird{
    color: #1da1f2;
  }

  #signHeader {
    display: flex;
    justify-content: space-between;
    width: 245px;
    align-items: center;
    margin: 16px 0px;
  }

</style>
