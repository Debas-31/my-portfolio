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