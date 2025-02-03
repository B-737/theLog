
  // Select the navbar and the section where you want to trigger the change
  const navbar = document.querySelector('.navbar');
  const section = document.querySelector('.leftHeroSection'); // This selects the section with class "backgroundcolor"

  // Function to handle the scroll event
  function handleScroll() {
    // Get the position of the section relative to the viewport
    const sectionPosition = section.getBoundingClientRect();

    // If the section is within the viewport, change the navbar class
    if (sectionPosition.top <= 0) {
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light');
      navbar.classList.remove('navbar-custom-dark');
      navbar.classList.add('navbar-custom-light');
    } else {
      navbar.classList.remove('navbar-light');
      navbar.classList.add('navbar-dark');
      navbar.classList.add('navbar-custom-dark');
      navbar.classList.remove('navbar-custom-light');
    }
  }

  // Add the scroll event listener
  window.addEventListener('scroll', handleScroll);
