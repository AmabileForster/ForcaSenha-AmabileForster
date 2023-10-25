var password = document.querySelector('#password');
var show = document.querySelector('.show');


// add points to get strenght
function Strenght(password){
    let i = 0;
    if (password.length > 1 ){
        i++;
    }
    if (password.length > 6){
        i++;
    }
    if (password.length > 10){
        i++;
    }
    if (password.length > 12){
        i++;
    }
    if (password.length > 14){
        i++;
    }
    if(/[0-9]/.test(password)){
        i++;
    }
    if(/[a-z]/.test(password)){
        i++;
    }
    if(/[A-Z]/.test(password)){
        i++;
    }
    if (/[!@%^":{}|#$<>&*(),.?]/.test(password)){
        i+=2;
        
    }
    return i;
}

//verify points
var container = document.querySelector('.container');
document.addEventListener("keyup",function(e){
    let password = document.querySelector('#password').value

    let strenght = Strenght(password);
    if(strenght <= 5){
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    } else if (strenght >= 6 && strenght <= 8){
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
    } else {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
    }
})



// to show password
show.onclick = function(){
    if (password.type === 'password'){
        password.setAttribute('type', 'text');
        show.classList.add('hide')
    } else {
        password.setAttribute('type', 'password');
        show.classList.remove('hide')
    }
}