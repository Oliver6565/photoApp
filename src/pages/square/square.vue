<template>
  <view class="body">
    <view class="banner">
      <view>好图不求人</view>
      <view>想拍好图上约拍</view>
      <view class="faqi" @tap="toPhotowanted" >发起约拍</view>
    </view>
    <view class="reward">
      <text>一站式悬赏好图</text>
      <view>摄影变现 | 授权售卖不怕版权 | 专属定制图片</view>

    </view>
  <view class="iconlist"></view>
  <view class="todaynew">
    图集
    <view class="contentitem">
      <view># 建筑</view>
      <view class="middle">
        <view>
          <image src="../../static/image/show1.png" mode="aspectFill"></image>
          <view class="tag"><image src="../../static/image/金币.svg"></image> 20</view>
        </view>
        <image src="../../static/image/show2.png" mode="aspectFill"></image>
        <image src="../../static/image/show3.png" mode="aspectFill"></image>
      </view>
    </view>
  </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      msg: '约拍广场'
    }
  },
  methods:{
    toPhotowanted(){
      wx.redirectTo({
        url:'../wanted/wanted'
      })
    }
  }
}
</script>
<style lang="less">
.body{
  padding: 30rpx 50rpx;
  color:#656566;
}
.banner{
  color: #fff;
  padding: 40rpx;
  // background-color: #559df4;
  background-image: url(../../static/image/山脉.png);
  background-position: center;
  background-size: 100%;
  border-radius: 30px;
  view:nth-child(2){
    font-size: 32rpx;
  }
  .faqi{
    background-color: #fff;
    color: #FF9E1D;
    font-weight: 400;
    font-size: 30rpx;
    border-radius: 50px;
    padding: 15px;
    margin-top: 40px;
    width: 115px;
  }
}
.reward{
  padding: 20rpx;
  text-align: center;
  view{
    color:#CBCACC ;
    font-size: 32rpx;
  }
}
.todaynew{
  margin-top:30rpx;
  font-size: 36rpx;
  .contentitem{
    padding: 20rpx 0;
    border-bottom: 10px solid rgb(233, 240, 240);
    image{
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
    }
    .middle{
      font-size: 30rpx;
      margin:20px 0;
      display: flex;
      justify-content: space-around;
      image{
        width: 210rpx;
        height: 210rpx;
        border-radius: 15rpx;
      }
      .tag{
        background-color:aliceblue;
        border-radius: 20px;
        padding: 5px 15px;
        display: flex;
        align-items: center;
        color: #EFB82E;
        image{
          margin-right: 10rpx;
          width: 30rpx;
          height: 30rpx;
          border-radius: 15rpx;
        }
      }
    }
    
  }
}
</style>