window.showLoginModal = function () {
  window.showingLogin = true;
  window.showingSignup = false;
  render();
};
window.showSignupModal = function () {
  window.showingSignup = true;
  window.showingLogin = false;
  render();
};
window.closeLoginModal = function () {
  window.showingLogin = false;
  render();
};
window.closeSignupModal = function () {
  window.showingSignup = false;
  render();
};
window.switchToSignup = function () {
  window.showingLogin = false;
  window.showingSignup = true;
  render();
};
window.switchToLogin = function () {
  window.showingSignup = false;
  window.showingLogin = true;
  render();
};
// Modal logic
if (window.showingLogin) {
  app.innerHTML += `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fade-in">
        <div class="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center animate-slide-in relative">
          <button class="absolute top-2 right-4 text-xl text-gray-400 hover:text-gray-700 animate-fade-in" onclick="closeLoginModal()">×</button>
          <h2 class="text-2xl font-bold mb-4">Log In</h2>
          <input type="text" placeholder="Email" class="w-full px-4 py-2 mb-3 border rounded" />
          <input type="password" placeholder="Password" class="w-full px-4 py-2 mb-4 border rounded" />
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full font-bold mb-2">Log In</button>
          <p class="text-sm mt-2">Don't have an account? <a href="#" class="text-green-600 font-bold" onclick="switchToSignup()">Sign Up</a></p>
        </div>
      </div>
    `;
}
if (window.showingSignup) {
  app.innerHTML += `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 animate-fade-in">
        <div class="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full text-left animate-slide-in relative border border-gray-800">
          <button class="absolute top-4 right-6 text-2xl text-gray-400 hover:text-gray-200 transition" onclick="closeSignupModal()">×</button>
          <div class="flex justify-center mb-8">
            <div class="flex rounded-full bg-gray-800 border border-gray-700 overflow-hidden shadow-md" style="min-width:180px;">
              <button class="px-5 py-2 font-semibold focus:outline-none transition-all duration-150 bg-gray-900 text-white" style="border-right:1px solid #222;" onclick="showSignupModal()">Sign up</button>
              <button class="px-5 py-2 font-semibold focus:outline-none transition-all duration-150 text-gray-400 bg-transparent" onclick="showLoginModal()">Sign in</button>
            </div>
          </div>
          <h2 class="text-2xl font-bold mb-6 text-white">Create an account</h2>
          <div class="flex gap-3 mb-4">
            <input type="text" placeholder="John" class="w-1/2 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" />
            <input type="text" placeholder="Last name" class="w-1/2 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <span class="text-gray-400"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg></span>
            <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>
          <div class="mb-4 flex items-center gap-2">
            <span class="text-gray-400"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M17 10.5V7c0-2.76-2.24-5-5-5S7 4.24 7 7v3.5C5.62 11.36 5 12.62 5 14v5c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5c0-1.38-.62-2.64-2-3.5zM12 2c2.21 0 4 1.79 4 4v3.5c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5V6c0-2.21 1.79-4 4-4zm6 17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v5z'/></svg></span>
            <input type="tel" placeholder="(775) 351-6501" class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none" />
          </div>
          <button class="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg mb-4 transition">Create an account</button>
          <div class="flex items-center my-4">
            <div class="flex-grow h-px bg-gray-700"></div>
            <span class="mx-3 text-gray-400 text-sm">OR SIGN IN WITH</span>
            <div class="flex-grow h-px bg-gray-700"></div>
          </div>
          <div class="flex gap-4 mb-6">
            <button class="flex-1 py-2 rounded bg-gray-800 border border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-700 transition"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" class="w-5 h-5" /> <span class="text-white font-semibold">Google</span></button>
            <button class="flex-1 py-2 rounded bg-gray-800 border border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-700 transition"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='white' d='M16.365 1.43c-.982.045-2.19.68-2.9 1.48-.63.7-1.23 1.85-1.01 2.89.99.04 2.22-.64 2.92-1.47.65-.74 1.19-1.89.99-2.9zm4.13 4.13c-1.13-1.13-2.97-1.17-4.13-.04-1.13 1.13-1.09 2.97.04 4.13 1.13 1.13 2.97 1.17 4.13.04 1.13-1.13 1.09-2.97-.04-4.13zm-4.13 13.44c-2.13 2.13-5.59 2.13-7.72 0-2.13-2.13-2.13-5.59 0-7.72 2.13-2.13 5.59-2.13 7.72 0 2.13 2.13 2.13 5.59 0 7.72zm-7.72-13.44c-1.13-1.13-2.97-1.17-4.13-.04-1.13 1.13-1.09 2.97.04 4.13 1.13 1.13 2.97 1.17 4.13.04 1.13-1.13 1.09-2.97-.04-4.13zm-4.13 4.13c-.98.98-1.02 2.56-.04 3.54.98.98 2.56.94 3.54-.04.98-.98 1.02-2.56.04-3.54-.98-.98-2.56-.94-3.54.04zm13.44 13.44c-.98.98-2.56 1.02-3.54.04-.98-.98-.94-2.56.04-3.54.98-.98 2.56-1.02 3.54-.04.98.98.94 2.56-.04 3.54z'/></svg> <span class="text-white font-semibold">Apple</span></button>
          </div>
          <p class="text-xs text-gray-500 text-center">By creating an account, you agree to our <a href="#" class="underline text-gray-400">Terms & Service</a></p>
        </div>
      </div>
    `;
}
window.goToCartPage = function () {
  currentPage = "cart";
  render();
};
window.selectedDessertType = "All";
window.updateDessertFilter = function (type) {
  window.selectedDessertType = type;
  render();
};

window.dessertSearchQuery = "";
window.updateDessertSearch = function (value) {
  if (window.dessertSearchQuery !== value) {
    const input = document.querySelector(
      'input[placeholder="Search desserts..."]'
    );
    let caretPos = input ? input.selectionStart : null;
    window.dessertSearchQuery = value;
    render();
    setTimeout(() => {
      const newInput = document.querySelector(
        'input[placeholder="Search desserts..."]'
      );
      if (newInput) {
        newInput.focus();
        if (caretPos !== null) {
          newInput.setSelectionRange(caretPos, caretPos);
        }
      }
    }, 0);
  }
};

import "./index.css";
import recipes from "./recipes.json";

const app = document.getElementById("app");

let selectedRecipe = null;
let favorites = new Set();
let searchQuery = "";
let selectedType = "All";
let currentPage = "main";
let selectedDessert = null;
function getDessertPrice(tags) {
  if (!tags || !tags.length) return "12 PLN";
  if (tags.includes("Cake")) return "16 PLN";
  if (tags.includes("Cookie")) return "10 PLN";
  if (tags.includes("Pastry")) return "14 PLN";
  if (tags.includes("Frozen")) return "13 PLN";
  if (tags.includes("Fruit")) return "15 PLN";
  return "12 PLN";
}
function getCoffeePrice(type) {
  switch (type) {
    case "Espresso":
      return "9 PLN";
    case "Milk":
      return "12 PLN";
    case "Cold":
      return "14 PLN";
    case "Dessert":
      return "16 PLN";
    case "Alcoholic":
      return "18 PLN";
    default:
      return "10 PLN";
  }
}
window.closeDessertRecipe = function () {
  selectedDessert = null;
  render();
};
let desserts = null;
fetch("../desserts.json")
  .then((res) => {
    if (!res.ok) throw new Error("Not found");
    return res.json();
  })
  .then((data) => {
    desserts = data;
    render();
  })
  .catch(() => {
    desserts = [];
    render();
  });

window.viewDessertRecipe = function (dessertName) {
  let dessert = desserts.find((d) => d.name === dessertName);
  if (!dessert) {
    dessert = recipes.find(
      (r) => r.type === "Dessert" && r.name === dessertName
    );
  }
  if (dessert) {
    selectedDessert = dessert;
    render();
  } else {
    alert("No detailed recipe for " + dessertName + ".");
  }
};

// Night mode toggle
window.toggleNightMode = function () {
  document.body.classList.toggle("night");
  if (document.body.classList.contains("night")) {
    localStorage.setItem("night", "1");
  } else {
    localStorage.removeItem("night");
  }
  const btns = document.querySelectorAll("#toggle-dark");
  btns.forEach(
    (btn) =>
      (btn.textContent = document.body.classList.contains("night")
        ? "☀️"
        : "🌙")
  );
  render();
};

if (localStorage.getItem("night")) {
  document.body.classList.add("night");
}

let beans = null;
fetch("/beans.json")
  .then((res) => {
    if (!res.ok) throw new Error("Not found");
    return res.json();
  })
  .then((data) => {
    beans = data;
    render();
  })
  .catch(() => {
    beans = [];
    render();
  });

window.toggleNavMenu = function () {
  const menu = document.getElementById("nav-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
};

function render() {
  // Helper function to get calories for coffee types
  function getCoffeeCalories(tags) {
    if (!tags) return "";
    // Expanded calorie map for all common coffee types
    const coffeeCaloriesMap = {
      "Egg Coffee": "150 KCAL (120ml, egg & condensed milk)",
      Bicerin: "200 KCAL (espresso, chocolate & cream)",
      Yuanyang: "120 KCAL (240ml, coffee, tea & milk)",
      Espresso: "2 KCAL (30ml, black)",
      Americano: "5 KCAL (240ml, black)",
      Latte: "120 KCAL (240ml, whole milk)",
      Cappuccino: "80 KCAL (180ml, whole milk)",
      Mocha: "180 KCAL (240ml, chocolate & milk)",
      Macchiato: "15 KCAL (60ml, milk foam)",
      "Flat White": "90 KCAL (160ml, whole milk)",
      Affogato: "210 KCAL (with ice cream)",
      "Cold Brew": "3 KCAL (240ml, black)",
      Drip: "2 KCAL (240ml, black)",
      Turkish: "15 KCAL (100ml, sugar)",
      Irish: "150 KCAL (with whiskey/cream)",
      Lungo: "4 KCAL (120ml, black)",
      Ristretto: "1 KCAL (20ml, black)",
      Doppio: "4 KCAL (60ml, black)",
      Cortado: "50 KCAL (60ml, milk)",
      Redeye: "8 KCAL (240ml, black)",
      Romano: "2 KCAL (30ml, lemon)",
      Piccolo: "40 KCAL (90ml, milk)",
      "Vienna Coffee": "120 KCAL (120ml, cream)",
      "Black Eye": "8 KCAL (240ml, black)",
      "White Coffee": "60 KCAL (240ml, milk)",
      "Iced Coffee": "5 KCAL (240ml, black)",
      "Nitro Cold Brew": "3 KCAL (240ml, black)",
      Bulletproof: "230 KCAL (240ml, butter/MCT)",
      "Café au Lait": "90 KCAL (240ml, milk)",
      "Café Bombón": "160 KCAL (60ml, condensed milk)",
      "Café Cubano": "20 KCAL (30ml, sugar)",
      "Café de Olla": "60 KCAL (240ml, piloncillo)",
      "Café con Leche": "110 KCAL (240ml, milk)",
      "Café Breve": "160 KCAL (240ml, half & half)",
      "Café Marocchino": "70 KCAL (60ml, cocoa & milk)",
      "Café Zorro": "4 KCAL (60ml, black)",
      "Café Medici": "140 KCAL (240ml, chocolate & cream)",
      "Café Viennois": "120 KCAL (120ml, cream)",
      "Café Borgia": "180 KCAL (240ml, chocolate & orange)",
      "Café Crème": "100 KCAL (240ml, cream)",
      "Café Miel": "140 KCAL (240ml, honey & milk)",
      "Café Mocha": "180 KCAL (240ml, chocolate & milk)",
      "Café Rápido": "2 KCAL (30ml, black)",
      "Café Dalgona": "120 KCAL (240ml, milk & sugar)",
      "Café Frappe": "80 KCAL (240ml, ice & milk)",
      "Café Freddo": "5 KCAL (240ml, black)",
      "Café Lungo": "4 KCAL (120ml, black)",
      "Café Shakerato": "5 KCAL (60ml, black)",
      "Café Affogato": "210 KCAL (with ice cream)",
      "Café Corretto": "100 KCAL (30ml, grappa)",
      "Café Brûlot": "120 KCAL (120ml, brandy)",
      "Café Touba": "5 KCAL (240ml, black)",
      "Café Phin": "10 KCAL (120ml, condensed milk)",
      "Café Sua Da": "120 KCAL (240ml, condensed milk)",
      "Café Tonic": "30 KCAL (240ml, tonic)",
      "Café Mazagran": "35 KCAL (240ml, lemon)",
      Mazagran: "35 KCAL (240ml, lemon)",
      "Café Bonbon": "160 KCAL (60ml, condensed milk)",
      "Café Con Panna": "100 KCAL (60ml, whipped cream)",
      "Café Leche Y Leche": "140 KCAL (120ml, milk & condensed milk)",
      "Café Bombon": "160 KCAL (60ml, condensed milk)",
    };

    // Modal: always match by name (case-insensitive, trimmed)
    if (
      window.selectedRecipe &&
      window.selectedRecipe.name &&
      tags.length === 1 &&
      tags[0] === window.selectedRecipe.name
    ) {
      const name = window.selectedRecipe.name.trim().toLowerCase();
      for (const key in coffeeCaloriesMap) {
        if (key.trim().toLowerCase() === name) {
          return coffeeCaloriesMap[key];
        }
      }
      // Warn if missing
      console.warn(
        "No calories match for modal name:",
        window.selectedRecipe.name
      );
      return "? KCAL (unknown)";
    }
    // Cards: match by tags (case-insensitive, substring)
    for (const key in coffeeCaloriesMap) {
      for (const tag of tags) {
        if (
          tag &&
          tag.trim().toLowerCase().includes(key.trim().toLowerCase())
        ) {
          return coffeeCaloriesMap[key];
        }
      }
    }
    // Warn if missing
    console.warn("No calories match for card tags:", tags);
    return "2 KCAL (240ml, black)";
  }
  // Add calories to coffee modal window rendering (Main page)
  if (currentPage === "main" && selectedRecipe) {
    app.innerHTML += `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fade-in">
        <div class="${
          document.body.classList.contains("night")
            ? "bg-gray-800 text-white"
            : "bg-white"
        } rounded-xl shadow-xl p-6 max-w-md w-full text-center animate-slide-in relative">
          <button class="absolute top-2 right-4 text-xl text-gray-400 hover:text-gray-700 animate-fade-in" onclick="closeCoffeeRecipe()">×</button>
          <img src="${selectedRecipe.image}" alt="${
      selectedRecipe.name
    } coffee image" class="w-64 h-64 object-cover rounded-full mx-auto border-4 border-amber-500 shadow mb-4 animate-slide-in">
          <h2 class="text-2xl font-bold mb-2">${selectedRecipe.name}</h2>
          <div class="mb-2 text-center text-amber-700 font-semibold text-base">${getCoffeeCalories(
            [selectedRecipe.name]
          )}</div>
          <p class="mb-3" style="color: ${
            document.body.classList.contains("night") ? "#fff" : "#000"
          }">${selectedRecipe.description || "No description provided."}</p>
          <div class="flex gap-2 text-xs mb-4 items-center justify-center flex-wrap">
            ${
              selectedRecipe.tags
                ?.map(
                  (tag) =>
                    `<span class='${
                      document.body.classList.contains("night")
                        ? "bg-green-900 text-green-200"
                        : "bg-green-100 text-green-800"
                    } rounded px-2 py-1 font-semibold animate-fade-in'>${tag}</span>`
                )
                .join("") || ""
            }
          </div>
          <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full animate-fade-in" onclick="closeCoffeeRecipe()" aria-label="Close coffee modal" tabindex="0" onkeydown="if(event.key==='Enter'){closeCoffeeRecipe()}" >Close</button>
        </div>
      </div>
    `;
    window.closeCoffeeRecipe = function () {
      selectedRecipe = null;
      render();
    };
    return;
  }
  if (currentPage === "cart") {
    app.innerHTML = `
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Pacifico&display=swap" rel="stylesheet">
      <style>
        body, input, select, button, h1, h2, h3, h4, h5, h6, p, span, label, .font-main {
          font-family: 'Roboto', Arial, sans-serif !important;
        }
        .font-logo {
          font-family: 'Pacifico', cursive !important;
          letter-spacing: 0.04em;
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      </style>
      <header class="sticky top-0 z-40 ${
        document.body.classList.contains("night")
          ? "bg-gray-900/90"
          : "bg-white/90"
      } backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
        <div class="flex items-center gap-3">
          <img src="/images/cupidoncoffee.png" alt="NovaCup Logo" class="w-14 h-14 object-contain" style="background:transparent; border:none; box-shadow:none;" />
          <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-logo flex items-center gap-2" style="color: #c2410c !important;">
            NovaCup Coffee ☕
          </span>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative w-full">
            <button id="nav-toggle" class="md:hidden px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition w-full flex justify-center items-center" onclick="window.toggleNavMenu()" aria-label="Open navigation menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div id="nav-menu" class="fixed left-0 right-0 top-full w-full ${
              document.body.classList.contains("night")
                ? "bg-gray-900/95 z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
                : "bg-white shadow-lg z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
            }">
              <div class="flex flex-col gap-3 mt-5 md:flex-row md:gap-4 md:mt-0 items-center">
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToMainPage()">Main</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToSecondPage()">Desserts</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToBeansPage()">Beans</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToCraftPage()">Craft Your Cup</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToStoryPage()">Our Story</button>
                <button id="user-icon" class="transition flex items-center justify-center w-10 h-10" onclick="window.showLoginModal()" aria-label="User login">
                  <img src="/images/user.png" alt="User" style="width:24px; height:24px;" class="hover:scale-120 transition" />
                </button>
                <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition mb-3 md:mb-0" onclick="toggleNightMode()">${
                  document.body.classList.contains("night") ? "☀️" : "🌙"
                }</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main class="min-h-screen px-4 py-8">
        <div class="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 class="text-4xl font-bold mb-12 font-logo" style="color:#c2410c">Shopping Cart</h1>
          <img src="/images/cart.png" alt="Shopping Cart" class="w-24 h-24 object-contain mx-auto mb-10" />
          <p class="text-lg mb-6 ${
            document.body.classList.contains("night")
              ? "text-gray-300"
              : "text-gray-500"
          }" style="font-weight: 400;">
            Your cart is currently empty.<br><br>
            (Cart functionality coming soon!)
          </p>
        </div>
      </main>
      <footer class="mt-12 py-6 text-center text-gray-500 text-sm bg-white/80 backdrop-blur shadow-inner">
        &copy; 2025 NovaCup Coffee. Made with ☕ by Bladerunner
      </footer>
    `;
    return;
  }
  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    return text.replace(
      regex,
      '<mark class="bg-yellow-200 text-black rounded px-1">$1</mark>'
    );
  }
  if (currentPage === "second") {
    let dessertRecipes = recipes.filter(
      (r) => r.type === "Dessert" && r.name.toLowerCase() !== "affogato"
    );
    if (desserts === null) {
      app.innerHTML = `<div class='text-center text-lg text-gray-500 py-12'>Loading desserts...</div>`;
      return;
    }
    if (!Array.isArray(desserts) || desserts.length === 0) {
      app.innerHTML = `<div class='text-center text-lg text-gray-500 py-12'>No desserts found.</div>`;
      return;
    }
    desserts.forEach((dessert) => {
      if (
        !dessertRecipes.some(
          (r) => r.name.toLowerCase() === dessert.name.toLowerCase()
        )
      ) {
        dessertRecipes.push(dessert);
      }
    });
    app.innerHTML = `
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Pacifico&display=swap" rel="stylesheet">
      <style>
        body, input, select, button, h1, h2, h3, h4, h5, h6, p, span, label, .font-main {
          font-family: 'Roboto', Arial, sans-serif !important;
        }
        .font-logo {
          font-family: 'Pacifico', cursive !important;
          letter-spacing: 0.04em;
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-slide-in {
          animation: slideIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* User icon hover/focus: only scale up */
        #user-icon {
          transition: transform 0.2s cubic-bezier(0.4,0,0.2,1);
        }
        #user-icon:hover, #user-icon:focus {
          transform: scale(1.18);
        }
      </style>
      <header class="sticky top-0 z-40 ${
        document.body.classList.contains("night")
          ? "bg-gray-900/90"
          : "bg-white/90"
      } backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
        <div class="flex items-center gap-3">
          <img src="/images/cupidoncoffee.png" alt="NovaCup Cherub Logo" class="w-14 h-14 object-contain" style="background:transparent; border:none; box-shadow:none;" />
          <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-logo flex items-center gap-2" style="color: #c2410c !important;">
            NovaCup Coffee ☕
          </span>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative w-full">
            <!-- Hamburger menu button for mobile/tablet -->
            <button id="nav-toggle" class="md:hidden px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition w-full flex justify-center items-center" onclick="window.toggleNavMenu()" aria-label="Open navigation menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div id="nav-menu" class="fixed left-0 right-0 top-full w-full ${
              document.body.classList.contains("night")
                ? "bg-gray-900/95 z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
                : "bg-white shadow-lg z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
            }">
              <div class="flex flex-col gap-3 mt-5 md:flex-row md:gap-4 md:mt-0 items-center">
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToMainPage()">Main</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToBeansPage()">Beans</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToCraftPage()">Craft Your Cup</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToStoryPage()">Our Story</button>                
                <button id="user-icon" class="transition flex items-center justify-center w-10 h-10" onclick="window.showLoginModal()" aria-label="User login">
                  <img src="/images/user.png" alt="User" style="width:24px; height:24px;" />
                </button>
                <button class="px-4 py-2 rounded text-white font-bold transition flex items-center gap-2" onclick="goToCartPage()"><img class="hover:scale-120 transition" src="/images/cart.png" alt="User" style="width:24px; height:24px;" /></button>
                <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition mb-3 md:mb-0" onclick="toggleNightMode()">
                  ${document.body.classList.contains("night") ? "☀️" : "🌙"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main class="min-h-screen px-4 py-8">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 font-logo flex items-center gap-2" style="color:#c2410c">
            🍰 Desserts
          </h1>
          <!-- Search and Filter for Desserts -->
          <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <input 
              type="text" 
              placeholder="Search desserts..." 
              class="px-4 py-2 w-full sm:w-1/2 border rounded shadow-sm focus:outline-none focus:ring"
              value="${window.dessertSearchQuery || ""}"
              oninput="updateDessertSearch(this.value)"
              style="color: ${
                document.body.classList.contains("night") ? "#fff" : "#000"
              }; background-color: ${
      document.body.classList.contains("night") ? "#222" : "#fff"
    };"
            />
            <div class="flex gap-2 flex-wrap items-center">
              ${["All", "Cake", "Cookie", "Pastry", "Frozen", "Fruit", "Other"]
                .map(
                  (type) => `
                <button 
                  class="px-4 py-1 rounded-full font-semibold shadow transition-all duration-150 border ${
                    window.selectedDessertType === type
                      ? document.body.classList.contains("night")
                        ? "bg-amber-500 text-white border-amber-600"
                        : "bg-amber-200 text-amber-900 border-amber-400"
                      : document.body.classList.contains("night")
                      ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-amber-700 hover:text-white"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-amber-100 hover:text-amber-900"
                  }" 
                  onclick="updateDessertFilter('${type}')"
                  style="min-width:80px;"
                >${type}</button>
              `
                )
                .join("")}
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-8">
            ${
              (window.selectedDessertType &&
              window.selectedDessertType !== "All"
                ? dessertRecipes.filter(
                    (r) => r.tags && r.tags.includes(window.selectedDessertType)
                  )
                : dessertRecipes
              ).filter((r) =>
                window.dessertSearchQuery
                  ? r.name
                      .toLowerCase()
                      .includes(window.dessertSearchQuery.toLowerCase())
                  : true
              ).length === 0
                ? `<p class='col-span-full text-center ${
                    document.body.classList.contains("night")
                      ? "text-gray-300"
                      : "text-gray-500"
                  }'>No desserts found.</p>`
                : (window.selectedDessertType &&
                  window.selectedDessertType !== "All"
                    ? dessertRecipes.filter(
                        (r) =>
                          r.tags && r.tags.includes(window.selectedDessertType)
                      )
                    : dessertRecipes
                  )
                    .filter((r) =>
                      window.dessertSearchQuery
                        ? r.name
                            .toLowerCase()
                            .includes(window.dessertSearchQuery.toLowerCase())
                        : true
                    )
                    .map(
                      (recipe, idx) => `
                  <div class="${
                    document.body.classList.contains("night")
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border"
                  } border rounded-lg shadow-lg transition-all duration-200 p-6 flex flex-col items-center group hover:scale-105 hover:shadow-2xl hover:border-amber-500 animate-fade-in" style="cursor:pointer; animation-delay:${
                        idx * 60
                      }ms;">
                    <img src="${recipe.image}" alt="${
                        recipe.name
                      } dessert image" class="w-32 h-32 object-cover rounded-full border-2 border-amber-400 shadow mb-4 group-hover:border-amber-600 group-hover:scale-110 transition-all duration-200" />
                    <h2 class="text-xl font-semibold mb-2 text-center ${
                      document.body.classList.contains("night")
                        ? "text-white"
                        : ""
                    } group-hover:text-amber-700">${highlightMatch(
                        recipe.name,
                        window.dessertSearchQuery
                      )}</h2>
                    <div class="mb-2 text-center text-green-700 font-bold text-base">${getDessertPrice(
                      recipe.tags
                    )}</div>
                    <!-- Description removed from card, only shown in modal -->
                    <div class="flex gap-2 text-xs ${
                      document.body.classList.contains("night")
                        ? "text-gray-300"
                        : "text-gray-500"
                    } mb-4 items-center justify-center flex-wrap">
                      ${
                        recipe.tags
                          ?.map((tag) => {
                            let icon = "";
                            if (tag.toLowerCase().includes("coffee"))
                              icon = "☕";
                            else if (tag.toLowerCase().includes("bean"))
                              icon = "🌱";
                            else if (tag.toLowerCase().includes("cake"))
                              icon = "🍰";
                            else if (tag.toLowerCase().includes("cookie"))
                              icon = "🍪";
                            else if (tag.toLowerCase().includes("pastry"))
                              icon = "🥐";
                            else if (tag.toLowerCase().includes("frozen"))
                              icon = "🍨";
                            else if (tag.toLowerCase().includes("fruit"))
                              icon = "🍓";
                            else if (tag.toLowerCase().includes("milk"))
                              icon = "🥛";
                            else if (tag.toLowerCase().includes("alcohol"))
                              icon = "🍸";
                            return `<span class='${
                              document.body.classList.contains("night")
                                ? "bg-green-900 text-green-200"
                                : "bg-green-100 text-green-800"
                            } rounded px-2 py-1 font-semibold group-hover:bg-amber-200 group-hover:text-amber-900'>${icon} ${tag}</span>`;
                          })
                          .join("") || ""
                      }
                    </div>
                    <button 
                      class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded whitespace-nowrap mx-auto mt-auto w-full max-w-xs group-hover:bg-amber-700 animate-slide-in" style="animation-delay:${
                        idx * 60
                      }ms;" 
                      onclick="viewDessertRecipe('${recipe.name.replace(
                        /'/g,
                        "\\'"
                      )}')"
                      aria-label="View recipe for ${recipe.name}"
                      tabindex="0"
                      onkeydown="if(event.key==='Enter'){viewDessertRecipe('${recipe.name.replace(
                        /'/g,
                        "\\'"
                      )}')}"
                    >
                      View Recipe
                    </button>
                  </div>
                `
                    )
                    .join("")
            }
          </div>
        </div>
      </main>
    `;
    if (selectedDessert) {
      app.innerHTML += `
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fade-in">
          <div class="${
            document.body.classList.contains("night")
              ? "bg-gray-800 text-white"
              : "bg-white"
          } rounded-xl shadow-xl p-6 max-w-md w-full text-center animate-slide-in relative">
            <button class="absolute top-2 right-4 text-xl text-gray-400 hover:text-gray-700 animate-fade-in" onclick="closeDessertRecipe()">×</button>
            <img src="${selectedDessert.image}" alt="${
        selectedDessert.name
      } dessert image" class="w-64 h-64 object-cover rounded-full mx-auto border-4 border-amber-500 shadow mb-4 animate-slide-in">
            <h2 class="text-2xl font-bold mb-2">${selectedDessert.name}</h2>
            <p class="mb-3" style="color: ${
              document.body.classList.contains("night") ? "#fff" : "#000"
            }">${selectedDessert.description || "No description provided."}</p>
            <div class="flex gap-2 text-xs mb-4 items-center justify-center flex-wrap">
              ${
                selectedDessert.tags
                  ?.map(
                    (tag) =>
                      `<span class='${
                        document.body.classList.contains("night")
                          ? "bg-green-900 text-green-200"
                          : "bg-green-100 text-green-800"
                      } rounded px-2 py-1 font-semibold animate-fade-in'>${tag}</span>`
                  )
                  .join("") || ""
              }
            </div>
            <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full animate-fade-in" onclick="closeDessertRecipe()" aria-label="Close dessert modal" tabindex="0" onkeydown="if(event.key==='Enter'){closeDessertRecipe()}" >Close</button>
          </div>
        </div>
      `;
    }
    return;
    window.closeDessertRecipe = function () {
      selectedDessert = null;
      render();
    };
  }
  if (currentPage === "story") {
    app.innerHTML = `
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Pacifico&display=swap" rel="stylesheet">
      <style>
        body, input, select, button, h1, h2, h3, h4, h5, h6, p, span, label, .font-main {
          font-family: 'Roboto', Arial, sans-serif !important;
        }
        .font-logo {
          font-family: 'Pacifico', cursive !important;
          letter-spacing: 0.04em;
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      </style>
      <header class="sticky top-0 z-40 ${document.body.classList.contains(
        "night"
      )} backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
        <div class="flex items-center gap-3">
          <img src="/images/cupidoncoffee.png" alt="NovaCup Cherub Logo" class="w-14 h-14 object-contain" style="background:transparent; border:none; box-shadow:none;" />
          <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-logo flex items-center gap-2" style="color: #c2410c !important;">
            NovaCup Coffee ☕
          </span>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative w-full">
            <!-- Hamburger menu button for mobile/tablet -->
            <button id="nav-toggle" class="md:hidden px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition w-full flex justify-center items-center" onclick="window.toggleNavMenu()" aria-label="Open navigation menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div id="nav-menu" class="fixed left-0 right-0 top-full w-full ${
              document.body.classList.contains("night")
                ? "bg-gray-900/95 z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
                : "bg-white shadow-lg z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
            }">
              <div class="flex flex-col gap-3 mt-5 md:flex-row md:gap-4 md:mt-0 items-center">
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToMainPage()">Main</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToSecondPage()">Desserts</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToBeansPage()">Beans</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToCraftPage()">Craft Your Cup</button>                
                <button id="user-icon" class="transition flex items-center justify-center w-10 h-10" onclick="window.showLoginModal()" aria-label="User login">
                  <img class="hover:scale-120 transition" src="/images/user.png" alt="User" style="width:24px; height:24px;" />
                </button>
                <button class="px-4 py-2 transition flex items-center gap-2" onclick="goToCartPage()"><img class="hover:scale-120 transition" src="/images/cart.png" alt="User" style="width:24px; height:24px;" /></button>
                <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition mb-3 md:mb-0" onclick="toggleNightMode()">${
                  document.body.classList.contains("night") ? "☀️" : "🌙"
                }</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main class="min-h-screen px-4 py-8">
        <div class="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 class="text-4xl font-bold mb-6 font-logo" style="color:#c2410c">Our Story</h1>
          <img src="/images/cupidoncoffee.png" alt="NovaCup Cherub Logo" class="w-32 h-32 object-contain mx-auto mb-6" />
          <p class="text-lg mb-6 ${
            document.body.classList.contains("night")
              ? "text-gray-300"
              : "text-gray-500"
          }" style="font-weight: 400;">
            Welcome to NovaCup Coffee!<br><br>
            NovaCup was founded with a simple mission: to bring joy, warmth, and a touch of magic to every cup. Our journey began in a small kitchen, where passion for coffee and desserts blossomed into a community of enthusiasts. <br><br>
            We believe in quality, creativity, and sharing stories over a perfect brew. Whether you're here for a classic espresso, a decadent dessert, or just a cozy moment, NovaCup is your home.<br><br>
            Thank you for being part of our story!
          </p>
        </div>
      </main>
      <footer class="mt-12 py-6 text-center text-gray-500 text-sm bg-white/80 backdrop-blur shadow-inner">
        &copy; 2025 NovaCup Coffee. Made with ☕ by Bladerunner
      </footer>
    `;
    return;
  }
  if (currentPage === "beans") {
    if (beans === null) {
      app.innerHTML = `<div class='text-center text-lg text-gray-500 py-12'>Loading beans...</div>`;
      return;
    }
    app.innerHTML = `
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Pacifico&display=swap" rel="stylesheet">
      <style>
        body, input, select, button, h1, h2, h3, h4, h5, h6, p, span, label, .font-main {
          font-family: 'Roboto', Arial, sans-serif !important;
        }
        .font-logo {
          font-family: 'Pacifico', cursive !important;
          letter-spacing: 0.04em;
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-slide-in {
          animation: slideIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
      <header class="sticky top-0 z-40 ${
        document.body.classList.contains("night")
          ? "bg-gray-900/90"
          : "bg-white/90"
      } backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
        <div class="flex items-center gap-3">
          <img src="/images/cupidoncoffee.png" alt="NovaCup Cherub Logo" class="w-14 h-14 object-contain" style="background:transparent; border:none; box-shadow:none;" />
          <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-logo flex items-center gap-2" style="color: #c2410c !important;">
            NovaCup Coffee ☕
          </span>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative w-full">
            <!-- Hamburger menu button for mobile/tablet -->
            <button id="nav-toggle" class="md:hidden px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition w-full flex justify-center items-center" onclick="window.toggleNavMenu()" aria-label="Open navigation menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div id="nav-menu" class="fixed left-0 right-0 top-full w-full ${
              document.body.classList.contains("night")
                ? "bg-gray-900/95 z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
                : "bg-white shadow-lg z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
            }">
              <div class="flex flex-col gap-3 mt-5 md:flex-row md:gap-4 md:mt-0 items-center">
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToMainPage()">Main</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToSecondPage()">Desserts</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToCraftPage()">Craft Your Cup</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToStoryPage()">Our Story</button>
                <button id="user-icon" class="transition flex items-center justify-center w-10 h-10" onclick="window.showLoginModal()" aria-label="User login">
                  <img class="hover:scale-120 transition" src="/images/user.png" alt="User" style="width:24px; height:24px;" />
                </button>
                <button class="px-4 py-2 transition flex items-center gap-2" onclick="goToCartPage()"><img class="hover:scale-120 transition" src="/images/cart.png" alt="User" style="width:24px; height:24px;" /></button>
                <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition mb-3 md:mb-0" onclick="toggleNightMode()">
                  ${document.body.classList.contains("night") ? "☀️" : "🌙"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main class="min-h-screen px-4 py-8">
        <div class="max-w-5xl mx-auto">
          <h1 class="text-4xl font-bold mb-6 font-logo" style="color:#c2410c">Beans</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-8">
            ${
              beans.length === 0
                ? `<p class='col-span-full text-center ${
                    document.body.classList.contains("night")
                      ? "text-gray-300"
                      : "text-gray-500"
                  }'>No beans found.</p>`
                : beans
                    .map(
                      (bean, idx) => `
                <div class="${
                  document.body.classList.contains("night")
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border"
                } border rounded-lg shadow-lg transition-all duration-200 p-6 flex flex-col items-center group hover:scale-105 hover:shadow-2xl hover:border-amber-500 animate-fade-in" style="cursor:pointer; animation-delay:${
                        idx * 60
                      }ms;">
                  <img src="${bean.image}" alt="${
                        bean.name
                      } bean image" class="w-24 h-24 object-cover rounded-full border-2 border-amber-400 shadow mb-4 group-hover:border-amber-600 group-hover:scale-110 transition-all duration-200" />
                  <h2 class="text-xl font-semibold mb-2 text-center ${
                    document.body.classList.contains("night")
                      ? "text-white"
                      : ""
                  } group-hover:text-amber-700">${bean.name}</h2>
                  <div class="mb-2 text-sm ${
                    document.body.classList.contains("night")
                      ? "text-gray-300"
                      : "text-gray-500"
                  }">Origin: <span class="font-semibold">${
                        bean.origin
                      }</span></div>
                  <div class="mb-2 text-sm ${
                    document.body.classList.contains("night")
                      ? "text-gray-300"
                      : "text-gray-500"
                  }">Flavor: <span class="font-semibold">${
                        bean.flavor
                      }</span></div>
                  <div class="mb-2 text-sm ${
                    document.body.classList.contains("night")
                      ? "text-gray-300"
                      : "text-gray-500"
                  }">Roast: <span class="font-semibold">${
                        bean.roast
                      }</span></div>
                  <p class="mb-2 text-center ${
                    document.body.classList.contains("night")
                      ? "text-gray-200"
                      : "text-gray-700"
                  }">${bean.description}</p>
                </div>
              `
                    )
                    .join("")
            }
          </div>
        </div>
      </main>
      <footer class="mt-12 py-6 text-center text-gray-500 text-sm bg-white/80 backdrop-blur shadow-inner">
        &copy; 2025 NovaCup Coffee. Made with ☕ by Bladerunner
      </footer>
    `;
    return;
  }
  if (currentPage === "craft") {
    let enlargedImage = window.enlargedBrewingImage || null;
    app.innerHTML = `
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Pacifico&display=swap" rel="stylesheet">
      <style>
        body, input, select, button, h1, h2, h3, h4, h5, h6, p, span, label, .font-main {
          font-family: 'Roboto', Arial, sans-serif !important;
        }
        .font-logo {
          font-family: 'Pacifico', cursive !important;
          letter-spacing: 0.04em;
        }
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      </style>
      <header class="sticky top-0 z-40 ${
        document.body.classList.contains("night")
          ? "bg-gray-900/90"
          : "bg-white/90"
      } backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
        <div class="flex items-center gap-3">
          <img src="/images/cupidoncoffee.png" alt="NovaCup Cherub Logo" class="w-14 h-14 object-contain" style="background:transparent; border:none; box-shadow:none;" />
          <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-logo flex items-center gap-2" style="color: #c2410c !important;">
            NovaCup Coffee ☕
          </span>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative w-full">
            <!-- Hamburger menu button for mobile/tablet -->
            <button id="nav-toggle" class="md:hidden px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition w-full flex justify-center items-center" onclick="window.toggleNavMenu()" aria-label="Open navigation menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div id="nav-menu" class="fixed left-0 right-0 top-full w-full ${
              document.body.classList.contains("night")
                ? "bg-gray-900/95 z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
                : "bg-white shadow-lg z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
            }">
              <div class="flex flex-col gap-3 mt-5 md:flex-row md:gap-4 md:mt-0 items-center">
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToMainPage()">Main</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToSecondPage()">Desserts</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToBeansPage()">Beans</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToStoryPage()">Our Story</button>
                <button id="user-icon" class="transition flex items-center justify-center w-10 h-10" onclick="window.showLoginModal()" aria-label="User login">
                  <img class="hover:scale-120 transition" src="/images/user.png" alt="User" style="width:24px; height:24px;" />
                </button>
                <button class="px-4 py-2 transition flex items-center gap-2" onclick="goToCartPage()"><img class="hover:scale-120 transition" src="/images/cart.png" alt="User" style="width:24px; height:24px;" /></button>
                <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition mb-3 md:mb-0" onclick="toggleNightMode()">
                  ${document.body.classList.contains("night") ? "☀️" : "🌙"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main class="min-h-screen px-4 py-8">
        <div class="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 class="text-4xl font-bold mb-6 font-logo" style="color:#c2410c">Craft Your Cup</h1>
          <p class="text-lg mb-6 ${
            document.body.classList.contains("night")
              ? "text-gray-300"
              : "text-gray-500"
          }" style="font-weight: 400;">
            Discover coffee brewing methods and craft your perfect cup!<br><br>
          <b>Popular Brewing Methods:</b><br>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-6">
            ${[
              {
                src: "/images/pourover.jpg",
                alt: "Pour Over",
                title: "Pour Over",
                desc: "Clean, bright flavors using a filter cone.",
                guide:
                  "Guide: Heat water to 200°F, use medium grind, pour slowly in circles over grounds, total brew 2-3 min.",
              },
              {
                src: "/images/frenchpress.jpg",
                alt: "French Press",
                title: "French Press",
                desc: "Rich, full-bodied coffee with immersion brewing.",
                guide:
                  "Guide: Coarse grind, steep 4 min, press slowly, enjoy immediately.",
              },
              {
                src: "/images/aeropress.jpg",
                alt: "AeroPress",
                title: "AeroPress",
                desc: "Versatile, quick, and easy single-cup brewing.",
                guide:
                  "Guide: Fine grind, 1 min steep, press gently, experiment with ratios.",
              },
              {
                src: "/images/espresso-machine.jpg",
                alt: "Espresso Machine",
                title: "Espresso Machine",
                desc: "Intense, concentrated coffee shots.",
                guide:
                  "Guide: Fine grind, tamp firmly, 25-30 sec extraction, enjoy as shot or base for drinks.",
              },
              {
                src: "/images/coldbrew.jpg",
                alt: "Cold Brew",
                title: "Cold Brew",
                desc: "Smooth, low-acid coffee brewed with cold water.",
                guide:
                  "Guide: Coarse grind, steep 12-18 hrs in fridge, strain and serve over ice.",
              },
              {
                src: "/images/mokapot.jpg",
                alt: "Moka Pot",
                title: "Moka Pot",
                desc: "Stovetop espresso-style coffee.",
                guide:
                  "Guide: Fine grind, fill base with water, add grounds, heat until bubbling, serve.",
              },
              {
                src: "/images/turkish.jpg",
                alt: "Turkish Coffee",
                title: "Turkish Coffee",
                desc: "Traditional, unfiltered coffee with a thick texture.",
                guide:
                  "Guide: Extra fine grind, simmer with sugar, do not stir, pour gently.",
              },
              {
                src: "/images/siphon.jpg",
                alt: "Siphon",
                title: "Siphon",
                desc: "Vacuum brewing for a theatrical and clean cup.",
                guide:
                  "Guide: Medium grind, heat water, add grounds, stir, watch vacuum action, serve.",
              },
              {
                src: "/images/percolator.jpg",
                alt: "Percolator",
                title: "Percolator",
                desc: "Classic method for strong, robust coffee.",
                guide:
                  "Guide: Medium grind, fill with water, add grounds, heat until perking, avoid over-extraction.",
              },
              {
                src: "/images/drip.jpg",
                alt: "Drip Coffee Maker",
                title: "Drip Coffee Maker",
                desc: "Convenient, consistent brewing for multiple cups.",
                guide:
                  "Guide: Medium grind, add filter and grounds, fill with water, start machine, enjoy.",
              },
            ]
              .map(
                (m, idx) => `
              <div class="flex flex-col items-center">
                <img src="${m.src}" alt="${m.alt}" class="w-48 h-48 object-contain mb-3 rounded shadow cursor-zoom-in hover:scale-105 transition-all duration-200" onclick="window.enlargeBrewingImage('${m.src}', '${m.alt}')" tabindex="0" aria-label="Enlarge ${m.title} image" onkeydown="if(event.key==='Enter'){window.enlargeBrewingImage('${m.src}', '${m.alt}')}" />
                <b class="text-lg">${m.title}</b>
                <p class="text-base mt-3">${m.desc}<br><span class="text-sm text-gray-500">${m.guide}</span></p>
              </div>
            `
              )
              .join("")}
          </div>
          <span class="block mt-4">More brewing guides coming soon!</span>
          </p>
          ${
            enlargedImage
              ? `
            <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 animate-fade-in" onclick="window.closeEnlargedBrewingImage()">
              <div class="relative bg-white rounded-lg shadow-2xl p-4 max-w-2xl w-full flex flex-col items-center" style="animation: fadeIn 0.5s;" onclick="event.stopPropagation()">
                <button class="absolute top-2 right-4 text-2xl text-gray-400 hover:text-gray-700" onclick="window.closeEnlargedBrewingImage()">×</button>
                <img src="${enlargedImage.src}" alt="${enlargedImage.alt}" class="w-full max-w-xl h-auto object-contain rounded mb-4" />
              </div>
            </div>
          `
              : ""
          }
        </div>
      </main>
      <footer class="mt-12 py-6 text-center text-gray-500 text-sm bg-white/80 backdrop-blur shadow-inner">
        &copy; 2025 NovaCup Coffee. Made with ☕ by Bladerunner
      </footer>
    `;
    return;
  }
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || recipe.type === selectedType;
    return matchesSearch && matchesType;
  });

  app.innerHTML = `
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Pacifico&display=swap" rel="stylesheet">
    <style>
      body, input, select, button, h1, h2, h3, h4, h5, h6, p, span, label, .font-main {
        font-family: 'Roboto', Arial, sans-serif !important;
      }
      .font-logo {
        font-family: 'Pacifico', cursive !important;
        letter-spacing: 0.04em;
      }
      .animate-fade-in {
        animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
      }
      .animate-slide-in {
        animation: slideIn 0.7s cubic-bezier(0.4,0,0.2,1);
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
      <header class="sticky top-0 z-40 ${
        document.body.classList.contains("night")
          ? "bg-gray-900/90"
          : "bg-white/90"
      } backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
        <div class="flex items-center gap-3">
          <img src="/images/cupidoncoffee.png" alt="NovaCup Cherub Logo" class="w-14 h-14 object-contain" style="background:transparent; border:none; box-shadow:none;" />
          <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-logo flex items-center gap-2" style="color: #c2410c !important;">
            NovaCup Coffee ☕
          </span>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative w-full">
            <!-- Hamburger menu button for mobile/tablet -->
            <button id="nav-toggle" class="md:hidden px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition w-full flex justify-center items-center" onclick="window.toggleNavMenu()" aria-label="Open navigation menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div id="nav-menu" class="fixed left-0 right-0 top-full w-full ${
              document.body.classList.contains("night")
                ? "bg-gray-900/95 z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
                : "bg-white shadow-lg z-50 absolute left-0 top-full w-full hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0"
            }">
              <div class="flex flex-col gap-3 mt-5 md:flex-row md:gap-4 md:mt-0 items-center">
                <!-- Main button removed on Main page -->
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToSecondPage()">Desserts</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToBeansPage()">Beans</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToCraftPage()">Craft Your Cup</button>
                <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToStoryPage()">Our Story</button>
                <button id="user-icon" class="transition flex items-center justify-center w-10 h-10" onclick="window.showLoginModal()" aria-label="User login">
                  <img class="hover:scale-120 transition" src="/images/user.png" alt="User" style="width:24px; height:24px;" />
                </button>
                <button class="px-4 py-2 transition flex items-center gap-2" onclick="goToCartPage()"><img class="hover:scale-120 transition" src="/images/cart.png" alt="User" style="width:24px; height:24px;" /></button>
                <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition mb-3 md:mb-0" onclick="toggleNightMode()">
                  ${document.body.classList.contains("night") ? "☀️" : "🌙"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    <main class="min-h-screen px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <!-- Search and Filter -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <input 
            type="text" 
            placeholder="Search coffee..." 
            class="px-4 py-2 w-full sm:w-1/2 border rounded shadow-sm focus:outline-none focus:ring"
            value="${searchQuery}"
            oninput="updateSearch(this.value)"
            style="color: ${
              document.body.classList.contains("night") ? "#fff" : "#000"
            }; background-color: ${
    document.body.classList.contains("night") ? "#222" : "#fff"
  };"
          />
          <div class="flex gap-2 flex-wrap items-center">
            ${["All", "Espresso", "Milk", "Cold", "Dessert", "Alcoholic"]
              .map(
                (type) => `
              <button 
                class="px-4 py-1 rounded-full font-semibold shadow transition-all duration-150 border ${
                  selectedType === type
                    ? document.body.classList.contains("night")
                      ? "bg-amber-500 text-white border-amber-600"
                      : "bg-amber-200 text-amber-900 border-amber-400"
                    : document.body.classList.contains("night")
                    ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-amber-700 hover:text-white"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-amber-100 hover:text-amber-900"
                }" 
                onclick="updateFilter('${type}')"
                style="min-width:80px;"
              >${type}</button>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Favorites Filter -->
        <div class="mb-6 flex gap-2 flex-wrap">
          <button class="px-3 py-1 rounded bg-amber-100 text-amber-800 font-semibold shadow hover:bg-amber-200 transition" onclick="showFavorites()">Show Favorites</button>
          <button class="px-3 py-1 rounded bg-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-300 transition" onclick="showAll()">Show All</button>
        </div>

        <!-- Recipe Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredRecipes
            .map(
              (recipe, i) => `
            <div class="${
              document.body.classList.contains("night")
                ? "bg-gray-800 border-gray-700"
                : "bg-white border"
            } border rounded-lg shadow-lg transition-all duration-200 p-6 relative flex flex-col items-center group hover:scale-105 hover:shadow-2xl hover:border-amber-500 animate-fade-in" style="cursor:pointer; animation-delay:${
                i * 60
              }ms;">
              <button 
                class="absolute top-2 right-2 text-3xl ${
                  favorites.has(i) ? "text-red-500" : "text-gray-400"
                } group-hover:text-red-600 animate-fade-in"
                style="line-height: 1; animation-delay:${i * 60}ms;"
                onclick="toggleFavorite(${i})"
                aria-label="Toggle Favorite"
              >
                ♥
              </button>
              <img src="${recipe.image}" alt="${
                recipe.name
              } coffee image" class="w-28 h-28 object-cover rounded-full mx-auto border-2 border-amber-400 shadow mb-4 group-hover:border-amber-600 group-hover:scale-110 transition-all duration-200 animate-slide-in" style="animation-delay:${
                i * 60
              }ms;" />
              <h2 class="text-xl font-semibold mb-2 text-center ${
                document.body.classList.contains("night") ? "text-white" : ""
              } group-hover:text-amber-700 animate-fade-in">${highlightMatch(
                recipe.name,
                searchQuery
              )}</h2>
              <div class="mb-2 text-center text-green-700 font-bold text-base">${getCoffeePrice(
                recipe.type
              )}</div>
              <p class="mb-2 text-center animate-fade-in" style="color: ${
                document.body.classList.contains("night") ? "#fff" : "#000"
              };"></p>
              <div class="flex gap-2 text-xs ${
                document.body.classList.contains("night")
                  ? "text-gray-300"
                  : "text-gray-500"
              } mb-4 items-center justify-center flex-wrap animate-fade-in">
                <span class="px-2 py-1 rounded bg-amber-100 text-amber-800 font-semibold">${
                  recipe.type ? `☕ ${recipe.type}` : ""
                }</span>
                ${
                  recipe.tags
                    ?.map((tag) => {
                      let icon = "";
                      if (tag.toLowerCase().includes("coffee")) icon = "☕";
                      else if (tag.toLowerCase().includes("bean")) icon = "🌱";
                      else if (tag.toLowerCase().includes("cake")) icon = "🍰";
                      else if (tag.toLowerCase().includes("cookie"))
                        icon = "🍪";
                      else if (tag.toLowerCase().includes("pastry"))
                        icon = "🥐";
                      else if (tag.toLowerCase().includes("frozen"))
                        icon = "🍨";
                      else if (tag.toLowerCase().includes("fruit")) icon = "🍓";
                      else if (tag.toLowerCase().includes("milk")) icon = "🥛";
                      else if (tag.toLowerCase().includes("alcohol"))
                        icon = "🍸";
                      return `<span class='${
                        document.body.classList.contains("night")
                          ? "bg-green-900 text-green-200"
                          : "bg-green-100 text-green-800"
                      } rounded px-2 py-1 font-semibold group-hover:bg-amber-200 group-hover:text-amber-900 animate-fade-in'>${icon} ${tag}</span>`;
                    })
                    .join("") || ""
                }
              </div>
              <button 
                class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded whitespace-nowrap mx-auto mt-auto w-full max-w-xs group-hover:bg-amber-700 animate-slide-in" style="animation-delay:${
                  i * 60
                }ms;" 
                onclick="viewRecipe(${i})"
                aria-label="View recipe for ${recipe.name}"
                tabindex="0"
                onkeydown="if(event.key==='Enter'){viewRecipe(${i})}"
              >
                View Recipe
              </button>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </main>
    <footer class="mt-12 py-6 text-center text-gray-500 text-sm bg-white/80 backdrop-blur shadow-inner">
      &copy; 2025 NovaCup Coffee. Made with ☕ by Bladerunner
    </footer>

      <!-- Modal -->
      ${
        selectedRecipe
          ? `
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fade-in">
          <div class="${
            document.body.classList.contains("night")
              ? "bg-gray-800"
              : "bg-white"
          } rounded-xl shadow-xl p-6 max-w-md w-full text-center animate-slide-in relative">
            <button class="absolute top-2 right-4 text-xl text-gray-400 hover:text-gray-700 animate-fade-in" onclick="closeRecipe()">x</button>
            <img src="${selectedRecipe.image}" alt="${
              selectedRecipe.name
            } coffee image" class="w-64 h-64 object-cover rounded-full mx-auto border-4 border-amber-500 shadow mb-4 animate-slide-in">
            <h2 class="text-2xl font-bold mb-2">${selectedRecipe.name}</h2>
            <p class="mb-3" style="color: ${
              document.body.classList.contains("night") ? "#fff" : "#000"
            };">${
              selectedRecipe.instructions ||
              selectedRecipe.details ||
              "No instructions provided."
            }</p>
            <p class="text-sm text-gray-500 mb-4">Prep Time: ${
              selectedRecipe.time || "Unknown"
            }</p>
            <button 
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full animate-fade-in"
              onclick="closeRecipe()"
              aria-label="Close recipe modal"
              tabindex="0"
              onkeydown="if(event.key==='Enter'){closeRecipe()}"
            >
              Close
            </button>
          </div>
        </div>
      `
          : ""
      }
    </div>
  `;
}
window.enlargeBrewingImage = function (src, alt) {
  window.enlargedBrewingImage = { src, alt };
  render();
};
window.closeEnlargedBrewingImage = function () {
  window.enlargedBrewingImage = null;
  render();
};
window.goToSecondPage = function () {
  currentPage = "second";
  render();
};
window.goToMainPage = function () {
  currentPage = "main";
  render();
};
window.goToStoryPage = function () {
  currentPage = "story";
  render();
};
window.goToBeansPage = function () {
  currentPage = "beans";
  render();
};
window.goToCraftPage = function () {
  currentPage = "craft";
  render();
};

window.viewRecipe = function (index) {
  selectedRecipe = recipes[index];
  render();
};

window.closeRecipe = function () {
  selectedRecipe = null;
  render();
};

window.updateSearch = function (value) {
  if (searchQuery !== value) {
    const input = document.querySelector(
      'input[placeholder="Search coffee..."]'
    );
    let caretPos = input ? input.selectionStart : null;
    searchQuery = value;
    render();
    setTimeout(() => {
      const newInput = document.querySelector(
        'input[placeholder="Search coffee..."]'
      );
      if (newInput) {
        newInput.focus();
        if (caretPos !== null) {
          newInput.setSelectionRange(caretPos, caretPos);
        }
      }
    }, 0);
  }
};

window.updateFilter = function (value) {
  selectedType = value;
  render();
};

window.toggleFavorite = function (index) {
  if (favorites.has(index)) {
    favorites.delete(index);
  } else {
    favorites.add(index);
  }
  render();
};

window.showFavorites = function () {
  const favArr = Array.from(favorites);
  const favRecipes = favArr.map((i) => recipes[i]);
  renderFavoritesView(favRecipes);
};

function renderFavoritesView(favRecipes) {
  window._prevState = { searchQuery, selectedType };
  app.innerHTML = `
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Pacifico&display=swap" rel="stylesheet">
    <style>
      body, input, select, button, h1, h2, h3, h4, h5, h6, p, span, label, .font-main {
        font-family: 'Roboto', Arial, sans-serif !important;
      }
      .font-logo {
        font-family: 'Pacifico', cursive !important;
        letter-spacing: 0.04em;
      }
      .animate-fade-in {
        animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
      }
      .animate-slide-in {
        animation: slideIn 0.7s cubic-bezier(0.4,0,0.2,1);
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideIn {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
    <header class="sticky top-0 z-40 ${
      document.body.classList.contains("night")
        ? "bg-gray-900/90"
        : "bg-white/90"
    } backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
      <div class="flex items-center gap-3">
        <img src="/images/cupidoncoffee.png" alt="NovaCup Cherub Logo" class="w-14 h-14 object-contain" style="background:transparent; border:none; box-shadow:none;" />
        <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-logo flex items-center gap-2" style="color: #c2410c !important;">
          NovaCup Coffee ☕
        </span>
      </div>
      <div class="flex items-center gap-3">
        <div class="relative w-full">
          <!-- Hamburger menu button for mobile/tablet -->
          <button id="nav-toggle" class="md:hidden px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition w-full flex justify-center items-center" onclick="window.toggleNavMenu()" aria-label="Open navigation menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <div id="nav-menu" class="absolute left-0 top-full w-full ${
            document.body.classList.contains("night")
              ? "bg-transparent"
              : "bg-white"
          } shadow-lg rounded z-50 mt-2 hidden md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:mt-0">
            <div class="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
              <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToMainPage()">Main</button>
              <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToSecondPage()">Desserts</button>
              <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToBeansPage()">Beans</button>
              <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToCraftPage()">Craft Your Cup</button>
              <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition" onclick="toggleNightMode()">${
                document.body.classList.contains("night") ? "☀️" : "🌙"
              }</button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="min-h-screen px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <div class="mb-6 flex gap-2 flex-wrap">
          <button class="px-3 py-1 rounded bg-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-300 transition" onclick="showAll()">Show All</button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${favRecipes
            .map(
              (recipe) => `
            <div class="${
              document.body.classList.contains("night")
                ? "bg-gray-800 border-gray-700"
                : "bg-white border"
            } border rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 p-6 relative flex flex-col">
              <img src="${recipe.image}" alt="${
                recipe.name
              }" class="w-20 h-20 object-cover rounded-full mx-auto border-2 border-amber-400 shadow mb-3" />
              <h2 class="text-xl font-semibold mb-2 text-center">${
                recipe.name
              }</h2>
              <p class="mb-2 text-center" style="color: ${
                document.body.classList.contains("night") ? "#fff" : "#000"
              };">${recipe.description}</p>
              <div class="flex gap-2 text-xs ${
                document.body.classList.contains("night")
                  ? "text-gray-300"
                  : "text-gray-500"
              } mb-4 items-center justify-center flex-wrap">
                <span class="px-2 py-1 rounded bg-amber-100 text-amber-800 font-semibold">${
                  recipe.type || ""
                }</span>
                ${
                  recipe.tags
                    ?.map(
                      (tag) =>
                        `<span class="${
                          document.body.classList.contains("night")
                            ? "bg-green-900 text-green-200"
                            : "bg-green-100 text-green-800"
                        } rounded px-2 py-1 font-semibold">${tag}</span>`
                    )
                    .join("") || ""
                }
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </main>
    <footer class="mt-12 py-6 text-center text-gray-500 text-sm bg-white/80 backdrop-blur shadow-inner">
      &copy; 2025 NovaCup Coffee. Made with ☕ by Bladerunner
    </footer>
  `;
  if (localStorage.getItem("night")) {
    document.body.classList.add("night");
  } else {
    document.body.classList.remove("night");
  }
}

window.showAll = function () {
  searchQuery = "";
  selectedType = "All";
  window._prevState = null;
  render();
};

render();
