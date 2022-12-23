// Mobile Menu

const menuBar = document.getElementById('menu_bar');
const times = document.getElementById('close_menu');
const hamburgerBtn = document.getElementById('menuBarImg');
const closeBar = document.getElementById('close_bar');
const lists = document.getElementById('menu_list');
const hiddenScrol = document.getElementById('hideOverflow');
const blurEffect = document.querySelectorAll('.toblur');
let isDisplay = true;

menuBar.addEventListener('click', () => {
  if (isDisplay) {
    hamburgerBtn.style.display = 'none';
    times.style.display = 'block';
    closeBar.classList.add('icon-menu');
    lists.classList.add('js-nav-list');
    hiddenScrol.classList.add('hide-scroll');
    for (let i = 0; i < blurEffect.length; i += 1) {
      blurEffect[i].classList.add('blurring');
    }
    isDisplay = false;
  } else {
    hamburgerBtn.style.display = 'block';
    times.style.display = 'none';
    closeBar.classList.replace('icon-menu', 'nav-menu');
    lists.classList.replace('js-nav-list', 'dv-nav');
    hiddenScrol.classList.remove('hide-scroll');
    for (let i = 0; i < blurEffect.length; i += 1) {
      blurEffect[i].classList.remove('blurring');
    }
    isDisplay = true;
  }
});

// Pop Version of the portfolio

const data = [
  {
    title: "WT BOOTCAMP 2022",
    description:
      "A fun festival where people from more than 80 countries who believe in the value of \
      sharing and openness and create positive change gather and share their thoughts\
      will be held in Korea in October.",
    linkImg: "images/snapshot1.png",
    techs: ["Html", "CSS", "Javascript"],
    liveLink: "https://bit.ly/wt-universal-bootcamp",
    githubLink: "https://github.com/Ibnballo1/Capstone-Project-1",
  },
  {
    title: "Todo List App",
    description:
      "This is a To-Do-List App built with HTML5, CSS, and JavaScript. \
      This app enables a user to add, edit, update and remove task(s). \
      This app also integrated the use of webpack and other dependencies.",
    linkImg: "images/snapshot2.png",
    techs: ["Html", "CSS", "Javascript", "Webpack"],
    liveLink: "https://bit.ly/JS-ToDoApp",
    githubLink: "https://github.com/Ibnballo1/ToDo-List-App",
  },
  {
    title: "Leaderboard API",
    description:
      "The leaderboard website displays scores submitted by different players. \
      It also allows you to submit your score.",
    linkImg: "images/snapshot3.png",
    techs: ["Html", "CSS", "Javascript", "Webpack"],
    liveLink: "https://bit.ly/LeaderBoardAPI",
    githubLink: "https://github.com/Ibnballo1/LeaderBoard-API-App",
  },
  {
    title: "Cloud Site",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    linkImg: "images/snapshot4.png",
    techs: ["Html", "CSS"],
    liveLink: "https://bit.ly/Cloud-Site",
    githubLink: "https://github.com/Ibnballo1/CloudSite",
  },
];

// Creating the worksection dynamically
const workSection = document.querySelector('.work-section');
let counter = 0;

data.forEach((works) => {
  const {
    title, description, linkImg, techs,
  } = works;

  let listOfTechs = '';
  techs.forEach((tech) => {
    listOfTechs += `<li class='tag-${counter + 1}'><a href="#" class="tag-link">${tech}</a></li>`;
  });

  const cardHTML = `
  <div class="works work${counter + 1}">
                <div class="image${counter + 1} project-img">
                  
                </div>
                <div class="work-details">
                    <h2 class="project-title">
                        ${title}
                    </h2>
                    <div class="frame dv-frame">
                        <p class="items item1">CANOPY</P>
                        <div class="items counter"></div>
                        <p class="items item2">Back End Dev</p>
                        <div class="items counter"></div>
                        <p class="items item3">2015</p>
                    </div>
                    <p class="primary-text">
                        ${description}
                    </p>
                    <ul class="tags">
                        ${listOfTechs}
                    </ul>
                    <button type="submit" class="project-btn btn-work" data-works = "${counter}">
                            See Project
                    </button>
                </div>
            </div>
  `;

  workSection.insertAdjacentHTML('beforeend', cardHTML);
  document.querySelector(`.image${counter + 1}`).style.backgroundImage = `url("${linkImg}")`;
  // Set background image dynamically
  counter += 1;
});

// Select Work Card Button for popup
const popupButtons = document.querySelectorAll('.btn-work');
popupButtons.forEach((popBtn) => {
  popBtn.addEventListener('click', () => {
    const btnWorkIndex = popBtn.dataset.works;
    const {
      title, description, techs, linkImg, liveLink, githubLink,
    } = data[btnWorkIndex];

    let listOfTechs = '';
    techs.forEach((tech) => {
      listOfTechs += `<li class='tag-1'><a href="#" class="tags-link html-tag">${tech}</a></li>`;
    });

    const modalPopup = `
    <div class="modal-content">
      <div class="modal-title-times">
        <h2 class="modal-title">${title}</h2>
        <p id="close-modal" class="cls-btn">&times;</p>
      </div>
      <div class="frame dv-frame modal-year">
        <p class="items item1">CANOPY</P>
        <div class="items counter"></div>
        <p class="items item2">Back End Dev</p>
        <div class="items counter"></div>
        <p class="items item3">2015</p>
      </div>
          <div class="modal-img">
            <img src="${linkImg}" class="modal-img-1" alt="card-image-1" >
          </div>
          <div class="desk-description">
            <div class="modal-text-container">
              <p class="modal-text">
                ${description}
              </p>
            </div>
            <div class="deskt-techs">
              <ul class="tags modal-tags">
                ${listOfTechs}
              </ul>
              <hr />
              <div class="modal-button">
                <a href="${liveLink}" target= "_blank" id="live-btn" type="button" class="btn">
                  <span>See live</span> <img src="images/btn-icon.svg" class="see-live-icon" alt="button live icon" />
                </a>
                <a href="${githubLink}" id="src-btn" type="button" class="btn">
                  <span>See Source</span> <img src="images/btn-github.png" class="see-src-icon" alt="button github icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
    `;

    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    const modalSection = document.querySelector('.modal');
    modalSection.innerHTML = modalPopup;
    modalSection.style.display = 'flex';

    const popCloseButton = document.querySelector('.cls-btn');
    popCloseButton.addEventListener('click', () => {
      modalSection.style.display = 'none';
      modalSection.innerHTML = '';
      body.style.overflow = 'scroll';
    });
  });
});

// Validating form section

const form = document.getElementById('form');
const mailValue = document.getElementById('useremail');
const errorMessage = document.getElementById('errMessage');

form.addEventListener('submit', (e) => {
  const showMessage = [];
  if (mailValue.value.toLowerCase() !== mailValue.value) {
    errorMessage.style.display = 'inline-block';
    showMessage.push(`
    Error: Email should be in lowercase,
    you entered ${mailValue.value}
    `);
  } else {
    form.submit();
  }
  e.preventDefault();
  errorMessage.innerText = showMessage;
});

// Local Storage Session
const userInput = document.getElementById('username');
const msgInput = document.getElementById('msg');

// Checking if data are in local storage and getting them
function getDatas() {
  if (localStorage.getItem('formField') !== null) {
    const formInput = JSON.parse(localStorage.getItem('formField'));
    userInput.value = formInput[userInput.name];
    mailValue.value = formInput[mailValue.name];
    msgInput.value = formInput[msgInput.name];
  }
}

getDatas();

const formField = {
  username: userInput.value,
  useremail: mailValue.value,
  msg: msgInput.value,
};

// set the inputs
function setInputs(formDetails) {
  formField[formDetails.name] = formDetails.value;
  localStorage.setItem('formField', JSON.stringify(formField));
}

userInput.addEventListener('input', () => {
  setInputs(userInput);
});

mailValue.addEventListener('input', () => {
  setInputs(mailValue);
});

msgInput.addEventListener('input', () => {
  setInputs(msgInput);
});
