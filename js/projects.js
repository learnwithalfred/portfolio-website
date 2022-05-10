const projects = [
  {
    id: '1',
    name: 'Christ Model Academy',
    live_version: 'http://christmodel.academy',
    description: 'A School Website build for Christ model Academy.  ',
    featured_image: 'images/projects/3.png',
    source: 'https://github.com/learnwithalfred',
    technologies: ['Laravel', 'PHP', 'HTML & CSS', 'JavaScript'],
  },
  {
    id: '2',
    name: 'Aura Geospatial Website',
    description:
      'A website build for a Drones Spraying Company. I build this website on freelance.  ',
    featured_image: 'images/projects/1.png',
    live_version: 'https://aurageospatial.com',
    source: 'https://github.com/learnwithalfred',
    technologies: ['HTML/CSS', 'React JS', 'JavaScript'],
  },

  {
    id: '3',
    name: 'babylontruckingllc website',
    featured_image: 'images/projects/2.png',
    description: 'A freelance project built for babylon logistics company. ',
    live_version: 'https://www.babylontruckingllc.com',
    source: 'https://github.com/learnwithalfred',
    technologies: ['HTML/CSS', 'React JS', 'JavaScript'],
  },
];

// projects = JSON.stringify(projects);

const dynamic = document.querySelector('.card-container');

for (let i = 0; i < projects.length; i += 1) {
  const fetch = document.querySelector('.card-container').innerHTML;

  const imageNum = i % 2 === 0 ? 'fourth_img' : 'third_img';
  const cardNum = i % 2 === 0 ? 'fourth__card' : 'third__card';

  dynamic.innerHTML = ` 
    <div class="card">
            <div class="project_container ${cardNum}">
              <div class="card__image ${imageNum}">
                <img
         class="project-image"
         src="${projects[i].featured_image}"
         alt="${projects[i].name}"
         title="${projects[i].name}"
       />
              </div>
              <div class="projects">
                <div class="third__project">
                  <h2 class="projects__header">${projects[i].name}</h2>
                  <p class="projects-text">
                    ${projects[i].description}
                  </p>
                </div>
                <div class="projects__languages">
                  <ul class="projects__languages--list">
                    ${projects[i].technologies.map(
                      (element) =>
                        `<li class='projects__languages--first'>${element}</li>`
                    )}
                  </ul>
                </div>
                <div class="projects__btn">
                  <button id='${
                    projects[i].id
                  }' type="button" class="btn" data-modal-target="#modal">See Projects</button>
                </div>
              </div>
            </div>
          </div>
${fetch}`;
}

// const button = document.querySelectorAll('.btn');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// for (let i = 0; i < button.length; i += 1) {
//   button[i].addEventListener('click', (e) => {
//     const foundIndex = Array.from(button).indexOf(e.target);
//     return foundIndex;
//     // console.log(projects[foundIndex]);
//   });
// }

const openModal = (modal) => {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

const closeModal = (modal) => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
