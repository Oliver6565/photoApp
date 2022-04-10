<template>
  <view class="body">
    <form catchsubmit="formSubmit" catchreset="formReset">
        <view class="middle">
            <image v-if="imgSrc" :src="imgSrc" @tap="onGetImgClick"></image>
            <view >更换头像</view>
        </view>

        <view class="bottom">
            <view>
                <input class="" maxlength="10" placeholder="名字" />
            </view>
            <view>
                <textarea class="" maxlength="50" placeholder="个性签名" />
            </view>
        </view>
        <button size="mini" formType="submit">确定</button>
        <button size="mini" formType="reset">Reset</button>
    </form>


  </view> 
</template>

<script>
export default {
  data () {
    return {
      msg: '发布',
      imgSrc:'../../static/image/添加2.png'
    }
  },
  methods:{
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
    formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

    formReset(e) {
        console.log('form发生了reset事件，携带数据为：', e.detail.value)
        this.setData({
        chosen: ''
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
.middle{
  display: flex;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 2px solid rgb(233, 240, 240);
  font-size: 32rpx;
  image{
    margin-right: 20rpx;
    width: 60rpx;
    height: 60rpx;
  }
}
.bottom{
  font-size: 32rpx;
  view{
    border-bottom: 2px solid rgb(233, 240, 240);
    padding: 20rpx 0;
  }
  textarea{
      height: 110rpx;
      width: 100%;
  }
}
</style>