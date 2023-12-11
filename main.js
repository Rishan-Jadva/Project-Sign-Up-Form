document.addEventListener('DOMContentLoaded', () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const matches = document.getElementById("match");
    
    function checkPassword(){
        if (password.value !== confirmPassword.value){
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            matches.textContent = "*Passwords do not match*";
        }
        else{
            password.style.borderColor = '';
            confirmPassword.style.borderColor = '';
            matches.textContent = '';
        }
    }

    password.addEventListener('input', checkPassword);
    confirmPassword.addEventListener('input', checkPassword);
});