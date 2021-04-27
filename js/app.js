// Function Nav-Burger Responsive
const burgerMenu = document.getElementById('navbar-burger')
const navbarBasicExample = document.getElementById('navbarBasicExample')

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('is-active')
    navbarBasicExample.classList.toggle('is-active')
})


const btnReport = document.getElementById("btn-reports");
const btnCategories = document.getElementById("btn-categories");
const btnBalance = document.getElementById("btn-balance");
const reportSection = document.getElementById("report-section");
const formOperation = document.getElementById("form-operation");
const balanceSection = document.getElementById("balance-section");



btnReport.addEventListener("click", () => {
    
    balanceSection.classList.add("is-hidden");
    formOperation.classList.add("is-hidden");
    reportSection.classList.remove("is-hidden");
  });


  btnBalance.addEventListener('click', () => {
    balanceSection.classList.remove('is-hidden')
    reportSection.classList.add('is-hidden')
    // categoriesSection.classList.add('is-hidden')
    formOperation.classList.add('is-hidden')
});

btnCategories.addEventListener('click', () => {
    balanceSection.classList.add('is-hidden')
    reportSection.classList.add('is-hidden')
    // categoriesSection.classList.remove('is-hidden')
    formOperation.classList.add('is-hidden')
});

