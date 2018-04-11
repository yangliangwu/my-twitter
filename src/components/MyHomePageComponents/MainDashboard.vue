<template>
  <div class="main-dashboard-container">
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
</template>

<script>
export default {
  data: function () {
    return {
      placeholderText: '有什么新鲜事？',
      hidden: false
    }
  },

  methods: {
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

<style scoped>
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

  .newTwitterBlock-inputContainer {
    width: 100%;
    outline: none;
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

  .postPic-buttom {
    display: none;
  }

  .twitter-content {
    height: 100px;
    background-color: #fff;
  }

  .shadow2 {
    box-shadow: 0 0 1px 1px #A4D9F9;
    height: 80px;
  }

</style>
