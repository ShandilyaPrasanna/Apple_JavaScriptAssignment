function arrayReverse(arr)
{
	//has the code to display 
 	//the array elements in reverse order
 	var len=arr.length;
 	document.write("<h2>Array In Reverse Order</h2><br><hr>");
 	for(var i=len-1;i>=0;i--){
 	
 		document.write(arr[i]+"<br>");
 	}
}

function arraySize(arr)
{
	//has the code to display 	//the size of the array

    document.write("<hr><h2>Size Of Array is </h2> "+arr.length);
}


