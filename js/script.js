// bytag name

console.log(document.getElementsByTagName('p'));


//  by ID

document.getElementById('heading').value = "welcome";
console.log(document.getElementById('heading').value)

// by Class Name

var allHeading = document.getElementsByClassName('par');
console.log(allHeading);
console.log(allHeading.length);


// By Name

var usernameInput = document.querySelector('input');
console.log(usernameInput);

var emailInput = document.querySelector('input[name="email"]');
emailInput.value = 'example@example.com';
console.log(emailInput.value)

var passwordInput = document.querySelector('input[name="password"]');
passwordInput.disabled = true;
console.log(passwordInput.disabled)


// querySelector

document.querySelector('div').value= "good night";
console.log(document.querySelector('div').value)

console.log(document.querySelector('.button'));


//  Query Selector All


console.log(document.querySelectorAll('.t1'));
console.log(document.querySelectorAll('h2.t1'));

