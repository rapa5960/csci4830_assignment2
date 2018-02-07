$(document).ready(function() {
	$("#element").show();
	$("#otherElement").hide();
});

$("#dialer_button").click(function() { // when "button_id" is clicked
	$("#content_dialer").show(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_contact").hide();	// hide other element
	$("#content_gestures").hide();
});

$("#list_button").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#content_dialer").hide();	// hide other element
	$("#content_contact").hide();	// hide other element
	$("#content_gestures").hide();
});

$("#contact_button").click(function() { // when "button_id" is clicked
	$("#content_contact").show(); // show element
	$("#content_dialer").hide();	// hide other element
	$("#content_list").hide();	// hide other element
	$("#content_gestures").hide();
});
	
$("#test_gestures").click(function() { // when "button_id" is clicked
	$("#content_gestures").show();
	$("#content_contact").hide(); // show element
	$("#content_dialer").hide();	// hide other element
	$("#content_list").hide();	// hide other element
});
	
$( "#1" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "1");
});

$( "#2" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "2");
});
$( "#3" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "3");
});
$( "#4" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "4");
});
$( "#5" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "5");
});
$( "#6" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "6");
});
$( "#7" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "7");
});
$( "#8" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "8");
});
$( "#9" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "9");
});
$( "#0" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "0");
});
$( "#star" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "*");
});
$( "#pound" ).click(function() {
	$( "#textfield1" ).val($("#textfield1").val() + "#");
});
$( "#clear" ).click(function() {
	var text = $( this ).text();
	$( "#textfield1" ).val( "" );
});

var downX = 0;
var downY = 0;
		
		
$("#gesture_area").mousedown(function(event){
	$("#gesture_output").val("Mouse down");
	downX = event.pageX;
	downY = event.pageY;
			
});
$("#gesture_area").mouseup(function(event){
			
	var upX = event.pageX;
	var upY = event.pageY;

	if(upX < downX) {
		$("#gesture_output").val("swipe left");
				
		}
	else if(upX > downX) {
		$("#gesture_output").val("swipe right");
				
		}
	else if(upX == downX) {
		$("#gesture_output").val("mouse up");
				
		}
			
			
});
