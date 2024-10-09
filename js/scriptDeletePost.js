function toggleMM() {
    let mM = sessionStorage.getItem('mM');
    if (mM === 'mod') {
        document.body.classList.remove('modRole');
        sessionStorage.setItem('mM', 'mod');
    } else {
        document.body.classList.add('modRole');
        sessionStorage.setItem('mM', 'mem');
    }
}