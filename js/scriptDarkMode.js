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

document.addEventListener('DOMContentLoaded', (event) => {
    const dMToggle = document.getElementById('darkMode');
    loadDM();
    dMToggle.addEventListener('click', toggleDM);
});