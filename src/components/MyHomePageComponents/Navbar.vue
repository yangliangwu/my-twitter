<template>
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
</template>

<script>
export default {
  data: function () {
    return {
      ph: '搜索 Twitter',
      seen: false
    }
  },

  methods: {
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

    search () {
      alert(666)
    }
  }
}

</script>

<style scoped>
  .user-navbar {
    border-bottom: 1px solid #aab8c2;
    padding: 0;
    background-color: #fff;
  }

  #navbarContent {
    padding: 0;
    margin: 0px auto;
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

  .navbarLogo {
    position: absolute;
    left: 50%;
    color: #1da1f2;
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

  .dropdowm-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110px;
    margin-left: 10px;
  }

  .user-dropdown-linkAndImg {
    width: 33px;
    height: 33px;
    overflow: hidden;
    border: 1px solid #aab8c2;
    display: flex;
    justify-content: center;
  }

  .user-icon-dropdown {
    width: 35px;
    height: 35px;
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

</style>
