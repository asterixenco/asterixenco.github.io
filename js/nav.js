$("document").ready(function() {
	var $navitem = $("#nav").contents().find(".navitem");
	//alert($navitem);
	$("#nav").contents().find(".navitem").click(function(){
		alert("test");
	});
});