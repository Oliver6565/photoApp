<template>
<view class="body">
  <view class="bg">
    <image src='../../static/image/背景.png' mode="aspectFill"></image>
  </view>
  <view class="search">
    <image class='saomiao' src='../../static/image/扫描.png'></image>
    <input type="text" :focus="true" placeholder="热门搜索：拍摄技巧" />
  </view>
  <view class="time_box"><text class="time">2022-01-09</text></view>
  <view class="introduce_box"><view class="tag"># {{tagtxt}}</view></view>
  <view class="main">
    <view class="iconlist">
      <view class="iconitem">
        <image src='../../static/image/作品.png'></image><br />
        <view>作品</view>
      </view>
      <view class="iconitem">
        <image src='../../static/image/约拍.png'></image><br />
        <view>约拍</view>
      </view>
      <view class="iconitem">
        <image src='../../static/image/人像.png'></image><br />
        <view>摄影号</view>
      </view>
      <view class="iconitem">
        <image src='../../static/image/俱乐部.png'></image><br />
        <view>俱乐部</view>
      </view>
    </view>
    <!-- <button size="mini">按</button> -->
    <view class="tofee">
      <view class="smallwindow"> 
        <view class="match"><image src="../../static/image/赛事tag.png"></image>赛事评选</view>
        <view class="matchname">-- 梦境</view>
        <button size='mini'>立即参加</button>
      </view>
      
      <view class="tofeeright">
        <view class="fir">一些东西</view>
        <view class="sec">soaks</view>
      </view>
    </view>
  </view>
  
</view>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello ?!',
      tagtxt:'街景'
    }
  }
}
</script>

<style lang="less">
// .body{
//   padding: 30rpx ;
// }
.bg{
  position: fixed;
  top: 0;
  left: 0;
  z-index: -99;
}
.search{
  display: flex;
  padding:50rpx 30rpx 20rpx;
  align-items: center;
  justify-content: center;
  // height: 150rpx;
  .saomiao{
    width: 60rpx;
    height: 60rpx;
  }
  input{  
    border-radius: 50px;
    padding:10px 20px;
    margin-left:30px ;
    width:100%;
    background-color: #fff;
    opacity:0.7
  }
}
.time_box{
  padding: 0 30rpx;
  .time{
    float: right;
    font-size: 36rpx;
    color: white;
  }
}
.introduce_box{
  padding: 0 30rpx;
  margin: 128rpx 0 28rpx;
  .tag{
    color: #fff;
  }
}
.main{
  background-color: #fff;
  height: 500px;
  padding: 50rpx;
  border-radius: 50px 50px 0 0;
  .iconlist{
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .iconitem{
      image{
        width: 70rpx;
        height: 70rpx;
      }
    }
  }
  .tofee{
    padding: 30rpx 0;
    display: flex;
    justify-content: space-between;
    .smallwindow{
      background-image: url(../../static/image/赛事.png);
      background-position: center;
      background-size: 100%;
      overflow: hidden;
      width: 300rpx;
      height: 300rpx;
      border-radius: 25px;
      padding: 10rpx 25rpx 10rpx 10rpx;
      .match{
        display: flex;
        align-items: center;
        justify-content: space-around;
        image{
          display: inline-block;
          width: 100rpx;
          height: 100rpx;
        }
        font-size: 42rpx;
        color: #fff;
        padding: 20rpx 0;
      }
      .matchname{
        padding-left:28rpx;
        color: antiquewhite;
      }
      button{
        // color: #fff;
        margin-top:36rpx;
        margin-left:20rpx;
        background-color: #96D7ED;
      }
    }
    .tofeeright{
      .fir{
        width: 200rpx;
        background-color: aliceblue;
      }
    }
  }

}
</style>>
