//The project section

const projectsContainer = document.querySelector('.projects-container');
const popupProject = document.querySelector('.popup-project');
const overlayDiv = document.querySelector('.overlay');

const projects = [
  { id: 0,
    title: 'Multi-Post stories',
    picture: 'image/Img-placeholder-project-moblie.png',
    modalPicture: 'image/Img-placeholder-project-moblie.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe..",
    technologies: [html, Ruby, css],
  
  },
  { id: 1,
    title: 'Usb flash drive',
    picture: 'popup-img/flas-drive-3.png',
    modalPicture: 'popup-img/flas-drive-3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe..",
    technologis: [node.js, bootstrap, sass ],
  },
  { id: 2,
    title: 'Facebook 360',
    picture: 'popup-img/facebook-360.png',
    modalPicture: 'popup-img/facebook-360.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe..",
    technologis: [node.js, bootstrap, sass ],
  },
  { id: 3,
    title: 'Uber Navigation',
    picture: 'popup-img/uber-navigation.PNG',
    modalPicture: 'popup-img/uber-navigation.PNG',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe..",
    technologis: [node.js, bootstrap, sass ],
  },
];

// Display a functions

function displayTechnologies(techArr) {
    let technologiesHtml = "<ul class='technologies-used'>";
    techArr.forEach((tech, index) => {
      technologiesHtml += `<li class='technology'>${tech}</li>`;
      if (index !== (techArr.length - 1)) {
        technologiesHtml += "<li class='separator'>./image/vertical-line.png alt='Line separing the technologies used in a project'></li>";
      }
    });
    technologiesHtml += '</ul>';
    return technologiesHtml;
  }

  function displayTechnologiesForModal(techArr) {
    let technologiesHtml = "<ul class='technologies-used'>";
    techArr.forEach((tech, index) => {
      if (index === 0) {
        technologiesHtml += "<li class='separator'><img src='./image/vertical-line.png' alt='Line separing the technologies used in a project'></li>";
      }
      technologiesHtml += `<li class='technology'>${tech}</li>`;
      technologiesHtml += "<li class='separator'><img src='./image/vertical-line.png' alt='Line separing the technologies used in a project'></li>";
    });
    technologiesHtml += '</ul>';
    return technologiesHtml;
  }

  function displaySingleProject(p) {
    const projectHtml = `<div class='project'>
         <div class='screenshot-container'>
           <img src='${p.picture}' alt='Screenshot of the project named ${p.title}'
              class='screenshot'>
         </div>
         <div class='project-rest'>
          <h3 class='project-title'>${p.title}</h3>
          <div class='project-description'>
              <p>${p.description}</p>
          </div>
          ${displayTechnologies(p.technologies)}
          <button class='project-details-btn' type='button' data-project-id='${p.id}'>See Project</button>
      </div>
  </div>
      `;
    return projectHtml;
  }
  