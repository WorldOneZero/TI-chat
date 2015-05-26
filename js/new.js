
	
  	var data = [];
    //全局变量 新建China数据库类
    var strs = "china";  //str可以作为传入值 

function loadIn(str){

	//获取传进来的房间ID进行查询初始化,获取
	var China = AV.Object.extend(str);
    var query = new AV.Query(str);
    query.descending("count");
    query.limit(10);
    query.find({
  	success: function(results) {
  		//把获取到的数据存入data
       	for (var i = results.length-1; i>=0; i--) {
      		var object = results[i];
        	var x = {'text':object.get('text')};
       		data.push(x);

   		}
    //初始化界面
	var a = document.getElementById("alldanmu");
    for(var i =0;i<data.length;i++){
        var box = document.createElement('div');
        box.className = 'box';
        box.style.left=getRandomLeft();
        var text = document.createElement('p');
        text.className = 'text';
        text.style.fontFamily = getRandomFont();
        text.style.color =getRandomColor();
        text.style.fontSize = GetRandomNum(20,30);
        text.innerHTML = data[i].text;
        box.appendChild(text);
        a.appendChild(box);
        if($("#alldanmu").children().last().css("left")=="-300px"){
            $("#alldanmu").children().last().animate({left:"300px"},6000)}
            else{$("#alldanmu").children().last().animate({left:"-300px"},6000)}
    $("#alldanmu").children().last().fadeOut(600);
    $("#alldanmu").children().eq(i).css("top",50*i+50);
//        $("#alldanmu").children().eq(i).animate({"top":50*i+50},800);
    }
      
    //循环计时任务,查询数据库是否更新并获取最新数据 
    var  J = results[0].get("count")+1;
	setInterval( 
		function countSecond(){　
    		query.equalTo("count",  J);
    		query.first({
  				success: function(object) {  
    				if( JSON.stringify(object)!=undefined){
      					J++;
        				var b = {'text':object.get("text")};
        				data.push(b);
        				data.shift();
        				up (300);

  					}
    		}
    ,
  				error: function(error) {
    			// alert("JSON.stringify(object)=undefined");
  				}
			});
　 
		}
	,1000);
 
  //任务结束--------------------------任务结束
     


  

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
 
});  

}  //loadIn结尾
    //获取即时弹幕
    function getdanmu() {
      	var a = $("#bibi").val(); //获取输入行信息
       	if(a.length>10){ 
       		alert("最多输入十五个字符");
       	}else if(a.length==0) {
       		alert("至少输入一个字符");
       	}else{
       		var China = AV.Object.extend(strs);     
      		var one = {'text':a,'type':'null'};
      		var person = new China();
      		person.set("text", a);
      		person.save();
       	}
      

    }



    //清除输入行
   $(document).ready(function(){
    $(".btn").click(function(){
      $("#bibi").val("");
    })
   })
    $(document).ready(function(){
        $("#openroom").click(function(){
            var a = $("#forroom").val();
            alert(a);

        })
    })
    $(document).ready(function(){
        $("#beinroom").click(function(){
            var a = $("#forroom").val();
            alert(a);

        })
    })
    //字体随机函数
    function getRandomFont(){
        var a = new Array();
        a[0]="PMingLiU ";
        a[1]="MingLiU   ";
        a[2]="DFKai-SB ";
        a[3]="SimHei  ";
        a[4]="SimSun  ";
        a[5]="KaiTi  ";
        a[6]="FangSong_GB2312  ";
        a[7]="SimSun-ExtB ";
        a[8]="LiHei Pro Medium ";
        a[9]="Microsoft JhengHei  ";
        return a[Math.floor(Math.random()*9)];
    }
    //随机top
    function getRandomTop(){
        var a = new Array();
        a[0]="100px ";
        a[1]="200px";
        a[2]="300px";
        a[3]="400px";
        a[4]="500px ";
        a[5]="600px";
        a[6]="700px";
        a[7]="800px";
        a[8]="100px";
        return a[Math.floor(Math.random()*8)];
    }
    //随机数字大小
    function GetRandomNum(Min,Max)
    {
        var Range = Max - Min;
        var Rand = Math.random();
        return(Min + Math.round(Rand * Range))+"px";
    }
    //颜色随机函数
    function getRandomColor(){
        return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
    }
    //初始随机位置
    function getRandomLeft(){
        var a = new Array();
        a[0]="-300px ";
        a[1]="300px ";
        a[2]="-300px ";
        return a[Math.floor(Math.random()*2)];
    }
    //滚动
 function up(x){
        var len = data.length;
        var a = document.getElementById("alldanmu");
        var box = document.createElement('div');
        box.className = 'box';
        box.style.top = GetRandomNum(100,500);
        box.style.left=getRandomLeft();
        var text = document.createElement('p');
        text.className = 'text';
        text.style.fontFamily = getRandomFont();
        text.style.color =getRandomColor();
        text.style.fontSize = GetRandomNum(20,30);
        text.innerHTML =data[len-1].text;
        box.appendChild(text);
        a.appendChild(box);
        // $("#container").children().eq(9).css("top",'900px');
        // $("#alldanmu").children().animate({top:'-=50px'},x);
        $("#alldanmu").children().eq(0).remove();

        if($("#alldanmu").children().last().css("left")=="-300px"){
       $("#alldanmu").children().last().animate({left:"300px"},6000)}else{$("#alldanmu").children().last().animate({left:"-300px"},5000)}
       $("#alldanmu").children().last().fadeOut(600);

    }
