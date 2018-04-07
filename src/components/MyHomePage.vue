<template>
  <div class="user-Logged-in container-fluid">
    <div class="user-navbar container-fluid">
      <nav class="navbar navbar-expand navbar-light bg-light container col-lg-9" id="navbarContent">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-home fa-lg"></i> 主页</a>
            </li>
            <!-- <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fa fa-bolt fa-lg"></i> 瞬间
              </a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-bell-o fa-lg"></i> 通知</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa fa-envelope-o fa-lg"></i> 私信</a>
            </li>
          </ul>
          <i class="fa fa-twitter fa-lg navbarLogo"></i>
          <div class="search-block-container">
            <div class="search-block" :class="{shadow: seen}">
              <!-- <input class="search-block-input" type="search" placeholder="搜索 Twitter" aria-label="Search" onblur='if(placeholder==""){placeholder="搜索 Twitter"}' onfocus='if(placeholder=="搜索 Twitter"){placeholder=""}'> -->
              <input class="search-block-input" type="search" :placeholder="ph" aria-label="Search" @blur="blur()" @focus="focus()">
              <button class="search-block-button" type="submit" @click='search'>
                <span class="search-icon fa fa-search fa-lg search-block-button-icon"></span>
              </button>
            </div>
            <div class="dropdowm-container">
              <a href="" class="user-dropdown-linkAndImg rounded-circle">
                <img src="@/assets/touxiang.jpg" alt="" class="user-icon-dropdown">
              </a>
              <button class="send-twitter-button">发推</button>
            </div>
          </div>
        </div>
      </nav>

    </div>

    <div class="user-content-block container">
      <div class="row">
        <div class="dashboard dashboard-left col">
          <div class="dashboardProfileCard">
            <a class="dashboardProfileCard-bg" href="###"></a>

            <div class="profileCardContainer">
              <div class="avatarContainer">
                <div id="choosePicture" @click='uploadAvatar'>
                  <i class="fa fa-camera fa-lg profileCardIcon">
                  </i>
                </div>
              </div>
              <div class="profileCard-userFile-group">
                <div class="profileCard-userName">杨亮午</div>
                <div class="profileCard-userScreenName">@6ppQzedgpJlF5wu</div>
              </div>
              <div class="profileCard-stats">
                <ul class="profileCard-stats-ul">
                  <li>
                    <div>推文</div>
                    <div>0</div>
                  </li>
                  <li>
                    <div>正在关注</div>
                    <div>0</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="content-main col-6">
          <div class="newTwitterBlock">
            <img src="@/assets/touxiang.jpg" alt="" class="newTwitterBlock-avatar">
            <div class="newTwitterBlock-inputContainer" :class="{shadow2: hidden}">
              <input type="text" class="newTwitterBlock-input" :placeholder="placeholderText" aria-describedby="btnGroupAddon" @blur='showText()'
                @focus='hideText()'>
              <div class="previewPictureBlock">
                <div class="previewPictures">
                  <!-- <img src="@/assets/touxiang.jpg" alt=""> -->
                </div>
              </div>
            </div>
            <i class="fa fa-picture-o fa-lg" @click="postPic()">
              <input type="file" class="postPic-buttom">
            </i>
          </div>
          <div class="twitter-content">

          </div>
        </div>

        <div class="dashboard dashboard-right col">
          <div class="dashboard-right-content">
            <div class="dashboard-right-header">
              <h3>推荐关注</h3>
              <small>.</small>
              <button class="dashboard-right-button">
                <small class="dashboard-right-button">
                  刷新
                </small>
              </button>
              <small>.</small>
              <button class="dashboard-right-button">
                <small>
                  查看全部
                </small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
const axios = require('axios')

console.log($)
export default {
  data: function () {
    return {
      ph: '搜索 Twitter',
      seen: false,
      placeholderText: '有什么新鲜事？',
      hidden: false
    }
  },

  mounted: function () {
    this.updateAvatar()
  },

  methods: {
    uploadAvatar () {
      let input = $('<input type="file">')
      input.click()
      input.on('change', () => {
        let formdata = new FormData()
        console.log(input[0].files[0])
        formdata.append('avatar', input[0].files[0])
        axios.post('/users/avatar', formdata).then(res => {
          if (res.data.status === true) {
            this.updateAvatar()
          } else {
            alert('图片上传失败：' + res.data.message)
          }
        })
      })
    },

    updateAvatar () {
      let random = Math.random()
      $('#choosePicture').css('backgroundImage', 'url(/users/avatar?name=' + localStorage.login_name + '&' + random + ')')
    },

    search () {
      alert('666！')
    },

    blur () {
      this.seen = false
      if (this.ph === '') {
        this.ph = '搜索 Twitter'
      }
    },

    focus () {
      this.seen = true
      if (this.ph === '搜索 Twitter') {
        this.ph = ''
      }
    },

    showText () {
      this.hidden = false
      if (this.placeholderText === '') {
        this.placeholderText = '有什么新鲜事？'
      }
    },

    hideText () {
      this.hidden = true
      if (this.placeholderText === '有什么新鲜事？') {
        this.placeholderText = ''
      }
    },

    postPic () {
      $('.postPic-buttom').click()
    }
  }
}

</script>

<style>
  body {
    background-color: #e6ecf0;
  }

  .user-navbar {
    border-bottom: 1px solid #aab8c2;
    padding: 0;
    background-color: #fff;
  }

  #navbarSupportedContent {
    height: 46px;
    justify-content: space-between;
    width: 100%;
  }

  .nav-item {
    width: 80px;
    font-size: 13px;
    font-weight: bold;
  }

  .user-Logged-in {
    margin: 0;
    padding: 0;
  }

  .content-main {
    background: #1da1f2;
    height: 500px;
    margin: 0px 10px;
    /* display: flex; */
  }

  .navbarLogo {
    position: absolute;
    left: 50%;
    color: #1da1f2;
  }

  .user-content-block {
    padding: 10px 0px 0px;
  }

  #navbarContent {
    padding: 0;
    margin: 0px auto;
  }

  .search-block-container {
    flex-wrap: nowrap;
    display: flex;
    justify-content: space-between;
  }

  .search-block {
    display: flex;
    border: 1px solid #e6ecf0;
    border-radius: 20px;
    height: 35px;
    flex-wrap: nowrap;
    align-items: center;
    width: 230px;
    transition: all 0.5s;
    background-color: #f5f8fa;
  }

  .search-block-input {
    display: inline-block;
    border: 0px;
    font-size: 14px;
    margin-left: 15px;
    padding: 0;
    background-color: #f5f8fa;
    outline: none;
  }

  .search-block-button {
    display: block;
    margin-right: 10px;
    font-weight: 100;
    /* overflow: hidden; */
    border: 0;
    padding: 0;
    background: #f5f8fa;
  }

  .search-block-button-icon {
    color: #aab8c2;
  }

  .user-icon-dropdown {
    width: 35px;
    height: 35px;
  }

  .user-dropdown-linkAndImg {
    width: 33px;
    height: 33px;
    overflow: hidden;
    border: 1px solid #aab8c2;
    display: flex;
    justify-content: center;
  }

  .dropdowm-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110px;
    margin-left: 10px;
  }

  .send-twitter-button {
    height: 34px;
    color: white;
    background-color: #1da1f2;
    border-radius: 25px;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    width: 65px;
    padding: 0;
  }

  .shadow {
    box-shadow: 0 0 5px 2px #1da1f2;
  }

  .dashboardProfileCard-bg {
    width: 100%;
    height: 100px;
    background-color: #1da1f2;
    display: block;
  }

  .avatarContainer {
    height: 20px;
  }

  .profileCardContainer {
    height: 120px;
    width: 100%;
    background-color: #fff;
  }

  .dashboard-left {
    padding: 0;
  }

  #choosePicture {
    cursor: pointer;
    height: 70px;
    width: 70px;
    color: #fff;
    border-radius: 35px;
    background-color: #1da1f2;
    box-shadow: 0 0 0 4px #fff;
    margin-left: 15px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  .avatarContainer {
    display: flex;
    align-items: center;
  }

  .profileCardContainer {
    display: flex;
    flex-wrap: wrap;
  }

  .profileCard-userScreenName {
    line-height: 14px;
    font-size: 14px;
    color: grey;
  }

  .profileCard-userName {
    font-size: 18px;
    font-weight: bold;
  }

  .profileCard-userFile-group {
    height: 40px;
    margin-top: 5px;
    width: 150px;
  }

  .profileCard-stats {
    width: 100%;
    height: 60px;
    /* display: flex; */
  }

  .profileCard-stats-ul {
    list-style: none;
    display: flex;
    padding: 10px;
    margin: 0;
    height: 100%;
  }

  .profileCard-stats-ul li {
    flex: 1 1;
  }

  .newTwitterBlock {
    width: 100%;
    /* height: 55px; */
    background-color: #e8f5fd;
    display: flex;
    align-items: center;
    color: #1DA1F2;
  }

  .newTwitterBlock i {
    position: absolute;
    right: 1em;
  }

  .content-main {
    padding: 0;
  }

  .newTwitterBlock-avatar {
    height: 32px;
    width: 32px;
    border-radius: 16px;
    margin: auto 0 auto 20px;
    position: absolute;
    top: 15px;
    display: block;
  }

  .newTwitterBlock-input {
    width: 100%;
    outline: none;
    border: 0;
    border-radius: 10px;
    height: 40px;
    border-radius: 10px;
    padding-left: 5px;
  }

  .shadow2 {
    /* outline: none; */
    box-shadow: 0 0 1px 1px #A4D9F9;
    height: 80px;
  }

  .newTwitterBlock-input::-webkit-input-placeholder {
    color: #1da1f2;
    font-size: 0.93rem;
  }

  .newTwitterBlock-input:-moz-placeholder {
    color: #1da1f2;
    font-size: 0.93rem;
  }

  .newTwitterBlock-input::-moz-placeholder {
    color: #1da1f2;
    font-size: 0.93rem;
  }

  .newTwitterBlock-input:-ms-input-placeholder {
    color: #1da1f2;
    font-size: 0.93rem;
  }

  .postPic-buttom {
    display: none;
  }

  .newTwitterBlock-inputContainer {
    width: 100%;
    outline: none;
    /* margin-right: 10px;
    margin-left: 5px; */
    border-radius: 10px;
    border: 1px solid #c5e6ea;
    padding-left: 5px;
    background-color: #fff;
    margin: 10px 10px 10px 60px;
  }

  .previewPictureBlock {
    width: 100%;
    border: 0;
    border-top: 1px;
  }

  .twitter-content {
    height: 100px;
    background-color: #fff;
  }

  .dashboard-right-header {
    display: flex;
  }

  .dashboard-right-button {
    outline: none;
    border: 0;
    box-shadow: none;
    /* bgc- */
  }

  .dashboard-right {
    background-color: #fff;
  }

</style>
