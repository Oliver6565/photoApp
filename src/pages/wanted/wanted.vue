<template>
<view class="body">
    <view class="banner">
      <view>如何发布图片需求？</view>
      <view class="shouce" @tap="toManual" >使用手册</view>
    </view>
    <view class="main">
        <view class="wantedlist">需求列表</view>
        <view class="listitem">
          <view class="icon"><image src="../../static/image/引号.svg"></image></view>
          <view class="text">为了复制完成古城遵化兴盛时期一副百米长卷，有喜欢遵化古城文化也可以参与支持活动，邀...</view>
          <view class="demand"><image src="../../static/image/wantedbg1.png"></image> <view><view>遵化古城老照片</view><view class="reward">悬赏金额 5000.00约贝</view></view> </view>
          <view class="bottom">评论 4 作品 5<view class="tag"># 图贝悬赏</view></view>
        </view>
        <view class="listitem">
          <view class="icon"><image src="../../static/image/引号.svg"></image></view>
          <view class="text">这一切的一切 都要起源于山海经中的神兽</view>
          <view class="demand"><image src="../../static/image/show2.png"></image> <view><view>遵化古城老照片</view><view class="reward">悬赏金额 5000.00约贝</view></view> </view>
          <view class="bottom">评论 7 作品 9<view class="tag"># 图贝悬赏  建筑</view></view>
        </view>
    </view>
</view>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello ?!',
      tagtxt:'街景',
      yiguanzhu:{},
      guanzhutext:'关注'
    }
  },
  methods:{
      toManual(){
          console.log('去手册')
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
  background-image: url(../../static/image/show3.png);
  background-position: center;
  background-size: 100%;
  border-radius: 30px;
  .shouce{
    background-color: #fff;
    color: #559df4;
    font-weight: 400;
    font-size: 30rpx;
    border-radius: 50px;
    padding: 15px;
    margin-top: 40px;
    width: 115px;
  }
}
.main{
    font-size: 36rpx;
    padding: 20rpx 0;
    .wantedlist{
        padding: 20rpx 0;
    }
    .listitem{
      position: relative;
      border-radius: 10px;
      box-shadow:2px 2px 10px #ccc;
      padding: 40rpx;
      margin: 20rpx 0;
      .icon{
        position: absolute;
        top: 0rpx;
        left: 10rpx;
        image{
          height:30rpx;
          width:30rpx;
        }
      }
      .text{
        font-size: 30rpx;
        height: 80rpx;
        overflow: hidden;
      }
      .demand{
        display: flex;
        font-size: 34rpx;
        background-color:#FAF6F3;
        padding: 20rpx;
        margin: 20rpx 0;
        border-radius: 20px;
        image{
          margin-right: 20rpx;
          width: 80rpx;
          height: 80rpx;
          border-radius:10rpx;
        }
        .reward{
          font-size: 30rpx;
          color: #989799;
        }
      }
      .bottom{
        font-size: 30rpx;
        color: #989799;
        .tag{
          float: right;
          color:#BE9958 ;
          background-color: #FAF6F3;
          padding: 10rpx;
          border-radius: 50px;
        }
      }
    
    }
}

</style>
