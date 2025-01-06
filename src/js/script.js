// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Menu
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

function unduhFile() {
  var link = document.createElement("a");
  link.href = "src/CV/dimas-sanjaya.pdf";
  link.download = "dimas-sanjaya.pdf";
  link.click();
}

// Pindah posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// dropdown menu
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const contentSections = document.querySelectorAll("section[id]"); // Pilih semua section dengan id

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

dropdownMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const targetId = event.target.getAttribute("href"); // Ambil id section dari href

    // Sembunyikan semua section
    contentSections.forEach((section) => {
      section.classList.add("hidden");
    });

    // Tampilkan section yang dipilih
    const targetSection = document.querySelector(targetId);
    targetSection.classList.remove("hidden");

    // Tutup dropdown menu
    dropdownMenu.classList.add("hidden");
  }
});

// function filterPortfolio(category) {
//   portfolioItems.forEach((item) => {
//     if (category === "all" || item.getAttribute("data-category") === category) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });

//   // Menambahkan kelas active pada tombol filter yang dipilih
//   filterButtons.forEach((button) => {
//     button.classList.remove("active");
//   });
//   const activeButton = document.querySelector(`[data-category="${category}"]`);
//   if (activeButton) {
//     activeButton.classList.add("active");
//   }
// }

// // Menambahkan event listener pada setiap tombol filter
// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const category = button.getAttribute("data-category");
//     filterPortfolio(category);
//   });
// });

// // Filter default: Menampilkan semua portfolio items
// filterPortfolio("all");
