const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//getFieldName method

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//checkRequired method

function checkRequired(arr){
    arr.forEach(function(input){
        if(input.value === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}
//check length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} should have minimum ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} should only have maximum ${max} characters`);
    }else{
        showSuccess(input);
    }
}

// show input error messages

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//check passwords match
function checkPasswordMatch(password, password2){
    if(password.value !== password2.value){
        showError(password2, "Passwords do not match");
    }
}

// show success outline

function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

// function to validate email
function checkEmail(input){
    // const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(!re.test(String(input.value).toLowerCase())){
        showError(input, 'Email is not valid');
    }else{
        showSuccess(input);
    }
}

// Adding Event Listener for submit event
form.addEventListener('submit', function(e){
    // preventing default submit action before validation 
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 12);
    checkLength(password2, 6, 12);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});
