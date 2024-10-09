function toggleDM() {
    let dM = sessionStorage.getItem('dM');
    if (dM === 'dark') {
        document.body.classList.remove('darkTheme');
        sessionStorage.setItem('dM', 'light');
    } else {
        document.body.classList.add('darkTheme');
        sessionStorage.setItem('dM', 'dark');
    }
}

function loadDM() {
    let savedDM = sessionStorage.getItem('dM');
    if (savedDM === 'dark') {
        document.body.classList.add('darkTheme');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var settingsIcon = document.getElementById('settingsIcon');
    var dropdownContent = document.getElementById('dropdownContent');
    var authStatus = document.getElementById('authStatus2');
    var logOutButton = document.getElementById('logOut');

    var username = sessionStorage.getItem('username');
    if (username) {
        authStatus.textContent = username;
        authStatus.href = "#";
        authStatus.addEventListener('click', function(event) {
            event.preventDefault();
        });

        logOutButton.addEventListener('click', function() {
            sessionStorage.removeItem('username');
            authStatus.textContent = "Log In | Sign Up";
            authStatus.href = "pages/indexLogIn.html";
            authStatus.replaceWith(authStatus.cloneNode(true));
        });
    } else {
        authStatus.textContent = "Log In | Sign Up";
        authStatus.href = "pages/indexLogIn.html";
        authStatus.replaceWith(authStatus.cloneNode(true));
    }

    const dMToggle = document.getElementById('darkMode');
    dMToggle.addEventListener('click', toggleDM);

    settingsIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
    
    document.addEventListener('click', function(event) {
        if (!settingsIcon.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});

