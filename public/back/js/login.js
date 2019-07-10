//配置基于bootstrap的表单校验插件
$(function(){
    $('#login-form').bootstrapValidator({
		//1.校验图标
           feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',//成功
    invalid: 'glyphicon glyphicon-remove',//失败
    validating: 'glyphicon glyphicon-refresh'//校验中
  },
         //配置字段校验
	        fields:{
                  username:{
				       validators:{
					        notEmpty:{
							       message:'用户名不能为空'
							},
                            stringLength:{
							       min: 2,
                                    max: 6,
                                   message:'用户名在2到6位之间'
							},
                             callback:{
							    message:'用户名不存在'
							}
					   
					   }
				  },
				  password:{
				       	       validators:{
					        notEmpty:{
							       message:'密码不能为空'
							},
                            stringLength:{
							       min: 6,
                                    max: 12,
                                   message:'密码在6到12位之间'
							},
								callback:{
							      message:'密码错误'
							}
					   
					   }
				  
				  
				  }	  
			
			}
 
	}); 



	            //2.阻止submit提交
           $('#login-form').on('success.form.bv',function(e){
		        e.preventDefault();
		   });
             //3.用ajax提交
			 $.ajax({
			     type: 'post',
                 url: '/employee/employeeLogin',
			     data: $('#login-form').serialize(),
				  dataType: 'json',
			      success: function(info){
		                 console.log(info);	
						 //判断
						 if (info.success) {
						    location.href = 'index.html';
						 }
						 if (info === 1000) {
						    $('#login-form').data('bootstrapValidator').updateStatus('username','INVALID','callback');
						 }
						 if (info === 1001) {
						      $('#login-form').data('bootstrapValidator').updateStatus('password','INVALID','callback');
						 }
						 
						 
						 
						 
				 }

			 });
          
		  //重置状态图标
		  $('[type="reset"]').click(function(){
		      $('#login-form').data('bootstrapValidator').resetForm();		  
		  });
       


});