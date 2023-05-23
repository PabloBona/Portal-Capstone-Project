/* Menu Burguer */

const menuButton = document.querySelector('.burguer-menu button');
const mobileNav = document.querySelector('.navigation');
const mobileLinks = mobileNav.querySelectorAll('.nav-links a');
const menuImage = document.querySelector('.burguer-menu button i');
const worksContainer = document.querySelector('#invited');

function toggleMenuImage() {
  if (mobileNav.classList.contains('active')) {
    menuImage.classList.add('bx-x');
  } else {
    menuImage.classList.remove('bx-x');
  }
}

menuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  toggleMenuImage();
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    toggleMenuImage();
  });
});

/* Templates */
const invitedTemplate = (data) => `<div class="col-12 col-md-6 speaker-contain">
<div class="content-invited">
  <div class="speaker-pic">
    <img src="${data.workImgDesk}" alt="${data.name}" />
  </div>
  <div class="invited-content">
    <h3 class="speaker-name">${data.name}</h3>
    <p class="speaker-title">
    ${data.work}
    </p>
    <p>
    ${data.hobbies}
    </p>
  </div>
</div>
</div>`;

/* Data */
const invitedData = [
  {
    name: 'Elena Smith',
    work: 'Director of Art Cooking Center and a Member of MasterChef Cuba.',
    hobbies: 'As the new winner of the Air Fried Chicken Contest, Elena promotes now a healthy cook.',
    workImgDesk: './img/invited1.jpg',
    alt: 'Elena',
  },
  {
    name: 'April Anderson',
    work: 'Founder and CEO of Gourmet Delights',
    hobbies: 'Passionate about creating unique flavors and exploring culinary traditions from around the world.',
    workImgDesk: './img/invited2.jpg',
    alt: 'April',
  },
  {
    name: 'Sophia Ramirez',
    work: 'Food Blogger and Recipe Developer',
    hobbies: 'Enjoys experimenting with new ingredients and sharing her creations on social media.',
    workImgDesk: './img/invited3.jpg',
    alt: 'Sophia',
  },
  {
    name: 'Athena Thompson',
    work: 'Award-Winning Chef and Restaurateur',
    hobbies: 'Dedicated to preserving traditional cooking techniques and flavors through his innovative menus.',
    workImgDesk: './img/invited4.jpg',
    alt: 'Athena',
  },
  {
    name: 'Olivia Patel',
    work: 'Nutritionist and Wellness Coach',
    hobbies: 'Passionate about helping others achieve optimal health through balanced nutrition and lifestyle choices.',
    workImgDesk: './img/invited5.jpg',
    alt: 'Olivia',
  },
  {
    name: 'Isabella Martinez',
    work: 'Pastry Chef and Dessert Enthusiast',
    hobbies: 'Specializes in creating delectable desserts with a creative twist and unique flavor combinations.',
    workImgDesk: './img/invited6.jpg',
    alt: 'Isabella',
  },
];

// initialize cards component and attach Event Listeners
invitedData.forEach((data) => {
  worksContainer.innerHTML += invitedTemplate(data);
});
