<template>
  <div class="bg">
    <p>哈哈哈哈</p>
    <div>
      <el-input v-model="name" placeholder="请输入姓名" class="el-input"></el-input>
    </div>
    <div>
      <el-input placeholder="请输入密码" v-model="pwd" show-password class="el-input"></el-input>
    </div>
    <div>
      <el-button type="primary" @click="login()" class="el-input">前往</el-button>
    </div>

  </div>

</template>
<script>
export default {
  data() {
    return {
      name: '',
      pwd: ''
    }
  },
  methods: {
    login() {
      // console.log(12313);
      this.$router.push('/top');
      // this.$router.push({ name: 'home', params: { userId: 21 } });
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../common/sass/common.scss";
div {
  color: $deafultTextColor;
}
.bg {
  border: 1px solid #dadada;
  width: 400px;
  padding: 30px;
  margin-top: 50px;
  margin-left: 40%;
}
.el-input {
  width: 350px;
  margin-top: 30px;
}
</style>
