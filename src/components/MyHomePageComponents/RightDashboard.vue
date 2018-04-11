<template>
    <div>
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
</template>

<script>
export default {
  data: function () {
    return {

    }
  }
}
</script>

<style scoped>
    .dashboard-right-header {
    display: flex;
  }

  .dashboard-right-button {
    outline: none;
    border: 0;
    box-shadow: none;
  }

  .dashboard-right {
    background-color: #fff;
  }
</style>
