// when you click on the page 'body' apply .gradient to it from the CSS

var n = 1;
var left;
var top;


if (window.location.href.indexOf("instagram") > -1) {

	setInterval(function(){

		var left = Math.floor(Math.random()*$(window).width());
		var top = Math.floor(Math.random()*$(window).height());


		$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> this is my '+n+' message</div>');

		if (n == 1) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> hey </div>');

		}

		if (n == 2) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> message 2 </div>');

		}

		if (n%10 == 0) {
			$('body').append('<div class="special-message">this is the '+n+' divided by ten message</div>');			
		}
		
		n++;

	},600);
    
}

$('div').click(function() {
	$(this).addClass('gradient');
});

$('.coreSpriteDesktopNavLogoAndWordmark, .coreSpriteDesktopNavProfile, .coreSpriteDirectHeart, .coreSpriteDismissLarge, .coreSpriteDismissSmall').css('background-image', 'url("https://michellemontano.github.io/interactive1/P2/Step_3/img/sunglasses.png")');

//.src = "p3/asset 1.png";






