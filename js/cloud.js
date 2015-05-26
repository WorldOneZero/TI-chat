//获取最新的十条弹幕
function getAllDanmu(name) {
	var x = []; 
	// var name = AV.Object.extend(names);
    var query = new AV.Query(name);
    query.descending("count");
    query.limit(10);
    query.find({
  success: function(results) {
    alert("getAllDanmu Successfully retrieved " + results.length + " scores.");
    // Do something with the returned AV.Object values
        
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      
      	data.push({'text':object.get('text')});
       
    }

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
  
}
//登入时获取初始弹幕数量,返回int
function getNumOfDanmu(name){
	var num ;
	var query = new AV.Query(name);
	// query.equalTo("playerName", "Sean Plott");
	query.descending("count");
	query.first({
  success: function(object) {
    this.num =  object.get("count");

    alert("Successfully fuck " + this.num + " scores.");
    

   // Successfully retrieved the object.
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
	
	
}
function Refresh(){


}


//调用单条的数据函数,返回string
function getPerDanmu(num){
	//var name = AV.Object.extend(names);
	var text;
    var query = new AV.Query(str);
    query.equalTo("count", num);
    query.first({
  success: function(object) {
  	text = object.get("text");
    return // Successfully retrieved the object.
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

	return text;
}



// var query = new AV.Query("str");
// 	query.equalTo("count",  3);
// 	query.find({
//   	success: function(object) { 
//         var one = {'text':object.get("text")};
//     },
//   	error: function(error) {
//  	alert("Error: " + error.code + " " + error.message);
//   }
// });
// 	如果数据库里没有count值为3的数据,为什么还会执行success里的语句啊?
//存入单条数据


//不停查询是否有新数据
