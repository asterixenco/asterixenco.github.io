$("document").ready(function() {
	var $navitem = $("#nav").contents().find(".navitem");
	for(var i = 0; i < $navitem.length; i++) {
		$navitem.eq(i).click(function() {
			alert(hi);
		});
	}
});