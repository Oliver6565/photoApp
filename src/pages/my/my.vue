<template>
  <view class="body">
    <view class="top">
      <image src="../../static/image/头像1.png"></image>
      <view class="text">
        <view class="name">harry styls</view>
        <view class="brief">why don't we leave it at that I want to say goodnight to you</view>
      </view>
      <view class="setup"><image src="../../static/image/设置.png"></image></view>
    </view>
    <view class="iconlist">
      <view class="iconitem" v-for='item in iconlist' :key='item.index'>
        <view class="count">{{item.count}}</view>
        <view class="name">{{item.name}}</view>
      </view>
    </view>
    <view class="certification">
      <image src="../../static/image/会员.png"></image>申请官方约拍认证
      <view class="rightnow">立即认证 > </view>
    </view>
    <view class="bottom">
      <view class="bottomlist" v-for='item in bottomlist' :key='item.index'>
        <image :src=item.url></image>{{item.name}}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      msg: '我的主页',
      iconlist:[
        {
          count:236,
          name:'关注'
        },
        {
          count:2356,
          name:'粉丝',
        },
        {
          count:15689,
          name:'作品'
        }
      ],
      bottomlist:[
        {
          name:'我的作品',
          url:'../../static/image/作品.png'
        },
        {
          name:'赛事跟进',
          url:'../../static/image/赛事tag.png'
        },
        {
          name:'我的收藏',
          url:'../../static/image/收藏.png'
        },
        {
          name:'约拍手册',
          url:'../../static/image/手册.png'
        },
        {
          name:'客户中心',
          url:'../../static/image/客服.png'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.body{
  padding: 30rpx 50rpx;
  color:#656566;
}
.top{
  position: relative;
  display: flex;
  justify-content: space-around;
  image{
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  .text{
    font-size: 34rpx;
    height: 110rpx;
    width: 470rpx;
    overflow: hidden;
    .name{
      width: 400rpx;
      white-space:nowrap;
      overflow: hidden;
      font-size: 40rpx;
      color: #000;
    }
  }
  .setup{
    position: absolute;
    top: 0;
    right: 0;
    image{
      width: 50rpx;
      height: 50rpx;
    }
  }
}
.iconlist{
  margin: 30rpx 0;
  display: flex;
  justify-content: space-around;
  .iconitem{
    view:nth-child(1){
      color: #000;
    }
    text-align: center;
  }
}
.certification{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #747C8F;
  border-radius: 30px 30px 0 0;
  padding: 25rpx 0;
  image{
    width: 80rpx;
    height: 80rpx;
    display: inline-block;
  }
  color: #F0DBBE;
  .rightnow{
    color: #656566;
    padding: 15rpx;
    background-color:#CCD4E4 ;
    border-radius: 50px;
    font-size: 30rpx;
  }
}
.bottom{
  font-size: 36rpx;
  margin: 40rpx 0 0;
  .bottomlist{
    padding: 30rpx 0 10rpx;
    border-bottom: 1px solid rgb(233, 240, 240);
    display: flex;
    align-items: center;
    image{
      margin-right: 30px;
      display: inline-block;
      width: 60rpx;
      height: 60rpx;
    }
  }
}
</style>