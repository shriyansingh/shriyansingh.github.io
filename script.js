// Array of project data
const projects = [
    {
      title: 'Stacked Tic-Tac-Toe',
      image: 'images/tictactoe.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['Java', 'GUI', 'Team Work']
    },
    {
      title: 'Trie Dictionary',
      image: 'images/trie.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['Data Structures', 'Algorithms', 'C++']
    },
    {
      title: 'Project 3',
      image: 'images/projects/3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['Skill 1', 'Skill 2', 'Skill 3']
    },
    {
        title: 'Project 4',
        image: 'images/projects/3.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        skills: ['Skill 1', 'Skill 2', 'Skill 3']
    }
    // Add more project objects as needed
  ];
  
  let currentProjectIndex = 0;
  
  function renderProjects() {
    const projectCardsContainer = document.getElementById('project-cards');
    projectCardsContainer.innerHTML = '';
  
    for (let i = currentProjectIndex; i < currentProjectIndex + 3 && i < projects.length; i++) {
      const project = projects[i];
      const projectCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
              <h5 class="card-title" style="color: black;">${project.title}</h5>
              <p class="card-text" style="color: black;">${project.description}</p>
              <ul class="skills-list">
                ${project.skills.map(skill => `<li>${skill}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
      projectCardsContainer.innerHTML += projectCard;
    }
  }
  
  function showNextProjects() {
    currentProjectIndex += 3;
    if (currentProjectIndex >= projects.length) {
      currentProjectIndex = 0;
    }
    renderProjects();
  }
  
  function showPreviousProjects() {
    currentProjectIndex -= 3;
    if (currentProjectIndex < 0) {
      currentProjectIndex = Math.max(0, projects.length - 3);
    }
    renderProjects();
  }
  
  document.getElementById('next-projects-btn').addEventListener('click', showNextProjects);
  document.getElementById('prev-projects-btn').addEventListener('click', showPreviousProjects);
  
  // Initial render
  renderProjects();