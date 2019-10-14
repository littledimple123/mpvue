<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Logs',
  data () {
    return {
      msg: 'logs'
    }
  },

  methods: {
    clickHandle () {
      this.msg = 'Clicked!!!!!!'
    }
  }
}
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
  font-size:20px;
  font-style: bold;
}
</style>