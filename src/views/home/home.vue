<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['1']" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
           首页
        </a-menu-item>
        <a-menu-item key="2">组件</a-menu-item>
        <a-menu-item key="3">es6</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '1380px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <!-- <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer> -->
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  methods: {
    router() {

    }

    // getid() {
    //   this.id = this.$route.params.userId;
    //   console.log(this.id);
    // }
  }
}
</script>
<style scoped>
</style>
