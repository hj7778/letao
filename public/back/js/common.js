//进度条，公共特效

//Nprogress.start();


//延迟结束
//setTimeout(function(){
      //Nprogress.done();

//},1000);


//ajax全局事件处理函数，调用进度条

$(document).ajaxStart(function(){
        Nprogress.start();
});

$(document).ajaxStop(function(){
     

	 //模拟网络延迟
	 setTimeout(function(){
	       Nprogress.done();
	 },500);

});