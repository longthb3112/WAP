$(document).ready(function(){
	let start = false;
	$("#start").on("click",function(){
		//clicked
		if(start == true) return;
		
		//remove error class
		$(".boundary").removeClass('youlose');
		
		//set started state
		if(start = false) start = true;
		
		
		$("#status").text("The game has started");
		
		$(".boundary").on("mouseenter", function(){
			lose();
			deactiveEvents();
		});
		$("#maze").on("mouseleave",function(){
			lose();
			deactiveEvents();
		})
		$("#end").on("mouseenter",function(){
			win();
			deactiveEvents();
		});
	});
});

function lose() {
        $(".boundary").addClass('youlose');
        $("#status").text("YOU LOSE!! Click S to start again");
		start = false;
}
function win(){
		$("#status").text("HOORAY YOU WIN!! Click S to start again");
		start = false;
}
function deactiveEvents(){
	$(".boundary").off("mouseenter");
	$("#maze").off("mouseleave");
	$("#end").off("mouseenter");
	
}


		
