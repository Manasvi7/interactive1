// when you click on the page 'body' apply .gradient to it from the CSS

var n = 1;
var left;
var top;


if (window.location.href.indexOf("instagram") > -1) {

	setInterval(function(){

		var left = Math.floor(Math.random()*$(window).width());
		var top = Math.floor(Math.random()*$(window).height());


	$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> this is my '+n+' message</div>');

		
	$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> What are you lurking on? '+n+' </div>');

		
	$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> I know you creeping my profile. '+n+'</div>');

	
	$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> Careful not to like anything!! '+n+'</div>');

		
	$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> Do you ever lurk so hard and get pissed over a hoe from 3 years ago?'+n+'</div>');

		
	$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> If lurking was a job, Instagram would be printing your ass a W-2.'+n+' </div>');

		
	$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> Dont foret to check out the comments!! '+n+'</div>');
	

	$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> My profile is public. How u doing?! '+n+'</div>');

		

		if (n%10 == 0) {
			$('body').append('<div class="special-message"> Keep lurking, I am doing good. </div>');			
		}
		
		n++;

	},600);
    
}

$('div').click(function() {
	$(this).addClass('gradient');
});

$('.coreSpriteDesktopNavLogoAndWordmark, .coreSpriteDesktopNavProfile, .coreSpriteDirectHeart, .coreSpriteDismissLarge, .coreSpriteDismissSmall').css('background-image', 'url("https://manasvi7.github.io/interactive1/p3/Asset1.png")');

//.src = "p3/asset 1.png";






