// Mobile Menu

const menuBar = document.getElementById("menu_bar");
const times = document.getElementById("close_menu");
const hamburgerBtn = document.getElementById("menuBarImg");
const closeBar = document.getElementById("close_bar");
const lists = document.getElementById("menu_list");
const hiddenScrol = document.getElementById("hideOverflow");
const blurEffect = document.querySelectorAll(".toblur");
const overflowWorkSection = document.getElementById("worksections");
const headers = document.querySelector(".headers");
let isDisplay = true;

menuBar.addEventListener("click", () => {
  if (isDisplay) {
    // headers.style.top = '100px';
    hamburgerBtn.style.display = "none";
    times.style.display = "block";
    closeBar.classList.add("icon-menu");
    lists.classList.add("js-nav-list");
    hiddenScrol.classList.add("hide-scroll");
    for (let i = 0; i < blurEffect.length; i += 1) {
      blurEffect[i].classList.add("blurring");
    }
    isDisplay = false;
  } else {
    hamburgerBtn.style.display = "block";
    times.style.display = "none";
    closeBar.classList.replace("icon-menu", "nav-menu");
    lists.classList.replace("js-nav-list", "dv-nav");
    hiddenScrol.classList.remove("hide-scroll");
    for (let i = 0; i < blurEffect.length; i += 1) {
      blurEffect[i].classList.remove("blurring");
    }
    isDisplay = true;
  }
});

// Pop Version of the portfolio

const data = [
  {
    title: "School Portal",
    company: "Side Project",
    description: `This is a user-friendly web application designed to help schools efficiently manage students, teachers, classes, and grades. With secure authentication and an intuitive dashboard, it simplifies daily administrative tasks and keeps academic records organized.`,
    linkImg: "images/snapshot6.png",
    techs: ["NextJs", "PostgreSQL", "TailwindCSS"],
    dev: "FullStack",
    year: "2025",
    liveLink: "https://school-management-app-orcin.vercel.app/admin",
    githubLink: "https://github.com/Ibnballo1/school_app",
  },
  {
    title: "Fiscal Fusion",
    company: "Side Project",
    description: `Fiscal Fusion is a full-stack platform built to streamline reseller and retailer operations. It features secure authentication, intuitive dashboards, and seamless API integration for managing users, products, and transactions efficiently.`,
    linkImg: "images/snapshot5.png",
    techs: ["Nextjs", "TailwindCSS", "React", "PostgreSQL"],
    dev: "FullStack",
    year: "2025",
    liveLink: "https://fiscal-fusion.vercel.app/",
    githubLink: "https://github.com/Ibnballo1/fiscal-fusion",
  },
  {
    title: "Admin Dashboard",
    company: "Side Project",
    description: `Admin Dashboard is a responsive web application designed for efficient data management and visualization. It includes secure authentication, dynamic tables, and interactive charts, allowing users to monitor, update, and analyze key metrics in real time`,
    linkImg: "images/snapshot3.png",
    techs: ["Nextjs, Shadcn", "TailwindCSS", "Typescript"],
    dev: "Front End",
    year: "2025",
    liveLink: "https://dashboard-three-nu-84.vercel.app/",
    githubLink: "https://github.com/Ibnballo1/dashboard-app",
  },
  {
    title: "Talksy",
    company: "Side Project",
    description:
      "Talksy is a modern social media platform designed to connect people through seamless conversations and engaging interfaces. The frontend features a clean, responsive design built for smooth user interaction and future backend integration.",
    linkImg: "images/snapshot1.png",
    techs: ["Reactjs", "CSS"],
    dev: "Front End",
    year: "2024",
    liveLink: "https://talksy-nu.vercel.app/",
    githubLink: "https://github.com/Ibnballo1/talksy",
  },
  {
    title: "WT BOOTCAMP 2022",
    company: "FREELANCE",
    description: `WT Bootcamp is a conference website where professionals from diverse backgrounds gather to engage in dynamic discussions about software development.`,
    linkImg: "images/snapshot4.png",
    techs: ["Html", "CSS", "Javascript"],
    dev: "Front End",
    year: "2022",
    liveLink: "https://ibnballo1.github.io/Capstone-Project-1/",
    githubLink: "https://github.com/Ibnballo1/Capstone-Project-1",
  },
  {
    title: "Roam Vista",
    company: "FREELANCE",
    description: `Roam Vista is an immersive one-page website designed to inspire travelers by showcasing breathtaking destinations,
        vibrant cultures, and travel tips. The website captures the essence of adventure and discovery through beautiful imagery and a clean,
        user-friendly layout. Built with HTML and CSS.`,
    linkImg: "images/snapshot7.png",
    techs: ["Html", "CSS"],
    dev: "Front End",
    year: "2023",
    liveLink: "https://classy-cucurucho-ef86a2.netlify.app/",
    githubLink: "https://github.com/Ibnballo1/travel-website",
  },

  {
    title: "Ella Lens",
    company: "FREELANCE",
    description: `Ella Lens is an immersive one-page website dedicated to the artistry of a female photographer,
        weaving visual narratives that celebrate life's beauty through captivating moments and storytelling.
        Build with Html and CSS`,
    linkImg: "images/snapshot2.png",
    techs: ["Html", "CSS"],
    dev: "Front End",
    year: "2023",
    liveLink: "https://prismatic-kleicha-e790c2.netlify.app/",
    githubLink: "https://github.com/Ibnballo1/photograph",
  },
];

// Creating the worksection dynamically
const workSection = document.querySelector(".work-section");
let counter = 0;

data.forEach((works) => {
  const { title, company, description, linkImg, techs, dev, year } = works;

  let listOfTechs = "";
  techs.forEach((tech) => {
    listOfTechs += `<li class='tag-${
      counter + 1
    } flex-container'><a href="#" class="tag-link">${tech}</a></li>`;
  });

  const cardHTML = `
  <div class="works work${counter + 1}">
                <div class="image-div">
                  <img src=${linkImg} alt='project screenshot' class='project-img' />
                </div>
                <div class="work-details flex-container">
                    <h2 class="project-title">
                        ${title}
                    </h2>
                    <div class="frame dv-frame jc-sb flex-container">
                        <p class="items item1">${company}</P>
                        <div class="items counter">.</div>
                        <p class="items item2">${dev} Dev</p>
                        <div class="items counter">.</div>
                        <p class="items item3">${year}</p>
                    </div>
                    <p class="primary-text">
                        ${description}
                    </p>
                    <ul class="tags jc-sb flex-container">
                        ${listOfTechs}
                    </ul>
                    <button type="submit" class="project-btn btn-work" data-works = "${counter}">
                            See Project
                    </button>
                </div>
            </div>
  `;

  workSection.insertAdjacentHTML("beforeend", cardHTML);
  counter += 1;
});

// Select Work Card Button for popup
const popupButtons = document.querySelectorAll(".btn-work");
popupButtons.forEach((popBtn) => {
  popBtn.addEventListener("click", () => {
    const btnWorkIndex = popBtn.dataset.works;
    const {
      title,
      company,
      description,
      techs,
      linkImg,
      dev,
      year,
      liveLink,
      githubLink,
    } = data[btnWorkIndex];

    let listOfTechs = "";
    techs.forEach((tech) => {
      listOfTechs += `<li class='tag-1'><a href="#" class="tags-link html-tag">${tech}</a></li>`;
    });

    const modalPopup = `
    <div class="modal-content bg-white">
      <div class="modal-title-times flex-container jc-sb">
        <h2 class="modal-title">${title}</h2>
        <p id="close-modal" class="cls-btn">&times;</p>
      </div>
      <div class="frame dv-frame modal-year flex-container">
        <p class="items item1">${company}</P>
        <div class="items counter"></div>
        <p class="items item2">${dev} Dev</p>
        <div class="items counter"></div>
        <p class="items item3">${year}</p>
      </div>
          <div class="modal-img flex-container">
            <img src="${linkImg}" class="modal-img-1" alt="card-image-1" >
          </div>
          <div class="desk-description">
            <div class="modal-text-container">
              <p class="modal-text">
                ${description}
              </p>
            </div>
            <div class="deskt-techs">
              <ul class="tags jc-sb flex-container modal-tags">
                ${listOfTechs}
              </ul>
              <hr />
              <div class="modal-button flex-container">
                <a href="${liveLink}" target= "_blank" id="live-btn" type="button" class="btn flex-container bg-white">
                  <span>See live</span> <img src="images/btn-icon.svg" class="see-live-icon" alt="button live icon" />
                </a>
                <a href="${githubLink}" id="src-btn" type="button" class="btn flex-container bg-white">
                  <span>See Source</span> <img src="images/btn-github.png" class="see-src-icon" alt="button github icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
    `;

    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    const modalSection = document.querySelector(".modal");
    modalSection.innerHTML = modalPopup;
    modalSection.style.display = "flex";

    const popCloseButton = document.querySelector(".cls-btn");
    popCloseButton.addEventListener("click", () => {
      modalSection.style.display = "none";
      modalSection.innerHTML = "";
      body.style.overflow = "scroll";
    });
  });
});

// Validating form section

const form = document.getElementById("form");
const mailValue = document.getElementById("useremail");
const errorMessage = document.getElementById("errMessage");

form.addEventListener("submit", (e) => {
  const showMessage = [];
  if (mailValue.value.toLowerCase() !== mailValue.value) {
    errorMessage.style.display = "inline-block";
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
const userInput = document.getElementById("username");
const msgInput = document.getElementById("msg");

// Checking if data are in local storage and getting them
function getDatas() {
  if (localStorage.getItem("formField") !== null) {
    const formInput = JSON.parse(localStorage.getItem("formField"));
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
  localStorage.setItem("formField", JSON.stringify(formField));
}

userInput.addEventListener("input", () => {
  setInputs(userInput);
});

mailValue.addEventListener("input", () => {
  setInputs(mailValue);
});

msgInput.addEventListener("input", () => {
  setInputs(msgInput);
});
