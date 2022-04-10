export default defineAppConfig({
    pages: [
        'pages/index/index', 
        'pages/square/square',
        'pages/message/message',
        'pages/my/my',
        'pages/release/release',
        'pages/match/match',
        'pages/wanted/wanted',
        'pages/setup/setup',
        'pages/other/other',
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
                pagePath:'pages/square/square',
                iconPath:'static/image/广场.png',
                selectedIconPath:'static/image/选中广场.png'
            },
            {   
                pagePath:'pages/release/release',
                iconPath:'static/image/发布.png',
                selectedIconPath:'static/image/发布.png'
            },
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
    //             path:'pages/match/match',
    //             // query:
    //         }
    //     ]
    // }
})