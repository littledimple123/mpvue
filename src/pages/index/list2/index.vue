<template>
  <div>
    list2页面
    <button class='weui-btn' open-type="share" size='mini' type='primary'>转发</button>
  </div>
</template>
<script>
  export default {
    name: 'List2',
    data () {
      return {

      }
    },
    methods: {
      onShareAppMessage (ops) {
        if (ops.from === 'button') {
          // 来自页面内转发按钮
          console.log(ops.target)
        }
        return {
          title: 'xx小程序',
          path: 'pages/logs/main',
          imageUrl: '', // 分享的封面图
          success: (res) => {
            console.log('转发成功:' + JSON.stringify(res))
          },
          fail: (res) => {
            console.log('转发失败:' + JSON.stringify(res))
          }
        }
      }
    }
  }
</script>
<style scoped>

</style>