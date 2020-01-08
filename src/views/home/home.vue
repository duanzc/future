<template>
  <div>
    <div>
      <button @click="getid()">get</button>
      <input type="text" v-model="id">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  methods: {
    getid() {
      this.id = this.$route.params.userId;

      console.log(this.id);
    }
  },
  //   created: {

  //     getid() {
  //       let id = this.$route.params.id;
  //       console.log(id)
  //     }
  //   }
}
</script>
<style scoped>
</style>
