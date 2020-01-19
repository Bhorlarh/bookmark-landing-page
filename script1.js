const menuIcon = document.querySelector("[alt='menu']");

// open and close menu functionality
menuIcon.addEventListener('click', (e) => {
  if (menuIcon.classList.value.includes('open')) {
    menuIcon.src="./images/icon-hamburger.svg"
  } else {
    menuIcon.src = "./images/icon-close.svg";
  }
  menuIcon.classList.toggle('open');
  document.querySelector('header').classList.toggle("active-menu");
  document.querySelector('body').classList.toggle("menu-open");
})

// change features illustrations
for (const feature of document.querySelectorAll(".info-list li")) {
  feature.addEventListener('click', (e) => {
    const currentTab = e.target.getAttribute("name");

    // find and remove former seleccted item
    const currentFeature = e.target.parentNode.querySelector(".active");
    currentFeature.classList.toggle('active');
    currentFeature.querySelector('div').classList.toggle('red-line');

    // set current selected item to active
    e.target.classList.toggle('active');
    e.target.querySelector('div').classList.toggle('red-line');

    const featuresSection = document.querySelector(".features-section");
    const featureImages = featuresSection.querySelectorAll(".image-box img");
    const featureContainers = featuresSection.querySelectorAll(".container");

    // removing current image
    featuresSection.querySelector(".image-box img.active").classList.toggle('active');

    //removing current container
    featuresSection.querySelector(".container.active").classList.toggle('active');

    // change illustration image and
    // show illustration container
    if (currentTab == "tab-1") {
      featureImages[0].classList.toggle('active');
      featureContainers[0].classList.toggle('active');

    } else if (currentTab == "tab-2") {
      featureImages[1].classList.toggle('active');
      featureContainers[1].classList.toggle('active');

    } else {
      featureImages[2].classList.toggle('active');
      featureContainers[2].classList.toggle('active');
    }
  })
}

// control questions drop down
for (const question of document.querySelectorAll(".questions h4")) {
  question.addEventListener('click', (e) => {
    e.target.parentNode.classList.toggle('open');
  })
}

// perform email validation
const emailForm = document.querySelector("form");
emailForm.addEventListener('submit', (e) => {
  const emailInput = emailForm.querySelector("input");
  let error = false;

  var re = /\S+@\S+\.\S+/;

  // submit form
  if (re.test(emailInput.value)) {
    e.target.querySelector("h6").remove();
    e.target.children[0].classList.remove("error");
    emailInput.value = "";
    return;
  }

  // stop form submission and show errors
  e.preventDefault();
  if ( !(e.target.children[0].classList.value.includes("error")) ) {

    const h6 = document.createElement('h6');
    h6.textContent = "Whoops, make sure it's an email";
    h6.classList.add("red-bg", "white-text", "error-msg");

    e.target.children[0].classList.add("error");
    e.target.children[0].appendChild(h6);
  }
})
