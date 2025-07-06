import "./index.css";
import recipes from "./recipes.json";

const app = document.getElementById("app");

let selectedRecipe = null;
let favorites = new Set();
let searchQuery = "";
let selectedType = "All"; // default is All

// Night mode toggle
window.toggleNightMode = function () {
  document.body.classList.toggle("night");
  if (document.body.classList.contains("night")) {
    localStorage.setItem("night", "1");
  } else {
    localStorage.removeItem("night");
  }
  // Update icon in all headers
  const btns = document.querySelectorAll("#toggle-dark");
  btns.forEach(
    (btn) =>
      (btn.textContent = document.body.classList.contains("night")
        ? "☀️"
        : "🌙")
  );
};

// On load, restore night mode if set
if (localStorage.getItem("night")) {
  document.body.classList.add("night");
}

function render() {
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesType = selectedType === "All" || recipe.type === selectedType;

    return matchesSearch && matchesType;
  });

  app.innerHTML = `
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
      <div class="flex items-center gap-3">
        <img src="/images/espresso.jpg" alt="NovaCup Logo" class="w-10 h-10 rounded-full border-2 border-amber-500 shadow" />
        <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style="color: #c2410c !important;">NovaCup Coffee</span>
      </div>
      <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition" onclick="toggleNightMode()">${
        document.body.classList.contains("night") ? "☀️" : "🌙"
      }</button>
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
          />
          <select 
            class="px-4 py-2 border rounded shadow-sm"
            onchange="updateFilter(this.value)">
            <option value="All">All Types</option>
            <option value="Espresso">Espresso</option>
            <option value="Milk">Milk</option>
            <option value="Cold">Cold</option>
            <option value="Dessert">Dessert</option>
            <option value="Alcoholic">Alcoholic</option>
          </select>
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
            <div class="bg-white border rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 p-6 relative flex flex-col">
              <button 
                class="absolute top-2 right-2 text-xl ${
                  favorites.has(i) ? "text-red-500" : "text-gray-400"
                }"
                onclick="toggleFavorite(${i})"
                aria-label="Toggle Favorite"
              >
                ♥
              </button>
              <img src="${recipe.image}" alt="${
                recipe.name
              }" class="w-20 h-20 object-cover rounded-full mx-auto border-2 border-amber-400 shadow mb-3" />
              <h2 class="text-xl font-semibold mb-2 text-center">${
                recipe.name
              }</h2>
              <p class="text-gray-600 mb-2 text-center">${
                recipe.description
              }</p>
              <div class="flex gap-2 text-xs text-gray-500 mb-4 items-center justify-center flex-wrap">
                <span class="px-2 py-1 rounded bg-amber-100 text-amber-800 font-semibold">${
                  recipe.type || ""
                }</span>
                ${
                  recipe.tags
                    ?.map(
                      (tag) =>
                        `<span class="bg-green-100 text-green-800 rounded px-2 py-1 font-semibold">${tag}</span>`
                    )
                    .join("") || ""
                }
              </div>
              <button 
                class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded whitespace-nowrap mx-auto mt-auto w-full max-w-xs" 
                onclick="viewRecipe(${i})">
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
      &copy; ${new Date().getFullYear()} NovaCup Coffee. Made with ☕ by a great web designer.
    </footer>

      <!-- Modal -->
      ${
        selectedRecipe
          ? `
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div class="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center animate-fade-in relative">
            <button class="absolute top-2 right-4 text-xl text-gray-400 hover:text-gray-700" onclick="closeRecipe()">×</button>
            <img src="${selectedRecipe.image}" alt="${
              selectedRecipe.name
            }" class="w-64 h-64 object-cover rounded-full mx-auto border-4 border-amber-500 shadow mb-4">
            <h2 class="text-2xl font-bold mb-2">${selectedRecipe.name}</h2>
            <p class="text-gray-600 mb-3">${
              selectedRecipe.instructions ||
              selectedRecipe.details ||
              "No instructions provided."
            }</p>
            <p class="text-sm text-gray-500 mb-4">Prep Time: ${
              selectedRecipe.time || "Unknown"
            }</p>
            <button 
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
              onclick="closeRecipe()">
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

// Functions
window.viewRecipe = function (index) {
  selectedRecipe = recipes[index];
  render();
};

window.closeRecipe = function () {
  selectedRecipe = null;
  render();
};

window.updateSearch = function (value) {
  searchQuery = value;
  render();
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
  // Save current filter/search state
  window._prevState = { searchQuery, selectedType };
  app.innerHTML = `
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
      <div class="flex items-center gap-3">
        <img src="/images/espresso.jpg" alt="NovaCup Logo" class="w-10 h-10 rounded-full border-2 border-amber-500 shadow" />
        <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style="color: #c2410c !important;">NovaCup Coffee</span>
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
            <div class="bg-white border rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 p-6 relative flex flex-col">
              <img src="${recipe.image}" alt="${
                recipe.name
              }" class="w-20 h-20 object-cover rounded-full mx-auto border-2 border-amber-400 shadow mb-3" />
              <h2 class="text-xl font-semibold mb-2 text-center">${
                recipe.name
              }</h2>
              <p class="text-gray-600 mb-2 text-center">${
                recipe.description
              }</p>
              <div class="flex gap-2 text-xs text-gray-500 mb-4 items-center justify-center flex-wrap">
                <span class="px-2 py-1 rounded bg-amber-100 text-amber-800 font-semibold">${
                  recipe.type || ""
                }</span>
                ${
                  recipe.tags
                    ?.map(
                      (tag) =>
                        `<span class="bg-green-100 text-green-800 rounded px-2 py-1 font-semibold">${tag}</span>`
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
      &copy; ${new Date().getFullYear()} NovaCup Coffee. Made with ☕ by a great web designer.
    </footer>
  `;
  // Re-apply night mode if needed
  if (localStorage.getItem("night")) {
    document.body.classList.add("night");
  } else {
    document.body.classList.remove("night");
  }
}

// Implement Show All to restore main view
window.showAll = function () {
  // Optionally restore previous search/filter state
  if (window._prevState) {
    searchQuery = window._prevState.searchQuery;
    selectedType = window._prevState.selectedType;
    window._prevState = null;
  }
  render();
};

// Initial render
render();
