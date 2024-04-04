document.addEventListener("DOMContentLoaded", function() {
  const blogPosts = [
    {
      title: "Post Title 1",
      image: "post1.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, libero lorem placerat quam, nec mollis est ex id purus. Aliquam erat volutpat."
    },
    {
      title: "Post Title 2",
      image: "post2.png",
      content: "Sed eu elit vel lectus blandit mattis eget eu nulla. Quisque a ligula nec lacus varius viverra. Nam feugiat elit sit amet ultricies efficitur."
    },
    // Add more blog post objects as needed
  ];

  const blogPostsContainer = document.getElementById('blogPosts');

  blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');

    postElement.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;

    blogPostsContainer.appendChild(postElement);
  });
});
