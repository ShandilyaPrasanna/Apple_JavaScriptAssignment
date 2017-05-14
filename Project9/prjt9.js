function displayAllDetails(obj){
	 var basePrice = parseInt(obj.cdPrice);
var finalPrice=((basePrice)+(0.1*basePrice))-(0.3*basePrice);
	document.write("<h1> Detail Of Cd </h1>");
	 document.write("<h3>Name Of Cd: </h3>",obj.cdName);
	 document.write("<h3>Publisher : </h3>",obj.cdPublisher);
	 document.write("<h3>Final Price: </h3>",finalPrice);
}