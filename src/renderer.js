// Dessert filter state and handler (must be before render)
window.selectedDessertType = "All";
window.updateDessertFilter = function (type) {
  window.selectedDessertType = type;
  render();
};

// Dessert search bar state and handler (must be before render)
window.dessertSearchQuery = "";
window.updateDessertSearch = function (value) {
  // Only update and re-render if the value actually changed
  if (window.dessertSearchQuery !== value) {
    // Save caret position
    const input = document.querySelector(
      'input[placeholder="Search desserts..."]'
    );
    let caretPos = input ? input.selectionStart : null;
    window.dessertSearchQuery = value;
    render();
    // Restore focus and caret position after render
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

function render() {
  // Helper to highlight search matches
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
        <div class="flex gap-4 items-center">
          <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToMainPage()">Main Page</button>
          <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToStoryPage()">Our Story</button>
          <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition" onclick="toggleNightMode()">${
            document.body.classList.contains("night") ? "☀️" : "🌙"
          }</button>
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
                      } dessert image" class="w-32 h-32 object-cover rounded-full border-2 border-amber-400 shadow mb-4 group-hover:border-amber-600 group-hover:scale-110 transition-all duration-200 animate-slide-in" style="animation-delay:${
                        idx * 60
                      }ms;" />
                    <h2 class="text-xl font-semibold mb-2 text-center ${
                      document.body.classList.contains("night")
                        ? "text-white"
                        : ""
                    } group-hover:text-amber-700">${highlightMatch(
                        recipe.name,
                        window.dessertSearchQuery
                      )}</h2>
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
        <div class="flex gap-4 items-center">
          <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToMainPage()">Main Page</button>
          <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToSecondPage()">Desserts</button>
          <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition" onclick="toggleNightMode()">${
            document.body.classList.contains("night") ? "☀️" : "🌙"
          }</button>
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
      <div class="flex gap-4 items-center">
        <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToSecondPage()">Desserts</button>
        <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition" onclick="toggleNightMode()">${
          document.body.classList.contains("night") ? "☀️" : "🌙"
        }</button>
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

window.viewRecipe = function (index) {
  selectedRecipe = recipes[index];
  render();
};

window.closeRecipe = function () {
  selectedRecipe = null;
  render();
};

window.updateSearch = function (value) {
  // Only update and re-render if the value actually changed
  if (searchQuery !== value) {
    // Save caret position
    const input = document.querySelector(
      'input[placeholder="Search coffee..."]'
    );
    let caretPos = input ? input.selectionStart : null;
    searchQuery = value;
    render();
    // Restore focus and caret position after render
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
  // Use the same navbar/header as main page
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
      <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition" onclick="toggleNightMode()">${
        document.body.classList.contains("night") ? "☀️" : "🌙"
      }</button>
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
