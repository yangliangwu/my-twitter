<template>
  <div id='home-page'>
    <div id="LoggedOutHomePage-SignupBlock">
      <div id='account-login'>
        <h1 class='tips'>登录我的推特</h1>
        <input class='inputBar' type="text" placeholder="手机、邮件地址或用户名" onfocus='if(placeholder=="手机、邮件地址或用户名") {placeholder=""}' onblur='if(placeholder=="") {placeholder="手机、邮件地址或用户名"}'>
        <input class='inputBar' type="text" placeholder="密码" onfocus='if(placeholder=="密码") {placeholder=""}' onblur='if(placeholder=="") {placeholder="密码"}'>
        <button id="login-submit">登录</button>
      </div>
      <span id="user-register">
        <h1 class="tips2">看看世界的新鲜事</h1>
        <h2 class="tips3">现在就加入Twitter!</h2>
        <div>
          <input class='inputBar' type="text" placeholder="手机号码或邮件地址" onfocus='if(placeholder=="手机号码或邮件地址") {placeholder=""}' onblur='if(placeholder=="") {placeholder="手机号码或邮件地址"}'>
        </div>
        <div>
          <input class='inputBar' type="text" placeholder="密码" onfocus='if(placeholder=="密码") {placeholder=""}' onblur='if(placeholder=="") {placeholder="密码"}'>
        </div>
        <div id="getStartedBlock">
          <button class="getStartedButton started-text">现在开始</button>
          <p class="started-text">已有账号？
            <router-link to="Login">登录</router-link>
          </p>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#account-login {
  text-align: center;
}

#user-register {
  text-align: center;
}

#home-page {
  background-color: #1da1f2;
  height: 100vh;
}

.inputBar {
  width: 250px;
  height: 40px;
  margin: 2px 0px;
  border-radius: 3px;
  border: 1px;
}

body {
  margin: 0;
}

.tips {
  margin-top: 0;
  padding-top: 50px;
}

.tips2 {
  margin-top: 100px;
}

.started-text {
  display: inline-block;
}

.getStartedButton,
#login-submit {
  border-radius: 100px;
  height: 35px;
  width: 90px;
  background-color: #fff;
}

.tips,
.tips2,
.tips3 {
  color: white;
}
</style>
