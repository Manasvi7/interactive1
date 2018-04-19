$(document).ready(function(){

// n = 1;
// $('div').click(function(){  	
	
// 	$(this).css('background', 'rgb('+n+', '+n+','+n+')');
// 	// add one to n
// 	n = n+1;
	
//   });

class SayHello extends TimerTask {
    public void run() {
       System.out.println(".print"); 
    }
}


Timer timer = new Timer();
timer.schedule(new .print(), 0, 1000);





});
