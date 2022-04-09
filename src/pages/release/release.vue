<template>
  <view class="body">
    <view class="top">
      <textarea :auto-focusd="true" placeholder="好的标题能吸引更多人的注意(最多20字)" placeholderStyle="color:#989799" />
      <textarea :auto-focusd="true" placeholder="好的表述能让供图者正确理解需求(最多140个字)" placeholderStyle="color:#989799;margin-top:90rpx" />
    </view>
    <view class="middle">
      <image src="../../static/image/添加.png" @tap="addwanted"></image>
      <view>添加需求封面</view>
    </view>

    <view class="bottom">
      <view>
        悬赏方式 *
      </view>
      <view>
       图片分类
      </view>
      <view class="taglist">
        <view class="listitem" v-for="item in taglist" :key="item.index">
          {{item.name}}
        </view>
      </view>
    </view>


  </view> 
</template>

<script>
export default {
  data () {
    return {
      msg: '发布',
      taglist:[
        {name:'风景'},
        {name:'建筑'},
        {name:'人文'},
        {name:'汉服'},
        {name:'美食'},
        {name:'美食'},
        {name:'书画'},
        {name:'静物'},
        {name:'航拍'},
        {name:'植物'}
      ]
    }
  },
  methods:{
    addwanted(){
      console.log('发布需求')
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
  textarea:nth-child(1){
      padding:20rpx 0rpx;
      width: 100%;
      height: 40rpx;
      border-bottom: 2px solid rgb(233, 240, 240);
      font-size: 30rpx;
  }
  textarea:nth-child(2){
      padding:20rpx 0rpx;
      width: 100%;
      height: 120rpx;
      border-bottom: 2px solid rgb(233, 240, 240);
      font-size: 30rpx;
  }    
}
.middle{
  padding: 30rpx 0;
  border-bottom: 2px solid rgb(233, 240, 240);
  font-size: 36rpx;
  height: 100rpx;
  image{
    margin-right: 20rpx;
    width: 100rpx;
    height: 100rpx;
    float: left;
  }
}
.bottom{
  font-size: 36rpx;
  view{
    border-bottom: 2px solid rgb(233, 240, 240);
    padding: 20rpx 0;
  }
  .taglist{
    // display: flex;
    // justify-content: space-around;
    .listitem{
      padding: 10rpx 20rpx;
      font-size: 32rpx;
      background-color:rgb(233, 240, 240);
      margin-right: 20rpx;
      border-radius: 50px;
    }
  }
}
</style>