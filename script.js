function compute(){
    p = document.getElementById("principal").value;
    if(parseInt(p) < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
    }

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var today = new Date();
	var year = parseInt(today.getFullYear())+parseInt(years);

    document.getElementById("depositmessage").innerHTML = ""+principal;
    document.getElementById("interestmessage").innerHTML = ""+rate;
    document.getElementById("amountmessage").innerHTML = ""+interest;
    document.getElementById("yearmessage").innerHTML = ""+year;

    showMessage();

    return false;
}



function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


function showMessage() {
	document.getElementById("result").style.display = "block";
};

function showRange() {
	var rate = document.getElementById("rate").value;
	document.getElementById("ratevalue").innerHTML = rate;
}