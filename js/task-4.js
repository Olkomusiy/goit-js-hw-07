const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const emailInput = form.elements.email;
    const emailValue = emailInput.value.trim();   
    const passwordInput = form.elements.password;  
    const passwordValue = passwordInput.value.trim();
    
if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
} 
    
const obj = {
    email: emailValue,
    password: passwordValue
    }; 
    
    console.log(obj);
    form.reset();
});

