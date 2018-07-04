 function calc()
 {
	var a = parseInt(document.getElementById("textf").value);
	var b = parseInt(document.getElementById("texts").value);
	var cal = document.getElementById("calculations").value;
	switch(cal)
	{
	case '+': alert(a+ "+" + b + "=" +(a+b));
	break;
	
	case '-': alert(a+ "-" + b + "=" +(a-b));
	break;
	
	case '*': alert(a+ "*" + b + "=" +(a*b));
	break;
	
	case '/': alert(a+ "/" + b + "=" +(a/b));
	break;
	
	default:alert(the number you have entered is wrong");
	break;
	}}