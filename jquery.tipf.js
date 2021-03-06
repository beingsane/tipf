(function($) {
    $.fn.tipf = function() {
        this.mouseover(function (){
            $(this).find('.tipf-open').remove();
            var left = $(this).position().left;
            var elm = $(this);
        	var text = elm.text();
        	var inner = $('<div>carregando...</div>');
        	elm.html('<div class="tipf-open"><span class="row"></span></div>');
        	if ($(this).attr('execjs') != undefined) {
        		elm.find('span').after(inner);
        		elm.find('.tipf-open').addClass('bottom');
        		elm.find('.row').addClass('bottom');
        	} else {
        		elm.find('span').after($(this).attr('title'));
        		elm.find('.tipf-open').addClass('top');
        		elm.find('.row').addClass('top');
                elm.find('.row.top').css('top',elm.find('.tipf-open').height() + 15);
                elm.find('.tipf-open').css('margin-top','-' + Number(elm.find('.tipf-open').height() + 40) + 'px');
        	}
            elm.append(text);
            elm.find('.tipf-open').css('left',left);
            eval($(this).attr('execjs'));
        });
        this.mouseout(function (){
            $(this).find('.tipf-open').remove();
        });
	};
})(jQuery);
