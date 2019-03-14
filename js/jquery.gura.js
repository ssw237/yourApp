(function($){
		//.gura()라는 동작 정의하기
		$.fn.won=function(options){
			//default 값 정의하기
			var settings=$.extend({
				msg:"안녕! 나는 gura야!",
				width:"200px",
				height:"200px"
			},options);

			this
			//이게 옵션
			.text(settings.msg)
			//이게 옵션
			// .text("안녕! 나는 Gura야")
			.css("width",settings.width)
			.css("height",settings.height)
			.css("border","10px solid red")
			.click(function(){
				$(this).animate({marginLeft:"+=100px"});
			});
			//chain형태로 동작 가능하게 하기
			return this;
		};
	})(jQuery);