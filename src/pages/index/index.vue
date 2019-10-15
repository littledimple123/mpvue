<template>
  <div>
    <div class="container" @click="clickHandle">
      <div class="message">{{msg}}</div>
    </div>
    <button class='weui-btn' size='mini' type='primary' open-type='getUserInfo' @click='getuserInfo'>获取用户信息</button>
    <div class="weui-cells__title">带跳转的列表项</div>
    <div class="weui-cells weui-cells_after-title">
      <navigator url="./list1/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__bd">列表1</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
      <navigator url="./list2/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__bd">列表2</div>
        <div class="weui-cell__ft weui-cell__ft_in-access"></div>
      </navigator>
    </div>
  </div>
</template>
<script>
import { gettableDate } from '@/api/detail'
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Hello'
    }
  },
  mounted () {
    this.aaa()
  },
  methods: {
    getuserInfo () {
      wx.getUserInfo({
        success: (res) => {
          console.log(res)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    },
    clickHandle () {
      this.msg = 'Clicked!!!!!!'
    },
    aaa () {
      console.log(gettableDate())
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