//initial JS to lead to VN or stay on the page
function trialFunction() {
	var x = confirm("Are you ready?");
	if (x == true) {
		window.location.href = "VN.html";
	} else {
		alert("Press the button again whenever you are ready!");
	}
}


