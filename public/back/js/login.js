//配置基于bootstrap的表单校验插件
$(function(){
    $('#login-form').bootstrapValidator({
		//校验图标
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
							}
					   
					   }
				  
				  
				  }	  
			
			}
	});  
});