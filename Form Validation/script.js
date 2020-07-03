const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error messages

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline

function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

// function to validate email
function isValidEmail(input){
    // const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    return re.test(String(input.value).toLowerCase());
}

// Adding Event Listener for submit event
form.addEventListener('submit', function(e){
    // preventing default submit action before validation 
     e.preventDefault();
     
     //username field
    if(username.value === ''){
        showError(username, 'Username is required');
     }else {
         showSuccess(username);
         
     }

     //email field
     if(email.value === ''){
        showError(email, 'Email is required');
     }else if(!isValidEmail(email)){
        showError(email, 'Email is not valid');
     }else{
         showSuccess(email);
     }

     //password field
     if(password.value === ''){
        showError(password, 'Password is required');
     }else {
         showSuccess(password);
     }

    // confirm password field
     if(password2.value === ''){
        showError(password2, 'Password 2 is required');
     }

    // Password Match
     if(password.value !== '' &&  password2.value !== ''){
        
        if(password.value === password2.value){
            showSuccess(password2); 
         }
        else{
             showError(password2,'Passwords do not match');
        }
    }    
});
