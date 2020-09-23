const loginForm = $elem("#loginform");
const signupForm = $elem("#signupform");
const loginUsername = $elem("#login_username");
const loginPassword = $elem("#login_password");
const signupPassword = $elem("#signup_password");
const signupUsername = $elem("#signup_username");
const sError = $elem("#sname_error");
const lError = $elem("#lname_error");
const auth = $elem("#authentication");
const logout = $elem("#logout");
const success = $elem("#success");

const users = JSON.parse(localStorage.getItem('users'));

// handle user registration
signupForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log('signing up')
    const username = signupUsername.value;
    const password = signupPassword.value;

    if (!username || !password) {
        sError.innerText = "Please enter username"
        setTimeout(() =>lError.innerText= "", 2000)
    }

    const user = {username, password}
    console.log(user)
    let userIndex = users.findIndex(user => user.username == username)
    if( userIndex == -1) users.push(user)

    localStorage.setItem("users", JSON.stringify(users))
    signupForm.reset()
    success.innerText = "Account successfully created, please login to continue"
        setTimeout(() => success.innerText= "", 2000)

})

// handle user authentication
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = loginUsername.value;
    const password = loginPassword.value;

    if (!username || !password) {
        lError.innerText = "Please enter username"
        setTimeout(() =>lError.innerText= "", 2000)
    }

    let userExists = users.find(user => user.username == username)
    if(userExists && userExists.password === password) {
        localStorage.setItem("isLoggedIn", JSON.stringify(true))
        loginForm.reset()
        authentication.style.display  = "none";
        nav.style.display = "block";
        intro.style.display = "block";
    }
    if(!users.length){
        lError.innerText = "No account with these details, Please create an account";
        setTimeout(() =>lError.innerText= "", 2000);
    }

    if(users.length && !userExists) {
        lError.innerText = "Invalid username or password";
        setTimeout(() =>lError.innerText= "", 2000);
    }
    
})

// handle logout functionality
logout.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('isLoggedIn', JSON.stringify(false))
    localStorage.setItem('users', JSON.stringify([]))
    nav.style.display = "none";
    intro.style.display = "none";
    authentication.style.display  = "block";
})