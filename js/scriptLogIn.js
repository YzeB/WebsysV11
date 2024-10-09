document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('logInForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('lUsername').value;

        if (username) {
            sessionStorage.setItem('username', username);

            window.location.href = '../indexHome.html';
        } else {
            alert("Please enter a valid username.");
        }
    });
});
