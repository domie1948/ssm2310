
var projectName = '销售管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.jsp'
},

{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '买卖中心',
	url: './pages/maimaizhongxin/list.jsp'
}, 
{
	name: '购买指南',
	url: './pages/goumaizhinan/list.jsp'
}, 
{
	name: '广告信息',
	url: './pages/guanggaoxinxi/list.jsp'
}, 

{
	name: '论坛信息',
	url: './pages/forum/list.jsp'
}, 
{
	name: '留言反馈',
	url: './pages/messages/list.jsp'
}
]

var adminurl =  "http://localhost:8080/jspmwr567/index.jsp";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"卖家用户","menuJump":"列表","tableName":"maijiayonghu"}],"menu":"卖家用户管理"},{"child":[{"buttons":["查看","修改","删除","查看评论"],"menu":"买卖中心","menuJump":"列表","tableName":"maimaizhongxin"}],"menu":"买卖中心管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"购买指南","menuJump":"列表","tableName":"goumaizhinan"}],"menu":"购买指南管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"广告信息","menuJump":"列表","tableName":"guanggaoxinxi"}],"menu":"广告信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"游戏类型","menuJump":"列表","tableName":"youxileixing"}],"menu":"游戏类型管理"},{"child":[{"buttons":["查看","修改","删除","平台费用"],"menu":"购买订单","menuJump":"列表","tableName":"goumaidingdan"}],"menu":"购买订单管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"平台费用","menuJump":"列表","tableName":"pingtaifeiyong"}],"menu":"平台费用管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"论坛信息","tableName":"forum"}],"menu":"论坛信息"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"客服聊天","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","账号购买"],"menu":"买卖中心列表","menuJump":"列表","tableName":"maimaizhongxin"}],"menu":"买卖中心模块"},{"child":[{"buttons":["查看"],"menu":"购买指南列表","menuJump":"列表","tableName":"goumaizhinan"}],"menu":"购买指南模块"},{"child":[{"buttons":["查看"],"menu":"广告信息列表","menuJump":"列表","tableName":"guanggaoxinxi"}],"menu":"广告信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","删除","支付"],"menu":"购买订单","menuJump":"列表","tableName":"goumaidingdan"}],"menu":"购买订单管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"}],"frontMenu":[{"child":[{"buttons":["查看","账号购买"],"menu":"买卖中心列表","menuJump":"列表","tableName":"maimaizhongxin"}],"menu":"买卖中心模块"},{"child":[{"buttons":["查看"],"menu":"购买指南列表","menuJump":"列表","tableName":"goumaizhinan"}],"menu":"购买指南模块"},{"child":[{"buttons":["查看"],"menu":"广告信息列表","menuJump":"列表","tableName":"guanggaoxinxi"}],"menu":"广告信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["新增","修改","查看","删除"],"menu":"买卖中心","menuJump":"列表","tableName":"maimaizhongxin"}],"menu":"买卖中心管理"},{"child":[{"buttons":["审核","查看"],"menu":"购买订单","menuJump":"列表","tableName":"goumaidingdan"}],"menu":"购买订单管理"},{"child":[{"buttons":["查看","支付"],"menu":"平台费用","menuJump":"列表","tableName":"pingtaifeiyong"}],"menu":"平台费用管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"}],"frontMenu":[{"child":[{"buttons":["查看","账号购买"],"menu":"买卖中心列表","menuJump":"列表","tableName":"maimaizhongxin"}],"menu":"买卖中心模块"},{"child":[{"buttons":["查看"],"menu":"购买指南列表","menuJump":"列表","tableName":"goumaizhinan"}],"menu":"购买指南模块"},{"child":[{"buttons":["查看"],"menu":"广告信息列表","menuJump":"列表","tableName":"guanggaoxinxi"}],"menu":"广告信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"卖家用户","tableName":"maijiayonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
