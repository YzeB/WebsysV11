document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('phone', phone)
    sessionStorage.setItem('password', password)

    alert('Sign-In data saved!');

    window.location.href = 'indexHome.html';
});

