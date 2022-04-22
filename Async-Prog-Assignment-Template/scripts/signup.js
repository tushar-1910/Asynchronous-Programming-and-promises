document.querySelector('form').addEventListener('submit', signup);
var userdata;
userdata = JSON.parse(localStorage.getItem('userdata')) || [];
function signup() {
    event.preventDefault();
    var userobj =
    {
        name: document.querySelector('#name').value,
        contact: document.querySelector('#contact').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    }
    userdata.push(userobj);
    localStorage.setItem('userdata', JSON.stringify(userdata));
}