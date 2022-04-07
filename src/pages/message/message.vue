<template>
  <view class="body">
    <view class="iconlist">
      <view class="iconitem">
        <image src='../../static/image/通知.png'></image><br />
        <view>通知</view>
      </view>
      <view class="iconitem">
        <image src='../../static/image/点赞.png'></image><br />
        <view>点赞</view>
      </view>
      <view class="iconitem">
        <image src='../../static/image/评论.png'></image><br />
        <view>评论</view>
      </view>
      <view class="iconitem">
        <image src='../../static/image/我的粉丝.png'></image><br />
        <view>粉丝</view>
      </view>
    </view>
    <view class="message">
      <view class="title">消息列表</view>
      <view class="messageitem">
        <image src="../../static/image/头像2.png"></image>
        <view class="text">
          <view>as it was</view>
          <view>why don't we leave it at that</view>
        </view>
        <view class="time">18:30</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      msg: '消息'
    }
  }
}
</script>
<style lang="less">
.body{
  padding: 30rpx 50rpx;
  color:#656566;
}
.iconlist{
  font-size: 36rpx;
  padding-bottom: 50rpx;
  border-bottom: 10px solid rgb(233, 240, 240);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .iconitem{
    image{
      width: 70rpx;
      height: 70rpx;
    }
  }
}
.message{
  padding: 20rpx 0;
  .title{
    padding: 20rpx 0;
  }
  .messageitem{
    border-bottom: 5px solid rgb(233, 240, 240);
    padding-bottom: 20rpx ;
    display: flex;
    justify-content: space-between;
    image{
      width: 100rpx;
      height: 100rpx;
      border-radius: 10px;
    }
    .text{
      font-size: 36rpx;
      width: 400rpx;
      height: 110rpx;
      overflow: hidden;
      view:nth-child(1){
        font-size: 40rpx;
        color: #000;
      }
    }
    .time{
      font-size: 34rpx;
    }
  }
}

</style>