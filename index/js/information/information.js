//左侧轮播
var num = 0;
setInterval(function () {
    num++;
    if (num > 4) {
        $('.box-1-small ul').animate('');
        $('.box-1-small ul').css('top', 0);
        num = 1;
    }
    var l = -24 * num;
    $('.box-1-small ul').animate({
        top: l
    }, 500);
}, 2000);
//模拟后台数据:
var datasReload = [{
        td1: '[官方公告]',
        td2: '世外蓬莱”资料片测试服开放及激活码发放公告',
        td3: '10/22'
    },
    {
        td1: '[官方新闻]',
        td2: '《剑网3》世外蓬莱26号首测 鲲的奇遇来了',
        td3: '10/22'
    },
    {
        td1: '[官方公告]',
        td2: '10月22日例行维护取消公告',
        td3: '10/21'
    },
    {
        td1: '[官方新闻]',
        td2: '剑网3蓬莱预热活动25日开启 东海势力关系曝光',
        td3: '10/19'
    },
    {
        td1: '[官方新闻]',
        td2: '剑网3欧气昵称诞生 蓬莱策划交流会今晚8点开启',
        td3: '10/18'
    },
    {
        td1: '[官方公告]',
        td2: '10月18日更新内容公告',
        td3: '10/18'
    },
    {
        td1: '[官方公告]',
        td2: '10月18日例行维护公告（已完成）',
        td3: '10/17'
    },
    {
        td1: '[官方新闻]',
        td2: '锦鲤诞生了！ 最美好的祝福送给她',
        td3: '10/17'
    },
    {
        td1: '[官方新闻]',
        td2: '剑网3“大唐锦鲤”今日诞生 蓬莱策划交流明晚开启',
        td3: '10/17'
    },
    {
        td1: '[官方新闻]',
        td2: '剑网3蓬莱直播交流会18日开启',
        td3: '10/16'
    },
    {
        td1: '[官方新闻]',
        td2: '传承东方服饰美学 剑网3全新国风主题礼盒上线',
        td3: '10/15'
    },
    {
        td1: '[官方公告]',
        td2: '10月15日更新内容公告',
        td3: '10/15'
    },
    {
        td1: '[官方公告]',
        td2: '10月15日例行维护公告（已完成）',
        td3: '10/14'
    },
    {
        td1: '[官方新闻]',
        td2: '郭大侠接受专访 独家爆料剑网3IP新内容',
        td3: '10/12'
    },
    {
        td1: '[官方新闻]',
        td2: '《剑网3》参与金翎奖评选 动画同名专辑上线',
        td3: '10/12'
    },
    {
        td1: '[官方新闻]',
        td2: '剑网3重阳庆典挂件亮相 大唐锦鲤逆天礼品单公布',
        td3: '10/11'
    },
    {
        td1: '[官方公告]',
        td2: '10月11日更新内容公告',
        td3: '10/11'
    },
    {
        td1: '[官方公告]',
        td2: '10月11日例行维护公告（已完成）',
        td3: '10/10'
    },
]
var datasMedia = [{
        td1: '[媒体]',
        td2: '【52PK】剑网3九周年庆典回顾',
        td3: '08/30'
    },
    {
        td1: '[媒体]',
        td2: '掌上头条 新浪《剑网3》微博游戏专区上线',
        td3: '05/10'
    },
    {
        td1: '[媒体]',
        td2: '17173:战兽山隐藏剧情任务解密全攻略',
        td3: '03/22'
    },
    {
        td1: '[媒体]',
        td2: '17173:精选捏脸第六期',
        td3: '02/05'
    },
    {
        td1: '[媒体]',
        td2: '【52PK】MMO吃鸡 龙门绝境开启生存玩法新格局',
        td3: '01/25'
    },
    {
        td1: '[媒体]',
        td2: '[3DM]策划专访：龙门绝境只是生存模式探索的第一步',
        td3: '01/24'
    },
    {
        td1: '[媒体]',
        td2: '【多玩】剑网3龙门绝境玩法评测',
        td3: '01/22'
    },
    {
        td1: '[媒体]',
        td2: '【妖气山】剑网3精选捏脸 第三期',
        td3: '01/18'
    },
    {
        td1: '[媒体]',
        td2: '【J3时刻】第十五期：大吉大利，香酥烧鸡',
        td3: '01/15'
    },
    {
        td1: '[媒体]',
        td2: '【妖气山】全体型捏脸推荐第一期',
        td3: '01/05'
    },
    {
        td1: '[媒体]',
        td2: '17173：《剑网3》重制版独家礼包领取',
        td3: '12/29'
    },
    {
        td1: '[媒体]',
        td2: '178:新阵营日常简介',
        td3: '12/27'
    },
    {
        td1: '[媒体]',
        td2: '52PK：媒体测评：低端显卡也能流畅体验',
        td3: '12/22'
    },
    {
        td1: '[媒体]',
        td2: '52PK:五块钱节目组带你认师门—七秀',
        td3: '12/21'
    },
    {
        td1: '[媒体]',
        td2: '17173：“纵江湖·换新颜”活动投票开启',
        td3: '12/19'
    },
    {
        td1: '[媒体]',
        td2: '178：寻找彩蛋时不可错过的沿途风景',
        td3: '12/15'
    },
    {
        td1: '[媒体]',
        td2: '【官方攻略团】10人狼牙堡·战兽山视频攻略',
        td3: '12/14'
    },
    {
        td1: '[媒体]',
        td2: '【官方攻略团】10人狼牙堡·战兽山简易攻略',
        td3: '12/13'
    },
]
var datasAct = [{
        td1: '20181018020640448.jpg',
        td2: '世外蓬莱资料片内测资格申请',
        td3: '10/23',
        td4: '世外蓬莱新资料片内测资格开抢啦~~'
    },
    {
        td1: '20181015100546585.jpg',
        td2: '中华美学引领风潮 鲤跃龙门梦回大唐',
        td3: '10/14',
        td4: '10月15日7点—11月9日7点侠士在游戏全区全服充值时间及消耗通宝金额将累积计算，其总和达到相应额度时，即可免费领取精美腰部、背部挂件，以及奇遇坐骑【飞花镂月】！此外，10月15日7点—10月18日7点，更有150%积分回馈！'
    },
    {
        td1: '20181015101345892.jpg',
        td2: '2000万人民币回馈 免费直升90级（已结束）',
        td3: '11/02',
        td4: '10月19日7点-11月2日，2000万人民币通宝回馈亿万剑侠迷'
    },
    {
        td1: '20181015101510113.jpg',
        td2: '新角色养成（已结束）',
        td3: '11/02',
        td4: '8月27日—10月26日，新建角色成就达到一定要求时可获得华美披风、红发、外装等奖励！'
    },
    {
        td1: '20181015112316220.jpg',
        td2: '侠义商店限时开放 日常额外奖宝箱（已结束）',
        td3: '09/02',
        td4: '日常额外奖励【安史之乱·福禄宝箱】，侠义值商人精美挂件再次上架！'
    },
    {
        td1: '20181017021303364.jpg',
        td2: '版本福利 日常奖励全翻倍（已结束）',
        td3: '06/05',
        td4: '小橙武日常、大战、茶馆、洛阳日常、据点贸易日常奖励全部翻倍！'
    },
    {
        td1: '20181017043507319.jpg',
        td2: '充值促销 滑翔独轮车免费送（已结束）',
        td3: '06/05',
        td4: '充值送豪礼，精美腰部背部挂件、酷炫滑翔独轮车免费领！'
    },
]
//循环动态创建[最新]
for (var i = 0; i < datasReload.length; i++) {
    var datas = datasReload[i];
    $('<li></li>').appendTo('.newsbody-reload .content-re').addClass('reloadli' + i);
    var reloadh6 = $('<h6"></h6>').appendTo('.reloadli' + i).addClass('reloadh6');
    $(reloadh6).text(datas.td1);
    var reloada = $('<a href="#"></a>').appendTo('.reloadli' + i).addClass('reloada');
    $(reloada).text(datas.td2);
    var reloadem = $('<em></em>').appendTo('.reloadli' + i).addClass('reloadem');
    $(reloadem).text(datas.td3);
}
$('<span></span>').prependTo('.newsbody-reload .content-re li').addClass('item');
//筛选后台数据
//循环判断是官方新闻还是[官方公告]:追加至新的数组newsarrs中/数组noticearrs中
var newsarrs = [];
var noticearrs = [];
for (var j = 0; j < datasReload.length; j++) {
    var datas = datasReload[j];
    if (datas.td1 == '[官方新闻]') {
        newsarrs.push(datas);
    } else if (datas.td1 == '[官方公告]') {
        noticearrs.push(datas);
    }
}
//循环动态创建[新闻]
for (var n = 0; n < newsarrs.length; n++) {
    var arr = newsarrs[n];
    $('<li></li>').appendTo('.newsbody-news .content-news').addClass('newsli' + n);
    var newsh6 = $('<h6"></h6>').appendTo('.newsli' + n).addClass('newsh6');
    $(newsh6).text(arr.td1);
    var newsa = $('<a href="#"></a>').appendTo('.newsli' + n).addClass('newsa');
    $(newsa).text(arr.td2);
    var newsem = $('<em></em>').appendTo('.newsli' + n).addClass('newsem');
    $(newsem).text(arr.td3);
}
$('<span></span>').prependTo('.newsbody-news .content-news li').addClass('item');
//循环动态创建[公告]
for (var m = 0; m < noticearrs.length; m++) {
    var brr = noticearrs[m];
    $('<li></li>').appendTo('.newsbody-notice .content-not').addClass('noticeli' + m);
    var noticeh6 = $('<h6"></h6>').appendTo('.noticeli' + m).addClass('noticeh6');
    $(noticeh6).text(brr.td1);
    var noticea = $('<a href="#"></a>').appendTo('.noticeli' + m).addClass('noticea');
    $(noticea).text(brr.td2);
    var noticeem = $('<em></em>').appendTo('.noticeli' + m).addClass('noticeem');
    $(noticeem).text(brr.td3);
}
$('<span></span>').prependTo('.newsbody-notice .content-not li').addClass('item');
//循环动态创建[媒体]
for (var l = 0; l < datasMedia.length; l++) {
    var medatas = datasMedia[l];
    $('<li></li>').appendTo('.newsbody-media .content-med').addClass('mediali' + l);
    var mediah6 = $('<h6"></h6>').appendTo('.mediali' + l).addClass('mediah6');
    $(mediah6).text(medatas.td1);
    var mediaa = $('<a href="#"></a>').appendTo('.mediali' + l).addClass('mediaa');
    $(mediaa).text(medatas.td2);
    var mediaem = $('<em></em>').appendTo('.mediali' + l).addClass('mediaem');
    $(mediaem).text(medatas.td3);
}
$('<span></span>').prependTo('.newsbody-media .content-med li').addClass('item');
//循环动态创建[活动]
//公共地址:
var id = 'images/information/';
for (var s = 0; s < datasAct.length; s++) {
    var acdatas = datasAct[s];
    $('<li class="clearfix"></li>').appendTo('.newsbody-active .content').addClass('actli' + s);
    $('<div></div>').appendTo('.actli' + s).addClass('actpic' + s);
    $('.actpic' + s).addClass('fl');
    $('<a href="#"></a>').appendTo('.actpic' + s).addClass('acta1' + s);
    $('<img>').appendTo('.acta1' + s).attr('src', id + acdatas.td1);

    $('<div></div>').appendTo('.actli' + s).addClass('acttxt' + s);
    $('.acttxt' + s).addClass('acttxt fr');
    var acta2 = $('<a href="#"></a>').appendTo('.acttxt' + s);
    $(acta2).text(acdatas.td2);
    var acti = $('<p></p>').appendTo('.acttxt' + s);
    $(acti).text(acdatas.td3);
    var actspan = $('<span></span>').appendTo('.acttxt' + s);
    $(actspan).text(acdatas.td4);
}
// 右侧新闻部分的切换
$('.newstab ul li').eq(0).siblings().css('color', '#444').end().css('color', '#e86656');
$('.newsbody>div').eq(0).siblings().css('display', 'none').end().css('display', 'block');
var isOK = true;
$('.newstab ul').on('click', 'li', function () {
    var temp = $(this).index();
    $(this).siblings().css('color', '#444').end().css('color', '#e86656');
    $('.newsbody>div').eq(temp).siblings().css({'display': 'none'}).end().css('display', 'block');
    $('.jump ul').eq(temp).css('padding-bottom', 0);
    //判断右侧新闻部分的内容大盒子的高度是否>930px,
    var h = $('.newsmain').height();
    if (h < 567){
        $('.jump ul').css('padding-bottom', 430);
    } else if (h >= 567) {
        $('.jump ul').css('padding-bottom', 22);
    };
})