$(window).bind("load", function() {
	var $navitem = $("#nav").contents().find(".navitem");
	//alert($navitem);
	$("#nav").contents().find(".navitem").on("click", function(){
		alert("hi");
	});
});

