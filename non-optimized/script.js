$(document).ready(function () {
    var imageConvert = function(imageOld){
	imageOld.each(function(){
				this.onload = function() {
					$(this).css({'height':'auto', 'position': 'absolute', 'left': '0'});
					$(this).parent().css({'position': 'relative'});
					var height = $(this).height();
					var width = $(this).width();
					var widthParent = $(this).parent().width();
					var heightParent = $(this).parent().height();
					var divide = width/height;
					var heightCurrent = widthParent/divide;
					var widthCurrent = divide * heightParent;
					if(heightCurrent > heightParent){
						var top = -(heightCurrent - heightParent)/2;
						$(this).css({'top': top});
					}						
					else {
						var left = -(widthCurrent - widthParent)/2;
						widthCurrent = divide*heightParent;
						$(this).css({'left':left, 'height':heightParent, 'width':widthCurrent});
					}
				};
				this.onload();
			});
};
    
    setTimeout(function(){
        imageConvert($('.our-works img'));
    }, 1000);
    $('.our-works a > img').parent().fancybox({
        type: 'image'
    });
});