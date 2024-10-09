//function loadContent(elID, url) {
//    fetch(url)
//        .then(response = response.text())
//        .then(data => document.getElementById(elID).innerHTML = data);
//        .catch(error => console.error('Error loading content:', error));
//}

//loadContent('jsHeader', 'subIndexHeader.html');
//loadContent('jsFooter', 'subIndexFooter.html');

document.getElementById("jsHeader").innerHTML = fetch('subIndexHeader.html')
    .then(response => response.text())
    .then(data => document.getElementById("jsHeader").innerHTML = data);

document.getElementById("jsFooter").innerHTML = fetch('subIndexFooter.html')
    .then(response => response.text())
    .then(data => document.getElementById("jsFooter").innerHTML = data);