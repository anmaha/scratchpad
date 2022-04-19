

const drop = () => {
    //find the element a psuedoelement 
    let dropMenu = document.querySelector('#dBtn');
    //change css height 90px
    dropMenu.style.height = '92px';
    //create element
        // -->text

    //hide it pop it open
}

const showLogin = () => {
    let login_btn = document.querySelector('.colorLink');
    let loginAnswer= prompt('Enter Email for login');

    let screen = document.querySelector('.screen')
    // Conditional checks email characters
        if(loginAnswer.includes('@') && loginAnswer.includes('.')) {
            screen.innerHTML = loginAnswer;
        }
        else{
            screen.innerHTML = "Enter email again";
        };
    };
