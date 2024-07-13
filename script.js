const resourceList = document.querySelectorAll('.resource-item');
const resourceDetails = document.querySelectorAll('.resource-details');

// Get the last visited resource from localStorage (if available)
let lastVisited = localStorage.getItem('lastVisited');

// Set the active class on the corresponding resource item
if (lastVisited) {
  const activeItem = document.querySelector(`[data-target="${lastVisited}"]`);
  if (activeItem) {
    activeItem.classList.add('active');
  }
} else {
  // Default to Home page if no previous visit data
  document.querySelector('.resource-item[data-target="home"]').classList.add('active');
}

// Show the last visited resource content (if available)
if (lastVisited) {
  const activeDetail = document.getElementById(lastVisited);
  if (activeDetail) {
    activeDetail.style.display = 'block';
  }
}

resourceList.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.dataset.target;
    resourceDetails.forEach(detail => {
      detail.style.display = 'none';
      if (detail.id === targetId) {
        detail.style.display = 'block';
      }
    });
    resourceList.forEach(listItem => listItem.classList.remove('active'));
    item.classList.add('active');

    // Store the last visited resource in localStorage
    localStorage.setItem('lastVisited', targetId);
  });
});
