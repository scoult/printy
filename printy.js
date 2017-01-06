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
		
		alert('Print label for: Product - ' + productName + ', price - ' + productPrice + ', Desc - ' + productDescription + ', SKU - ' + productSKU + '?');
		  
	}
 }());
