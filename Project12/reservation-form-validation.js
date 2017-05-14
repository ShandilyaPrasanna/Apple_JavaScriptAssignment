var err=[];
var flag="true";

function submit_by_id(){
	var trainNo=document.getElementById("trainNo").value;
	var trainName=document.getElementById("trainName").value;
	var srcStn=document.getElementById("bordStation").value;
	var dest=document.getElementById("destStation").value;
	var DOJ=document.getElementById("date").value;
	var name=document.getElementById("Name").value;
	var add=document.getElementById("address").value;
	var email=document.getElementById("email").value;
	var phn=document.getElementById("phn").value;
    

   allLetter(trainName,"Train Name");  
   allLetter(srcStn,"Source Station");
   allLetter(dest,"Destination Station");  
   allLetter(name,"Passenger Name");  
   allLetter(add,"Address");  
   numeric(trainNo,"Train Number");  
   numeric(phn,"Phone Number");  
   ValidateEmail(email); 
   ValidDate(DOJ);
   if(flag=="true")
   {
   	alert("form Successfully Submitted");
   	return true;
   }   
   else
   {
   	alert(err);
   	err=[];
   	flag="true";
   	return false;
   }
};

function allLetter(data,name){
{   
var letters = /^[A-Za-z]+$/; 
if(data=="")
{
	err.push(name+" field cannot be empty");
flag="false";
}
else{ 
if((!data.match(letters)))  
{  
err.push(name+" must have alphabet characters only");  
 console.log(err);
flag="false";  
}  
}  
}
};

function numeric(data,name){
var numbers = /^[0-9]+$/;  
if(data=="")
{
	err.push(name+" field cannot be empty");
flag="false";
}
else{ 
if(!(data.match(numbers)))  
{  
err.push(name+" must have Numeric characters only");  
 console.log(err);
flag="false"; 
}  
}
};

function ValidateEmail(data){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(data=="")
{
	err.push(" Email field cannot be empty");
	flag="false";
}
else{ 
if(!(data.match(mailformat)))  
{  
err.push("Email is not valid");  
 console.log(err);
flag="false";
}
}
};

function ValidDate(data){
console.log(data);
var varDate = new Date(data); //dd-mm-YYYY
var today = new Date();
console.log(today);
if(data=="")
{
	err.push("Date field cannot be empty");
	flag="false";
}
else{ 
if(!(varDate >= today)) {
err.push("Date Should be Equal To or more than Present date");
console.log(err);
flag="false";
}
}
};




