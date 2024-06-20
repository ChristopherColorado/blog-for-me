document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", function () {
  let postsContainer = document.getElementById("posts");
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.forEach(function (post) {
    let postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><strong>Author:</strong> ${post.username}</p>`;
    postsContainer.appendChild(postElement);
  });
});
