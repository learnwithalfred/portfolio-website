const projects = [
  {
    id: '1',
    name: 'Christ Model Academy Website',
    live_version: 'http://christmodel.academy',
    description:
      'A School Website build for Christ model Academy. It shows everything about the school, including location, contact link, gallery and admissions. This Website has been loved so much by the school and the Parents board. It was build with Laravel and PHP as a freelance project. The code is not open source',
    featured_image: 'images/projects/3.png',
    source: 'https://github.com/learnwithalfred',
    technologies: ['Laravel', 'PHP', 'HTML & CSS', 'JavaScript'],
  },
  {
    id: '2',
    name: 'Aura Geospatial Website',
    description:
      'A website build for a Drones Spraying Company. I build this website on freelance. I am still managing the website for the company. The code is not open source. To view the website visit the live link',
    featured_image: 'images/projects/1.png',
    live_version: 'https://aurageospatial.com',
    source: 'https://github.com/learnwithalfred',
    technologies: ['HTML/CSS', 'React JS', 'JavaScript'],
  },

  {
    id: '3',
    name: 'babylontruckingllc website',
    featured_image: 'images/projects/2.png',
    description:
      'A freelance project built for babylon logistics company. This was private project. visit link above to learn more about the project',
    live_version: 'https://www.babylontruckingllc.com',
    source: 'https://github.com/learnwithalfred',
    technologies: ['HTML/CSS', 'React JS', 'JavaScript'],
  },
];

// projects = JSON.stringify(projects);

const dynamic = document.querySelector('.card-container');

for (let i = 0; i < projects.length; i += 1) {
  const fetch = document.querySelector('.card-container').innerHTML;

  dynamic.innerHTML = ` 
    <div class="card">
            <div class="project_container third__card">
              <div class="card__image third_img">
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
    (element) => `<li class='projects__languages--third'>${element}</li>`,
  )}
                  </ul>
                </div>
                <div class="projects__btn">
                  <button type="button" class="btn">See Projects</button>
                </div>
              </div>
            </div>
          </div>
${fetch}`;
}
