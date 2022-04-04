
// (function ($) {
// 	"use strict";

// 	/*==================================================================
// 	[ Validate ]*/

// 	var input = $('.validate-input .input100');

// 	$('.validate-form').on('submit',function(){
// 		var check = true;

// 		for(var i=0; i<input.length; i++) {
// 			if(validate(input[i]) == false){
// 				showValidate(input[i]);
// 				check=false;
// 			}
// 		}

// 		return check;
// 	});


// 	$('.validate-form .input100').each(function(){
// 		$(this).focus(function(){
// 		   hideValidate(this);
// 		});
// 	});

// 	function validate (input) {
// 		if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
// 			if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
// 				return false;
// 			}
// 		}
// 		else {
// 			if($(input).val().trim() == ''){
// 				return false;
// 			}
// 		}
// 	}

// 	function showValidate(input) {
// 		var thisAlert = $(input).parent();

// 		$(thisAlert).addClass('alert-validate');
// 	}

// 	function hideValidate(input) {
// 		var thisAlert = $(input).parent();

// 		$(thisAlert).removeClass('alert-validate');
// 	}
// })(jQuery);

// view password
const input = document.getElementById('password');
const icon = document.getElementById('icon');
const inputIcon = document.getElementById('input-icon');
// validation data
const validateForm = document.querySelector('.validate-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const data = [username, password];

const validate = (data) => {
	if (data.getAttribute('type') == 'email' || data.getAttribute('name') == 'email') {
		if (data.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
			return false;
		}
	}
	else {
		if(data.value.trim() == ''){
			return false;
		}
	}
}

const showValidate = (data) => {
	let thisAlert = data.parentNode;
	thisAlert.classList.add('alert-validate');
}

const hideValidate = (data) => {
	let thisAlert = data.parentNode;
	thisAlert.classList.remove('alert-validate');
}


inputIcon.addEventListener('click', () => {
	if (input.type === "password") {
		input.type = "text";
		icon.classList.remove('fa-eye');
		icon.classList.add('fa-eye-slash');
	} else {
		input.type = "password";
		icon.classList.remove('fa-eye-slash');
		icon.classList.add('fa-eye');
	}
});


validateForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let check = true;

	for ( let i = 0; i < data.length; i++ ) {
		validate(data[i]);
		if ( validate(data[i]) == false ) {
			showValidate(data[i]);
			check = false;
		}
	}

	return check;
});

// focus input
validateForm.addEventListener('focusin', (e) => {
	hideValidate(e.target);
});