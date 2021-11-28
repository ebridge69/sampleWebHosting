function myFunction(){
	var first = parseFloat(document.getElementById('una').value)	

	if(first >= 1 && first <= 1.24){
		document.getElementById('show').value = "96-100" + "\n" + "Excellent";
	}else if(first >= 1.25 && first <= 1.49){
		document.getElementById('show').value = "94-95.99" + "\n" + "Superior";
	}else if(first >= 1.5 && first <= 1.74){
		document.getElementById('show').value = "91-93.99" + "\n" + "Very Good";
	}else if(first >= 1.75 && first <= 1.99){
		document.getElementById('show').value = "89-90.99" + "\n" + "Good";
	}else if(first >= 2 && first <= 2.24){
		document.getElementById('show').value = "86-88.9" + "\n" + "Very Satisfactory";
	}else if(first >= 2.25 && first <= 2.49){
		document.getElementById('show').value = "83-85.99" + "\n" + "High Average";
	}else if(first >= 2.5 && first <= 2.74){
		document.getElementById('show').value = "80-82.99" + "\n" + "Average";
	}else if(first >= 2.75 && first <= 2.99){
		document.getElementById('show').value = "77-79.99" + "\n" + "Fair";
	}else if(first >= 3 && first <= 3.99){
		document.getElementById('show').value = "75-76.99" + "\n" + "Pass";
	}else if(first >= 4 && first <= 4.99){
		document.getElementById('show').value = "70-74.99" + "\n" + "Conditional";
	}else if(first === 5){
		document.getElementById('show').value = "0-69.99" + "\n" + "Failing";
	}
}