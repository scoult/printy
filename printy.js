(function () { 
	
	if (!($ = window.jQuery)) {
	    script = document.createElement( 'script' );
	   script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'; 
	    script.onload=prepareLabel;
	    document.body.appendChild(script);
	} 
	else {
	    prepareLabel();
	}
 
	function prepareLabel() {
		var nbsp = String.fromCharCode(160);
		var productInfo = $('div#subheading h1').text().split(nbsp + nbsp);
		var productName = productInfo[0];
		var productPrice = productInfo[1];
		var productDescription = $('div.description').text();
		var productSKU = $("label:contains('Handle')").parent().find("span.unit").text();
		var labelHtml = $.get("https://rawgit.com/scoult/printy/master/label.html", function( data ) {
			var temp = $('<div>' + data + '</div>');
			temp.find(".productName").text(productName);
			temp.find(".productPrice").text(productPrice);
			temp.find(".productDescription").text(productDescription);
			temp.find(".productSKU").text(productSKU);
			var w = window.open();
			$(w.document.body).html(temp.html());
			w.print();
		});
		 		  
	}
 }());
