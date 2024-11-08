function slideInOnScroll() {
	const sections = document.querySelectorAll('.team-members');
  
	sections.forEach(section => {
	  const sectionPosition = section.getBoundingClientRect().top;
	  const windowHeight = window.innerHeight;
  
	  if (sectionPosition < windowHeight - 100) {
		section.classList.add('scrolled');
	  }
	});
  }
  
  window.addEventListener('scroll', slideInOnScroll);
  window.addEventListener('load', slideInOnScroll);

  // Function to increment counters
function animateCounter(id, start, end, duration) {
	const element = document.getElementById(id);
	let current = start;
	const increment = Math.ceil((end - start) / (duration / 20)); // Increment in each step
  
	const counterInterval = setInterval(() => {
	  current += increment;
	  if (current >= end) {
		current = end; // Cap the number at end value
		clearInterval(counterInterval); // Stop animation
	  }
	  element.textContent = `${current}+`; // Update counter
	}, 20); // 20ms delay for smoother animation
  }
  
  // Trigger the counters with values
 
  let options = {
	root: null, // Uses the viewport as the root
	threshold: 0.1, // Trigger when at least 10% of the element is visible
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) 
			{
				animateCounter("experience", 0, 15, 3000); // 15 years of experience
			animateCounter("projectsCompleted", 0, 350, 2000); // 350 completed projects
			animateCounter("activeProjects", 0, 25, 3000); // 12 active projects
			animateCounter("activeWorkers", 0, 250, 2000);
			observer.disconnect(); // Stops observing once the animation has triggered
			
		
	  }
	});
  }, options);
  
  observer.observe(document.querySelector('.counter-container'));
  
  $('.slide').hiSlide();