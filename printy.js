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
			var xTemplate = $(data).find("div.label");
			console.log(data);
			xTemplate.find(".productName").text(productName);
			xTemplate.find(".productPrice").text(productPrice);
			xTemplate.find(".productDescription").text(productDescription);
			xTemplate.find(".productSKU").text(productName);
			
			template = xTemplate.html();
			console.log(xTemplate);
			console.log(template);
			
			var w = window.open();
			
			$(window.open().document.body).html(template);
		});
		
		var testy = "THis is a totally unnecessary edit for the sake of making rawgit update....";
		  
	}
 }());
