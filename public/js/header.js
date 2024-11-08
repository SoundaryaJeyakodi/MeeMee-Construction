document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    dropdown.addEventListener('click', function() {
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        dropdownContent.style.display = 'none';
      }
    };
  });
  