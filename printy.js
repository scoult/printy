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
		var productSKU = $("label:contains('SKU')").parent().find("span.unit").text();
		
		
		
		var template = "";
		
		var labelHtml = $.get("https://rawgit.com/scoult/printy/master/label.html", function( data ) {
			template = $(data).find("div.label");
			console.log(data);
			template.find(".productName").text(productName);
			template.find(".productPrice").text(productPrice);
			template.find(".productDescription").text(productDescription);
			template.find(".productSKU").text(productName);
			
			console.log(template);
			
			var w = window.open();
			$(w.document.body).html(template.html());
		});
		
		var testy = "THis is a totally unnecessary edit for the sake of making rawgit update....";
		  
	}
 }());
