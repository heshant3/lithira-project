// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");

// Get all screenshot containers
const screenshotContainers = document.querySelectorAll(".screenshot-container");

// Add click event to each screenshot container
screenshotContainers.forEach((container) => {
  container.addEventListener("click", function () {
    const img = this.querySelector(".validation-screenshot");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalCaption.innerHTML = img.alt;
  });
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});
