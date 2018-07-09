'use strict'

const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/posts", true);
http.setRequestHeader('Content-Type', 'application/json');
http.onload = () => {
  const res = JSON.parse(http.responseText);
  const main = document.querySelector('.main');
  res.posts.forEach(element => {
    const post = main.appendChild(document.createElement('div'));
    const scores = post.appendChild(document.createElement('div'));
    const postMain = post.appendChild(document.createElement('div'));
    const title = postMain.appendChild(document.createElement('p'));
    const timestamp = postMain.appendChild(document.createElement('p'));
    const url = postMain.appendChild(document.createElement('p'));
    const upvote = scores.appendChild(document.createElement('button'));
    const score = scores.appendChild(document.createElement('p'));
    const downvote = scores.appendChild(document.createElement('button'));
    const deletebtn = postMain.appendChild(document.createElement('button'));
    const edit = postMain.appendChild(document.createElement('button'));
    post.className = 'posts';
    scores.className = 'scores';
    postMain.className = 'postMain';
    title.className = 'title';
    title.innerHTML = element.title;
    timestamp.className = 'timestamp';
    timestamp.innerHTML = element.timestamp;
    score.className = 'score';
    score.innerHTML = element.score;
    url.className = 'url';
    url.innerHTML = element.URL;
    upvote.className = 'upvote';
    downvote.className = 'downvote';
    deletebtn.className = 'delete';
    edit.className = 'edit';
    upvote.innerHTML = 'upvote';
    downvote.innerHTML = 'downvote';
    deletebtn.innerHTML = 'delete';
    edit.innerHTML = 'edit';
    upvote.innerHTML = '<img src="static/upvote.png"/>';
    downvote.innerHTML = '<img src="static/downvote.png"/>';
    upvote.addEventListener('click', () => {
      http.open('PUT', `http://localhost:3000/posts/${element.ID}/upvote`, true);
      http.setRequestHeader('Content-Type', 'application/json');
      http.send(JSON.stringify({
        vote: "1",
      }));
    });
  });
};
http.send();
