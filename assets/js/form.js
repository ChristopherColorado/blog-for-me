document
  .getElementById("blog-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let message = document.getElementById("message");

    if (username === "" || title === "" || content === "") {
      message.textContent = "Please complete the form.";
    } else {
      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push({ username, title, content });
      localStorage.setItem("posts", JSON.stringify(posts));
      window.location.href = "blog.html";
    }
  });
