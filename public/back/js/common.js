//��������������Ч

//Nprogress.start();


//�ӳٽ���
//setTimeout(function(){
      //Nprogress.done();

//},1000);


//ajaxȫ���¼������������ý�����

$(document).ajaxStart(function(){
        Nprogress.start();
});

$(document).ajaxStop(function(){
     

	 //ģ�������ӳ�
	 setTimeout(function(){
	       Nprogress.done();
	 },500);

});