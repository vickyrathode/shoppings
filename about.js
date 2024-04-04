document.addEventListener("DOMContentLoaded", function() {
  const teamMembers = document.querySelectorAll('.team-member');

  teamMembers.forEach(member => {
    const name = member.querySelector('h2');
    const tasks = member.querySelector('.tasks');
    const info = member.querySelector('p');

    name.addEventListener('click', () => {
      tasks.classList.toggle('active');
      info.classList.toggle('show');
    });
  });
});
