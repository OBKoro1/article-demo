/**
 * Created by 保、koro1 on 2017/3/18/018.
 */







function leftBtn() {
    var leftBtn=confirm("确定要退出游戏吗？你这种行为，用专业术语叫挂机狗");
    if(leftBtn==true){
        window.location.href="task13-1.html";
    }
}

//获取dom并赋值var
var oPlayerNum = document.getElementById("player");//玩家总人数
var osliderBlock = document.getElementById("slider");//滑块的值
function gameNo() {
    alert("不知道就多玩几次啊，这么小小年纪就只知道看攻略，以后你长大了可怎么办？别老看攻略，听话，乖")
}

//设置玩家人数取值范围。
function on_change() {
    if (oPlayerNum.value >= 6 && oPlayerNum.value <= 18) {
        osliderBlock.value=oPlayerNum.value ;
    } else {
        alert("请输入正确的人数6~18");
        oPlayerNum.value=6;
        osliderBlock.value=6;
    }
}
//鼠标移动除服事件，滑块赋值给玩家人数。
function moveMouse() {
    oPlayerNum.value=osliderBlock.value;
}

//加减按钮函数。
function less() {
    oPlayerNum.value--;
    if (oPlayerNum.value<6){
        alert("人太少了，再找几个小伙伴来吧");
        oPlayerNum.value=6;
    }
    else {
        osliderBlock.value=oPlayerNum.value;//  将玩家人数赋值给滑轮的值
    }
}
function plus() {
    oPlayerNum.value++;
    if (oPlayerNum.value>18){
        alert("人太多了，可以分一批人再开一局");
        oPlayerNum.value=18;
    }
    else {
        osliderBlock.value=oPlayerNum.value;
    }
}

/*水民词组和杀手词组*/
var oPeople=document.getElementById("js-2-1section2-input1").value;//水民input框的值
var okiller=document.getElementById("js-2-1section2-input2").value;//杀手input框的值
var DBind1 = new DBind( 1 );
var DBind2 = new DBind( 2 );//原生js双向绑定
//随机词组按钮


function getValue1() {//失去焦点的时候，触发函数
    var wordGroup1="水民词组："+document.getElementById("js-2-1section2-input1").value;//拼接字符串
    console.log(wordGroup1);
   sessionStorage.wodGroup1=wordGroup1;//存在sessionStorage
    console.log('sessionStorage存放数据'+sessionStorage.wodGroup1);
}
    function getValue2() {
     var wordGroup2="杀手词组："+document.getElementById("js-2-1section2-input2").value;
        console.log(wordGroup2);
   sessionStorage.wodGroup2=wordGroup2;
   console.log('sessionStorage存放数据'+sessionStorage.wodGroup2);
    return wordGroup2;
}



/*ul玩家列表*/
var oShow = document.getElementById("roleShow");//设置上面的方框
var aTotal = [];
function hit() {//运行点击设置按钮
    aTotal.length=oPlayerNum.value;
    oShow.innerHTML="";
    akillNum=Math.floor(aTotal.length/4);//设置杀手人数
    num();
}
function num() {
    for (var i = 0; i < aTotal.length; i++) {
        aTotal[i] = "水民";//    先设置所有玩家为水民
    }
    for (var random,a=0;a<akillNum;a++){
    do{
        random=Math.floor(Math.random()*(aTotal.length));
    //   用do。。。while函数设置杀手不满足原数组中有杀手时候，跳出循环，得到数值
    }while(aTotal[random]==="杀手");
        aTotal[random]="杀手";
    }
     Group=aTotal;
    player(aTotal);

}
var screen = document.getElementById("roleShow");

function player(aTotal) {
     var aaa ="";
    for (var i=0;i<aTotal.length;i++){
        aaa=aaa+"<span class='role-li'>"+(i+1)+"号身份："+aTotal[i]+"</span>";
        //写出aaa替代原来的方框，aaa=aaa（原来的aaa）+新建的一个aaa
    }
    screen.innerHTML=aaa;
    playerNext=JSON.stringify(aTotal.length);
    sessionStorage.all=playerNext;//玩家总人数传参
    killNext=JSON.stringify(akillNum);
    sessionStorage.kill = killNext;//杀手人数传参
    console.log("玩家总人数"+playerNext);
    console.log("杀手人数"+killNext);
    sessionStorage.allNum=Group;
    console.log("玩家人数列表"+Group);
}


/*foot按钮*/
function btn() {
    console.log(oPeople,okiller);
    if (oPeople==''&&okiller==''){
        alert("你还没有选好水民和杀手的词组呢，别着急")
    }else {
        if (oPlayerNum.value != aTotal.length){//当玩家总人数和玩家配比方框的人数不相等时，弹出提示框
            alert("你还没有配置玩家的身份呢，别着急。")
        }else {
            window.location.href="newHtml.html";//相等时，页面跳转。
        }
    }
}




//随机杀手和水民词组按钮
function randomGroup() {
    var oGroup=[];//存放所有词汇的词组、
    for(var i=0;i<20;i++){
        oGroup[i]={};//数组中的每个元素都是一个对象
    }
    oGroup[0].people="降龙十八掌";
    oGroup[0].killer="九阴白骨爪";
    oGroup[1].people="快乐大本营";
    oGroup[1].killer="天天向上";
    oGroup[2].people="零花钱";
    oGroup[2].killer="生活费";
    oGroup[3].people="爷爷";
    oGroup[3].killer="姥爷";
    oGroup[4].people="同学";
    oGroup[4].killer="同桌";
    oGroup[5].people="小沈阳";
    oGroup[5].killer="宋小宝";
    oGroup[6].people="成吉思汗";
    oGroup[6].killer="努尔哈赤";
    oGroup[7].people="谢娜张杰";
    oGroup[7].killer="邓超孙俪";
    oGroup[8].people="新年";
    oGroup[8].killer="跨年";
    oGroup[9].people="保安";
    oGroup[9].killer="保镖";
    oGroup[10].people="眉毛";
    oGroup[10].killer="胡须";
    oGroup[11].people="端午节";
    oGroup[11].killer="中秋节";
    oGroup[12].people="摩托车";
    oGroup[12].killer="电动车";
    oGroup[13].people="高跟鞋";
    oGroup[13].killer="增高鞋";
    oGroup[14].people="汉堡包";
    oGroup[14].killer="肉夹馍";
    oGroup[15].people="牛奶";
    oGroup[15].killer="豆浆";
    oGroup[16].people="唇膏";
    oGroup[16].killer="口红";
    oGroup[17].people="公交";
    oGroup[17].killer="地铁";
    oGroup[18].people="结婚";
    oGroup[18].killer="订婚";
    oGroup[19].people="面包";
    oGroup[19].killer="蛋糕";
    //词汇出自——————谁是卧底的词汇大全
    var oGroupNum=Math.floor(Math.random()*20);
    oPeople=oGroup[oGroupNum].people;
    okiller=oGroup[oGroupNum].killer;
    console.log(oPeople,okiller);
    DBind1.set( "peopleName", oPeople );//前面是html格式，后面是要在html页面显示的内容，字符串的话要加双引号
    DBind2.set( "killName", okiller );
    getValue1();
    getValue2();//调用函数，存储词组数据.

}

/*以下是js原生的双向绑定*/
function DataBinder( object_id ) {
    // Create a simple PubSub object
    var pubSub = {
            callbacks: {},

            on: function( msg, callback ) {
                this.callbacks[ msg ] = this.callbacks[ msg ] || [];
                this.callbacks[ msg ].push( callback );
            },

            publish: function( msg ) {
                this.callbacks[ msg ] = this.callbacks[ msg ] || [];
                for ( var i = 0, len = this.callbacks[ msg ].length; i < len; i++ ) {
                    this.callbacks[ msg ][ i ].apply( this, arguments );
                }
            }
        },

        data_attr = "data-bind-" + object_id,
        message = object_id + ":input",
        timeIn;

    changeHandler = function( evt ) {
        var target = evt.target || evt.srcElement, // IE8 compatibility
            prop_name = target.getAttribute( data_attr );

        if ( prop_name && prop_name !== "" ) {
            clearTimeout(timeIn);
            timeIn = setTimeout(function(){
                pubSub.publish( message, prop_name, target.value );
            },50);

        }
    };

    // Listen to change events and proxy to PubSub
    if ( document.addEventListener ) {
        document.addEventListener( "input", changeHandler, false );
    } else {
        // IE8 uses attachEvent instead of addEventListener
        document.attachEvent( "oninput", changeHandler );
    }

    // PubSub propagates changes to all bound elements
    pubSub.on( message, function( evt, prop_name, new_val ) {
        var elements = document.querySelectorAll("[" + data_attr + "=" + prop_name + "]"),
            tag_name;

        for ( var i = 0, len = elements.length; i < len; i++ ) {
            tag_name = elements[ i ].tagName.toLowerCase();

            if ( tag_name === "input" || tag_name === "textarea" || tag_name === "select" ) {
                elements[ i ].value = new_val;
            } else {
                elements[ i ].innerHTML = new_val;
            }
        }
    });

    return pubSub;
}
function DBind( uid ) {
    var binder = new DataBinder( uid ),

        user = {
            // ...
            attributes: {},
            set: function( attr_name, val ) {
                this.attributes[ attr_name ] = val;
                // Use the `publish` method
                binder.publish( uid + ":input", attr_name, val, this );
            },
            get: function( attr_name ) {
                return this.attributes[ attr_name ];
            },

            _binder: binder
        };

    // Subscribe to the PubSub
    binder.on( uid + ":input", function( evt, attr_name, new_val, initiator ) {
        if ( initiator !== user ) {
            user.set( attr_name, new_val );
        }
    });

    return user;
}

