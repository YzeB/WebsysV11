function createpostSubmit() {
    const ctpTitle = document.getElementById('createposttitle').value;
    const ctpContent = document.getElementById('createpostcontent').value;
    sessionStorage.removeItem('posts');
    var currentUsername = sessionStorage.getItem('username');

    if (!ctpTitle || !ctpContent) {
        alert("Title and Content are required!");
        return;
    }

    const postId = 'post_' + new Date().getTime();
    const post = {
        id: postId,
        title: ctpTitle,
        user: currentUsername,
        content: ctpContent,
        replies: []
    };

    let posts = JSON.parse(sessionStorage.getItem('posts')) || [];
    posts.push(post);
    sessionStorage.setItem('posts', JSON.stringify(posts));
    displayPost(post);
    document.getElementById('createposttitle').value = '';
    document.getElementById('createpostcontent').value = '';
}


function displayPost(post) {
    const pTitle = document.createElement('h1');
    const pUser = document.createElement('h6');
    const pContent = document.createElement('p');
    const replyButton = document.createElement('button');
    const replyContainer = document.createElement('div');

    pTitle.textContent = post.title;
    pUser.textContent = "By: " + post.user;
    pContent.textContent = post.content;
    replyButton.textContent = "Reply";

    pTitle.className = 'posttitle';
    pUser.className = 'postuser';
    pContent.className = 'postcontent';
    replyButton.className = 'replyButton';
    replyContainer.className = 'replyContainer';

    const newPostContainer = document.createElement('div');
    newPostContainer.className = 'post';
    newPostContainer.id = post.id;

    newPostContainer.appendChild(pTitle);
    newPostContainer.appendChild(pUser);
    newPostContainer.appendChild(pContent);
    newPostContainer.appendChild(replyContainer);
    newPostContainer.appendChild(replyButton);

    post.replies.forEach(reply => {
        const replyElement = document.createElement('p');
        replyElement.className = 'comment';
        replyElement.innerHTML = `<b>${reply.user}:</b> ${reply.content}`;
        replyContainer.appendChild(replyElement);
    });

    replyButton.onclick = function() {
        createReply(newPostContainer.id);
    };

    const newPostDiv = document.getElementById('newPost');
    const firstPost = newPostDiv.firstChild;
    newPostDiv.insertBefore(newPostContainer, firstPost);
}


document.addEventListener('DOMContentLoaded', function() {
    const savedPosts = JSON.parse(sessionStorage.getItem('posts'));

    if (savedPosts) {
        savedPosts.forEach(post => {
            displayPost(post);
        });
    }
});


function createReply(postId) {
    const postContainer = document.getElementById(postId);
    let existingTextarea = postContainer.querySelector('.replyTextarea');

    var currentUsername = sessionStorage.getItem('username');

    if (existingTextarea) {
        return;
    }

    const replyTextarea = document.createElement('textarea');
    replyTextarea.className = 'replyTextarea';
    replyTextarea.placeholder = "Write your reply here...";

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Post Reply';
    submitButton.className = 'replySubmitButton';

    postContainer.appendChild(replyTextarea);
    postContainer.appendChild(submitButton);

    submitButton.onclick = function() {
        const replyText = replyTextarea.value.trim();

        if (replyText) {
            const replyElement = document.createElement('p');
            replyElement.className = 'comment';
            replyElement.innerHTML = `<b>${currentUsername}:</b> ${replyText}`;

            const replyContainer = postContainer.querySelector('.replyContainer');
            replyContainer.appendChild(replyElement);
            replyTextarea.remove();
            submitButton.remove();
            let posts = JSON.parse(sessionStorage.getItem('posts'));
            let post = posts.find(p => p.id === postId);
            post.replies.push({ user: currentUsername, content: replyText });
            sessionStorage.setItem('posts', JSON.stringify(posts));
        } else {
            alert('Reply cannot be empty!');
        }
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const savedPosts = JSON.parse(sessionStorage.getItem('posts'));

    if (savedPosts) {
        savedPosts.forEach(post => {
            displayPost(post);
        });
    }
});
