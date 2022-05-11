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
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    linkImg: 'images/snapshot1.png',
    techs: ['Html', 'CSS', 'Javascript'],
  },
  {
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    linkImg: 'images/snapshot2.png',
    techs: ['Html', 'CSS', 'Javascript'],
  },
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    linkImg: 'images/snapshot3.png',
    techs: ['Html', 'CSS', 'Javascript'],
  },
  {
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    linkImg: 'images/snapshot4.png',
    techs: ['Html', 'CSS', 'Javascript'],
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
    listOfTechs += `<li class="tag-${counter + 1}"><a href="#" class="tag-link">${tech}</a></li>`
  });

  /*const cardHTML = `
  <div class="work-card-${counter + 1}">
  <div class="snapshot-portfolio-${counter + 1}"></div>
  <div class="project-title">
    <h2>${title}</h2>
    <div class="frame dv-frame">
      <p class="texts text-1">CANOPY</p>
      <p class="count"></p>
      <p class="texts text-2">Back End Dev</p>
      <p class="count"></p>
      <p class="texts text-3">2015</p>
    </div>
    <p class="pry-text">${description}</p>
    <ul class="tags">${listOfTechs}</ul>
    <div class="action-btn">
      <button type="button" class="btn btn-work" data-works="${counter}">
        <span>See Project</span>
      </button>
    </div>
  </div>
</div>
  `;*/

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
                    <button type="submit" class="project-btn" data-works = "${counter}">
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
      title, description, techs, linkImg,
    } = data[btnWorkIndex];

    let listOfTechs = '';
    techs.forEach((tech) => {
      listOfTechs += `<li><a href="#" class="tags-link html-tag">${tech}</a></li>`;
    });

    const modalPopup = `
    <div class="modal-content">
          <h2 class="modal-title">${title}</h2>
          <p id="close-modal" class="cls-btn">&times;</p>
          <div class="frame dv-frame modal-year">
            <p class=" mod-yr texts text-1">CANOPY</p>
            <p class="count"></p>
            <p class=" mod-yr texts text-2">Back End Dev</p>
            <p class="count"></p>
            <p class=" mod-yr texts text-3">2015</p>
          </div>
          <div class="modal-img">
            <img src="${linkImg}" class="modal-img-1" alt="card-image-1" >
          </div>
          <div class="desk-description">
            <p class="modal-text">
              ${description}
            </p>
            <div class="deskt-techs">
              <ul class="tags modal-tags">
                  ${listOfTechs}
              </ul>
              <div class="divider">
                <hr />
              </div>
              <div class="modal-button">
                <button id="live-btn" type="button" class="btn">
                  <span>See live <img src="./Images/btn-icon.svg" class="see-live-icon" alt="button live icon" /></span>
                </button>
                <button id="src-btn" type="button" class="btn">
                  <span>See Source <img src="./Images/btn-github.png" class="see-src-icon" alt="button github icon" /></span>
                </button>
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