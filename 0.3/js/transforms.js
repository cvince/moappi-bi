var stepA;
var scaleSteps = 2;

$(document).ready(function() {
	$(".box").parent().resize(function(){

		var stepAw = $(this).parent().width();
		var stepAh = $(this).parent().height()-5;
		if(stepAw<stepAh){
			stepA = stepAw
		}
		else{
			stepA = stepAh

		}

		// function init() {

		//     var div = document.getElementByClass("widgetTitle");

		//     // increase the scroll position by 10 px every 10th of a second
		//     setInterval(function() { 
		//         // make sure it's not at the bottom
		//         if (div.scrollTop < div.scrollHeight - div.clientHeight)
		//             div.scrollTop += 10; // move down
		//     }, 100); // 100 milliseconds

		// }




		//												//
		//				1.0 MAIN CSS TRANSFORMS			//
		//												//

			//				1.1 KEY SIZE SELECTORS 			//



			//				1.2 SIZE & POSITION TRANSFORMS		//

		$(".stepA").css({"width":stepAw+"px", "height":stepAh+"px"});

				//				1.2.1 SIZE ELEVATOR WIDGET 			//

		$(".stepA .elevatorWidget").css({"width":stepAw+"px", "height":stepAh*0.6+"px", "margin-left":stepAw*-0.5+"px", "margin-top":stepA*-0.3+"px"});
		$(".stepA .elevatorPrefix, .stepA .elevatorInteger").css({"font-size":28*stepA/206+"px"});
		$(".stepA .elevatorFigure").css({"font-size":80*stepA/206+"px"});
		$(".stepA .elevatorSuffix").css({"font-size":25*stepA/206+"px"});
		$(".stepA .elevatorIndicator").css({"border-left":stepA*0.08+"px"+" solid transparent", 
											"border-right":stepA*0.08+"px"+" solid transparent",
											"border-top":stepA*0.08+"px"+" solid red"});
		$(".stepA .elevatorLabel").css({"font-size":stepA*18/206+"px"})
	

				//			1.2.2 TARGET WIDGET					//

		// $(".stepA .targetWidget").css({"width":stepAw+"px", "height":stepAh*0.6+"px", "margin-left":stepAw*-0.5+"px", "margin-top":stepAh*-0.3+"px"})
		// $(".stepA .targetBarWrapper").css({"width":stepAw-30+"px"});
		// $(".targetBarTarget").css({"left":100*targetValue/targetMax+"%"});
		// $(".targetBarValue").css({"width":100*targetValue/targetMax+"%"});

		// $(".targetScaleRuler").css({"width":(stepAw-30)/scaleSteps+"px"})

	});
});