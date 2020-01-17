<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <!-- <router-link to="/top">首页</router-link>
      <router-link to="/component">组件</router-link>
      <router-link to="/es">es6</router-link> -->
      <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['1']" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
          <router-link to="/top">首页</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/component">组件</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/es">es6</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/canvas">canvas</router-link>
        </a-menu-item>
         <a-menu-item key="5">
          <router-link to="/formwork">表单设计</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '1380px' }">
        <router-view />
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
.logo {
  background: coral;
}
</style>
