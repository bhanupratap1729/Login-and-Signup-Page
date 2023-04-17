var passwordRequirements = document.getElementById("password-requirements");

document.getElementById("password").addEventListener("input", function() {
	var password = this.value;
	var hasLowerCase = /[a-z]/.test(password);
	var hasUpperCase = /[A-Z]/.test(password);
	var hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
	var hasNumber = /\d/.test(password);
	var isValidLength = password.length >= 8;

	if (hasLowerCase && hasUpperCase && hasSpecialChar && hasNumber && isValidLength) {
		passwordRequirements.style.color = "green";
	} else {
		passwordRequirements.style.color = "gray";
	}
});
