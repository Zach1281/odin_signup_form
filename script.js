const userPass = document.querySelector('#user_password');
userPass.addEventListener('keydown', () => {
    if(userPass.value === ""){
        console.log('empty');
    }
    const confirmPass = document.querySelector('#confirm_password');
    if(userPass.value != confirmPass.value){
        console.log('no match');
    }else{
        console.log('match');
    }
})