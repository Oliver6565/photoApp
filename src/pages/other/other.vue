<template>
  <view class="index">
    <image src="../../static/image/客服.png"></image>
<image src="../../static/image/手册.png"></image>
<image src="../../static/image/收藏.png"></image>
    <text>{{ msg }}</text>
  </view>
</template>

<script>
export default {
  data () {
    return {
      msg: '发布'
    }
  }
}
</script>
<style lang="less">
.index{
  image{
    width: 80rpx;
    height: 80rpx;
  }
}
</style>