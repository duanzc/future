<template>
  <div>
    <fm-making-form ref="makingform" style="height: 1000px;" :basic-fields="['input', 'textarea','radio','checkbox','time','rate','data','text']" :advance-fields="[]" :layout-fields="[]">
      <template slot="action">
        <button @click="getJSON()">创建表格</button>
      </template>
    </fm-making-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    getJSON() {
      // console.log(32);
      const msg = this.$refs.makingform.getJSON();

      console.log(msg.list)
    }

  }
}
</script>
<style scoped>
</style>
