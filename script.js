// ! sidebar start
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open');
});

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !e.target.classList.contains('menu-toggle')) {
        sidebar.classList.remove('sidebar-open');
    }
});

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-open');
});
// ! sidebar end




// ! header nav
let lastScrollTop = 0;
const navMenü = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Aşağı kaydırma
        navMenu.style.top = '-6rem'; // Menüyü yukarı kaydırarak gizle
    } else {
        // Yukarı kaydırma
        navMenu.style.top = '0'; // Menüyü tekrar görünür yap
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
// ! header end


// ! scroll start
const scrollToTopBtn = document.getElementById("scrollToTopBtn");


scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});
// ! scroll end

