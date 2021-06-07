function check1() {
	var FirstName=document.getElementById("FirstN").value;
	var regex=/^[A-za-z]{2,20}$/;
	
	if (regex.test(FirstName)){
		documet.getElementById("message1").innerHTML="Valid";
		return true;
	}	
	else{
		documet.getElementById("message1").innerHTML="Please use 2-20 characters";
		
		return false;
	}	
	
}

function check2() {
	var LastName=document.getElementById("LastN").value;
	var regex1=/^[A-za-z]{2,20}$/;
	
	if (regex1.test(LastName)){
		documet.getElementById("message2").innerHTML="Valid";
	}
	else{
		documet.getElementById("message2").innerHTML="Please use 2-20 characters";
	}	
	
}
function check3() {
	var Occupation=document.getElementById("Occu").value;
	var regex2=/^[A-za-z]{2,20}$/;
	
	if (regex2.test(Occupation)){
		documet.getElementById("message3").innerHTML="Valid";
	}
	else{
		documet.getElementById("message3").innerHTML="Please use 2-20 characters";
	}	
	
}
function check4() {
	var Age=document.getElementById("age").value;
	var regex5=/[0-9]$/;
	
	if (regex5.test(Age)){
		documet.getElementById("message4").innerHTML="Valid";
	}
	else{
		documet.getElementById("message4").innerHTML="Please use a number";	
	}
	
}
