<template>
  <div class="dashboard dashboard-left col">
    <div class="dashboardProfileCard">
      <a class="dashboardProfileCard-bg" href="###"></a>

      <div class="profileCardContainer">
        <div class="avatarContainer">
          <div id="choosePicture" @click='uploadAvatar'>
            <i class="fa fa-camera fa-lg" id='profileCardIcon'>
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
</template>

<script>
const axios = require('axios')

export default {
  data: function () {
    return {

    }
  },

  // vue生命周期钩子mounted
  mounted: function () {
    this.updateAvatar()
  },

  methods: {
    uploadAvatar () {
      // 创造一个文件上传的input标签
      let input = document.createElement('input')
      // 设置为file类型，上传文件
      input.type = 'file'
      // 监听事件，当发生改变时执行函数
      input.onchange = () => {
        // 创建一个FormData对象
        let formdata = new FormData()
        // 使用append方法添加数据，append(key, value)
        formdata.append('avatar', input.files[0])
        // 使用AJAX进行post提交数据，使用箭头函数(使this为vue实例)，res为回调函数参数
        axios.post('/users/avatar', formdata).then(res => {
          // res.data为服务器响应数据
          if (res.data.status === true) {
            this.updateAvatar()
          } else {
            alert('图片上传失败：' + res.data.message)
          }
        }).catch(err => { // 捕获异常，err为回调函数参数，类型为Error
          // 可能出现的异常，例如404，502，网络错误等等
          alert(err.message)
        })
      }
      // 触发点击事件
      input.click()
    },

    updateAvatar () {
      // $('#choosePicture').css('backgroundImage', 'url(/users/avatar?name=' + localStorage.login_name + '&' + Math.random() + ')')
      // // $('#choosePicture').css('backgroundImage', 'none')
      // $('.profileCardIcon').css('display', 'none')
      // // if()
      let username = localStorage.login_name
      // 使用axios的get方法，因为数据类型是blob，所以使用responseType。
      // 参考(https://www.kancloud.cn/yunye/axios/234845)
      axios.get(`/users/avatar?name=${username}`, {
        responseType: 'blob'
      }).then(res => {
        // size大小不为0，说明用户头像是存在的
        if (res.data.size !== 0) {
          // 创建一个头像图片的url，赋值给变量
          let url = URL.createObjectURL(res.data)
          // 每次调用createObjectURL()方法时都会创建一个新的URL对象，即使已用相同对象作参数创建过
          // 所以当不需要这些URL对象时必须通过URL.revokeObjectURl()方法来释放(浏览器也会在文档退出时自动释放)
          if (localStorage.avatar_url) {
            URL.revokeObjectURL(localStorage.avatar_url)
          }
          localStorage.avatar_url = url
          // 把图片div的background-image属性的值变成图片的url
          // JS对象的属性名不能有横杠，所以此处backgroundImage用驼峰命名
          $('#choosePicture').css('backgroundImage', `url(${url})`)
          // 上传头像后把icon的图片隐藏，注意此处css的优先级
          $('#profileCardIcon').hide()
        }
      })
    }

  }
}

</script>

<style scoped>
  .profileCard-userFile-group {
    height: 40px;
    margin-top: 5px;
    width: 150px;
  }

  .dashboard-left {
    padding: 0;
  }

  .dashboardProfileCard-bg {
    width: 100%;
    height: 100px;
    background-color: #1da1f2;
    display: block;
  }

  .profileCardContainer {
    height: 120px;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
  }

  .avatarContainer {
    height: 20px;
    display: flex;
    align-items: center;
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
    background-image: cover;
  }

  .profileCard-userName {
    font-size: 18px;
    font-weight: bold;
  }

  .profileCard-userScreenName {
    line-height: 14px;
    font-size: 14px;
    color: grey;
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

</style>
