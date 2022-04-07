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
    <view class="tofee">
      <view class="smallwindow"> 
        <view class="match"><image src="../../static/image/赛事tag.png"></image>赛事评选</view>
        <view class="matchname">-- 梦境</view>
        <button size='mini'>立即参加</button>
      </view>
      
      <view class="tofeeright">
        <view class="fir">暂时</view>
        <view class="sec">暂时</view>
      </view>
    </view>
    <view class="show">
      <view class="showlist">
        <navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
					关注
				</navigator>
				<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="navigator-hover">
					推荐
				</navigator>
      </view>
      <view class="showcontent">
        <view class="contentitem">
          <view class="top">
            <image src="../../static/image/头像1.png" mode="aspectFill"></image>
            <view>
              <view class="">HEARTBREACK</view>
              <view class="time">07.15 18:23</view>
            </view>
            <view class="guanzhu" :style="yiguanzhu" v-html='guanzhutext'  @tap='guanzhu'></view>
          </view>
          <view class="middle">
            <image src="../../static/image/show1.png" mode="aspectFill"></image>
            <image src="../../static/image/show2.png" mode="aspectFill"></image>
            <image src="../../static/image/show3.png" mode="aspectFill"></image>
          </view>
          <view class="bottom">
            <view class="tag">
              # 建筑
            </view>
            <view class="comment"></view>
            <view class="count"><image src="../../static/image/评论.svg"></image> 25 <image src="../../static/image/爱心.svg"></image> 268</view>
          </view>
        </view>
        <!-- <view class="contentitem">
          <view class="top">
            <image src="../../static/image/头像2.png" mode="aspectFill"></image>
            <view>
              <view class="">As it was</view>
              <view class="time">08.15 18:23</view>
            </view>
            <view class="guanzhu" @tap='guanzhu'>关注</view>
          </view>
          <view class="middle">
            <image src="../../static/image/show1.png" mode="aspectFill"></image>
            <image src="../../static/image/show2.png" mode="aspectFill"></image>
            <image src="../../static/image/show3.png" mode="aspectFill"></image>
          </view>
          <view class="bottom">
            <view class="tag">
              # 建筑
            </view>
            <view class="comment"></view>
            <view class="count"><image src="../../static/image/评论.svg"></image> 75 <image src="../../static/image/爱心.svg"></image> 868</view>
          </view>
        </view> -->
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
      tagtxt:'街景',
      yiguanzhu:{},
      guanzhutext:'关注'
    }
  },
  methods:{
    guanzhu(){
      this.$data.yiguanzhu={'background':'aliceblue','color':'#656566','text':'已关注'}
      this.$data.guanzhutext='已关注'
    }
  }
}
</script>

<style lang="less">
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
  padding: 50rpx;
  border-radius: 50px 50px 0 0;
  .iconlist{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color:#656566;
    .iconitem{
      image{
        width: 70rpx;
        height: 70rpx;
      }
    }
  }
  .tofee{
    padding: 50rpx 0;
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
      color: #656566;
      font-size: 36rpx;
      .fir{
        border-radius: 50px;
        padding: 20rpx;
        margin-bottom: 20rpx;      
        width: 250rpx;
        background-color: aliceblue;
      }
      .sec{
        border-radius: 50px;
        padding: 20rpx;
        margin-bottom: 20rpx;
        width: 150rpx;
        background-color: aliceblue;
      }
    }
  }
  .show{
    color: #656566;
    .showlist{
      display: flex;
      border-bottom: 1px solid #F0F0F0;
      navigator{
        margin:0 40px  20px 0;
      }
      .navigator-hover{
        color: #91B4FF;
        background-color: #fff; 
        opacity: 0.7;
      }
    }
    .showcontent{
      .contentitem{
        padding: 45rpx 0;
        border-bottom: 10px solid rgb(233, 240, 240);
        image{
          width: 100rpx;
          height: 100rpx;
          border-radius: 50%;
        }
        .top{
          display: flex;
          justify-content: space-between;
          .time{
            font-size: 34rpx;
            color: rgb(214, 205, 205);
          }
          .guanzhu{
            height: 100%;
            font-size: 34rpx;
            background-color: #559df4;
            color: #fff;
            padding:10px 30px;
            border-radius: 30px;
          }
        }
        .middle{
          margin:30rpx 0;
          display: flex;
          justify-content: space-between;
          image{
            width: 200rpx;
            height: 200rpx;
            border-radius: 15rpx;
          }
        }
        .bottom{
          font-size: 34rpx;
          display: flex;
          justify-content: space-between;
          .tag{
            background-color:antiquewhite;
            border-radius: 20px;
            padding: 5px 15px;
          }
          .comment{
            width: 40%;
            background-color:aliceblue;
            border-radius: 20px;
            padding: 5px 10px;
          }
          .count{
            display: flex;
            align-items: center;
            image{
              width: 45rpx;
              height: 45rpx;
            }
          }
        }
      }

    }
  }

}
</style>
