<template>
  <view class="body">
    <view class="top">
      <textarea :auto-focusd="true" placeholder="好的标题能吸引更多人的注意(最多20字)" placeholderStyle="color:#989799" />
      <textarea :auto-focusd="true" placeholder="好的表述能让供图者正确理解需求(最多140个字)" placeholderStyle="color:#989799;margin-top:90rpx" />
    </view>
    <view class="middle">
      <image v-if="imgSrc" :src="imgSrc"></image>
      <view @tap="onGetImgClick">添加需求封面</view>
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
      ],

      imgSrc:''
    }
  },
  methods:{
    addwanted(){
      console.log('发布需求')
    },
    onGetImgClick(){
      const that = this
      wx.chooseImage({
        count:1, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
        success: function(res) {
            console.log('chooseImage-----》》》》》》》》', res);
            //判断图片格式
            let tempStr = res.tempFilePaths[0].split('.');
            let lowerStr = tempStr[1].toLowerCase();
            if (lowerStr != 'png' && lowerStr !== 'jpg' && lowerStr !== 'jpeg') {
                wx.showToast({
                    title: '请上传PNG、JPG、JPEG格式的图片',
                    icon: 'none',
                    duration: 3000
                });
                return;
            }
            console.log(res.tempFiles,'beforre--------');
            if(res.tempFiles[0]['size']>20*1024*1024){
                uni.showToast({
                    title: '图片大小不能超过20M',
                    icon: 'none',
                    duration: 3000
                });
                return;
            }
            wx.showLoading({
                title:'上传中...'
            })
            if(res.tempFiles[0]['size']<5*1024*1024){ //图片小于5M不压缩，大于5M压缩
                that.uploadImgFile(res.tempFilePaths[0],that)
            }else{
                wx.compressImage({
                  src: res.tempFilePaths[0],
                  quality: 80,
                  success: res => {
                      console.log(res,'=========res');
                    that.uploadImgFile(res.tempFilePath,that)
                  }
                })
            }
        }
      })
    },
    uploadImgFile(filePath,that){
        wx.uploadFile({
            url: '../../static/uploadImage',  // 这里有问题
            filePath: filePath,
            name: 'file',
            formData: {
                file: filePath
            },
            header: {
                'Content-Type': 'multipart/form-data',
                'token': 'token'
            },
            success: response => {
                let res = JSON.parse(response.data);
                
                console.log(res, '----res');
                if (res.code == 200) {
                    that.showInfo = res.data
                    console.log('请求成功_______________', res);
                    // 调用下载接口
                    that.downloadImg(res.data.attachId);                
                }
            },
            fail: err => {
                wx.hideLoading()
                wx.showToast({
                    title: '上传失败,请重试',
                    icon: 'none',
                    duration: 3000
                });
                console.log('请求失败_______________', err);
            }
        })
     },
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
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    .listitem{
      padding: 10rpx 20rpx;
      font-size: 32rpx;
      background-color:rgb(233, 240, 240);
      margin: 0 10rpx 10rpx 0;
      border-radius: 50px;
    }
  }
}
</style>