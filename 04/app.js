const TRAIL_LENGTH = 1; // Number of trail circles

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Check if the mouse is within the window
  if (mouseX >= 0 && mouseX <= window.innerWidth && mouseY >= 0 && mouseY <= window.innerHeight) {
    const mousex = mouseX - 7.5;
    const mousey = mouseY - 7.5 + window.pageYOffset; // Include scroll offset

    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const opacity = 1 - (i / (TRAIL_LENGTH - 1)); // Calculate decreasing opacity
      const circle = document.querySelectorAll('.circle')[i]; // Access specific circle

      // Check if the circle exists before manipulating its style
      if (circle) {
        circle.style.opacity = opacity.toString(); // Set opacity according to trail position
        circle.style.transform = `translate(${mousex - i}px, ${mousey}px)`; // Shift each circle slightly behind the main one
      }
    }
  }
});
const imageContainer = document.getElementById('imageContainer');

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { offsetWidth, offsetHeight } = imageContainer;
  const xPercent = (clientX / offsetWidth - 0) * 10;
  const yPercent = (clientY / offsetHeight - 0) * 10;

  imageContainer.style.transform = `rotateY(${xPercent}deg) rotateX(${yPercent}deg) scale(1.1)`;
});

document.addEventListener('mouseleave', () => {
  imageContainer.style.transform = 'none';
});

const bookmeButton = document.getElementById('bookmeButton');

function flicker() {
  const pauseDuration = Math.random() * 200 + 100; // Random pause duration between 0.5 and 2.5 seconds
  const blinkDuration = Math.random() * 500 + 20; // Random blinking duration between 0.2 and 0.7 seconds

  // Apply varient class
  bookmeButton.classList.add('varient');

  // Set a timeout to remove the varient class after the random blinking duration
  setTimeout(() => {
    bookmeButton.classList.remove('varient');

    // Set a timeout to call the flicker function again after the random pause duration
    setTimeout(flicker, pauseDuration);
  }, blinkDuration);
}

// Initial call to start the flickering
flicker();
bookmeButton.addEventListener('click', function () {
  // Change the URL below to the desired destination
  const websiteURL = 'https://gmail.com';
  window.open(websiteURL, '_blank');
});






