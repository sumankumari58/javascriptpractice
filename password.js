const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');


inputfield.addEventListener('input',function() {
     console.log(inputfield.value)

    let password = inputfield.value;
    if(password.length < 8){
        outputfield.innerText = 'password is too short';
        outputfield.style.color= 'green';
    }else{
        outputfield.innerText = 'password is  long enough';
         outputfield.style.color= 'red';
         //a-z
         //A-Z
         //0-9
         //special character !@#$%^&*()+_;''.
         if(password.search(/[a-z]/) == -1){
           outputfield.innerText = 'password is missing a lowercase letter'
           outputfield.style.color = 'red';
         }else if(password.search(/[A-Z]/) == -1){
           outputfield.innerText = 'password is missing a capital letter'
           outputfield.style.color = 'red';
         }else if(password.search(/[0-9]/) == -1){
           outputfield.innerText = 'password is missing a numerber'
           outputfield.style.color = 'red';
         }else if(password.search(/[ !\@\#\$\%\^\&\*\(\)\+\_\;\'\'\.]/) == -1){
           outputfield.innerText = 'password is missing  a special character'
           outputfield.style.color = 'red';
         }
         else{
             outputfield.innerText = 'password is strong';
            outputfield.style.color= 'green';
         }
        }
})