 document.getElementById('showSkillsBtn').addEventListener('click', function() {
    var skillsList = document.getElementById('skills').querySelector('ul');

    // Toggle visibility of skills list
    if (skillsList.style.display === 'none' || skillsList.style.display === '') {
      skillsList.style.display = 'block';
      this.textContent = 'Hide Details';
    } else {
      skillsList.style.display = 'none';
      this.textContent = 'Show Details';
    }
  });
