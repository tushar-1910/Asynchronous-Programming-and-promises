document.querySelector('form').addEventListener('submit', login)
var registered_user = JSON.parse(localStorage.getItem('userdata'));
function login() {
    event.preventDefault();
    var entered_email = document.querySelector('#email').value;
    var entered_password = document.querySelector('#password').value;
    for (var i = 0; i < registered_user.length; i++) {
        if (entered_email == registered_user[i].email && entered_password == registered_user[i].password) {
            alert('Login successfull');
            window.location.href = 'index.html';
            break;
        }
        else {
            alert('incorrect details');
            break;
        }
    }
}