<template>
  <div>
    <div>
      username: <input type="text">
    </div>
    <div>
      password: <input type="password">
    </div>
    <div>
      <button @click="login()">gogogo</button>
    </div>

  </div>

</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    login () {
      // console.log(12313);
      // this.$router.push('/home');
      this.$router.push({ name: 'home', params: { userId: 21 } });
    }
  }
}
</script>
<style scoped>
div {
  color: aliceblue;
}
</style>
