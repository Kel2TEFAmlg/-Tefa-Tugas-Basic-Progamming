// Navbar
// Note untuk responsive website saya hanya tambahkan pada navbar.
const navSlide = () => {
  const menu = document.querySelector('.nav-bar');
  const nav = document.querySelector('.nav-links');
  const menuLinks = document.querySelectorAll('.nav-links li')
  menu.addEventListener('click' , () => {
    // Toggle Nav
     nav.classList.toggle('nav-active')
     // Animate Links
     menuLinks.forEach((link, index) => {
       if (link.style.animation) {
         link.style.animation = '';
       } else {
         link.style.animation = `LinkFade 0.5s ease forwards ${index / 7 + 0.3 }s`;
       }
     });
     // animation menu bar
     menu.classList.toggle('toggle')
  });

}
navSlide();
// content 
let home = document.getElementById("home-section");
let contact = document.getElementById("contact-section");
let profile = document.getElementById("profile-section");

let homeBtn = document.getElementById("home-button");
let contactBtn = document.getElementById("contact-button");
let profileBtn = document.getElementById("profile-button");
const onHome = () => {
  homeBtn.style.backgroundColor = "#000";
  contactBtn.style.backgroundColor = "#178fd6";
  profileBtn.style.backgroundColor = "#178fd6";
  contact.style.display = "none";
  home.style.display = "block";
  home.style.animation = `LinkFade 0.5s ease forwards 0.003s`;
  profile.style.display = "none";
}
const onProfile = () => {
  homeBtn.style.backgroundColor = "#178fd6";
  contactBtn.style.backgroundColor = "#178fd6";
  profileBtn.style.backgroundColor = "#000";
  contact.style.display = "none";
  home.style.display = "none";
  profile.style.animation = `LinkFade 0.5s ease forwards 0.003s`;
  profile.style.display = "block";
}
const onContact = () => {
  homeBtn.style.backgroundColor = "#178fd6";
  contactBtn.style.backgroundColor = "#000";
  profileBtn.style.backgroundColor = "#178fd6";
  contact.style.display = "block";
  contact.style.animation = `LinkFade 0.5s ease forwards 0.003s`;
  home.style.display = "none";
  profile.style.display = "none";
}
const onSumbit = () => {
  alert("Pesan Kamu telah terkirim!")
}