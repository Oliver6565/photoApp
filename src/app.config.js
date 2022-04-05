export default defineAppConfig({
    pages: [
        'pages/index/index', 
        'pages/photos/photos',
        'pages/message/message',
        'pages/my/my'
    ],

    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },

    tabBar:{
        // color:'#fff',
        // selectedColor:'#000',
        // backgroundColor:'#B3EE3A',  # tabBar背景颜色
        borderStyle:'white',
        list:[
            {
                pagePath:'pages/index/index',
                iconPath:'static/image/星球.png',
                selectedIconPath:'static/image/选中星球.png'
            },
            {
                pagePath:'pages/photos/photos',
                iconPath:'static/image/摄像头.png',
                selectedIconPath:'static/image/选中摄像头.png'
            },
            // {   
            //     iconPath:'static/image/发布.png',
            // },
            {
                pagePath:'pages/message/message',
                iconPath:'static/image/消息.png',
                selectedIconPath:'static/image/选中消息.png'
            },
            {
                pagePath:'pages/my/my',
                iconPath:'static/image/个人.png',
                selectedIconPath:'static/image/选中个人.png'
            }
        ]
    },
    // condition:{
    //     current:0,
    //     list:[
    //         {

    //         }
    //     ]
    // }
})