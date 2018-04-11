<template>
  <div class="user-Logged-in container-fluid">
    <nav-bar></nav-bar>

    <div class="user-content-block container">
      <div class="row">
        <left-dashboard></left-dashboard>

        <div class="content-main col-6">
          <main-dashboard></main-dashboard>
        </div>

        <div class="dashboard dashboard-right col">
          <right-dashboard></right-dashboard>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import leftDashboard from './MyHomePageComponents/LeftDashboard'
import mainDashboard from './MyHomePageComponents/MainDashboard'
import rightDashboard from './MyHomePageComponents/RightDashboard'
import navbar from './MyHomePageComponents/Navbar.vue'
// const axios = require('axios')

export default {
  data: function () {
    return {

    }
  },

  methods: {

  },

  components: {
    'left-dashboard': leftDashboard,
    'main-dashboard': mainDashboard,
    'right-dashboard': rightDashboard,
    'nav-bar': navbar
  }
}

</script>

<style scoped>
  .user-Logged-in {
    margin: 0;
    padding: 0;
  }

  .content-main {
    background: #1da1f2;
    height: 500px;
    margin: 0px 10px;
    padding: 0;
    /* display: flex; */
  }

  .user-content-block {
    padding: 10px 0px 0px;
  }

</style>
