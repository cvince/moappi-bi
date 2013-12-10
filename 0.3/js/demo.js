$(document).ready(function(){



//										//
//										//
//			SINGLE TREND GRAPH			//
//										//
//										//


	//		number input		//

    $("#valueInputter").keyup(function () {
      var value = $(this).val();
      $(".elevatorFigure").text(value);
    }).keyup();

    //		dimension selection		//

    function changeDimensions(){
    	var selectedWidth = $('#widthSelector').val();
    	var selectedHeight = $('#heightSelector').val();
    	$('#demoContainer').attr('class','container'+' width'+selectedWidth+' height'+selectedHeight)    	
    }

    $('#widthSelector, #heightSelector').change(changeDimensions);
    changeDimensions();

    //		prefix/suffix input 	//

function prefixAndSuffixer(){
    $("#prefixInputter").keyup(function () {
      var value = $(this).val();
      $(".elevatorPrefix").text(value);
    }).keyup();

    $("#suffixInputter").keyup(function () {
      var value = $(this).val();
      $(".elevatorSuffix").text(value);
    }).keyup();
}
prefixAndSuffixer();

    //		precentage/value selection 		//

	$(".elevatorPrefix, .elevatorInteger").hide();
	$("input[name$='singleTrendType']").click(function(){
			var selectedsingleTrend = $(this).val();
			$(".elevatorPrefix").hide();			
			$(".elevatorInteger, ."+selectedsingleTrend).show();

			if(selectedsingleTrend === "elevatorPrefix"){
				$("#suffixInputter").val("M");
				prefixAndSuffixer();				
			}else{				
				$("#suffixInputter").val("%");
				$(".elevatorPrefix, .elevatorInteger").hide();				
				prefixAndSuffixer();				
			}

		}
	);   

});


//										//
//										//
//			SINGLE TARGET GRAPH			//
//										//
//										//

