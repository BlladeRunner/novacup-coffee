import "./index.css";
import recipes from "./recipes.json";

const app = document.getElementById("app");

let selectedRecipe = null;
let favorites = new Set();
let searchQuery = "";
let selectedType = "All"; // default is All

function render() {
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesType = selectedType === "All" || recipe.type === selectedType;

    return matchesSearch && matchesType;
  });

  app.innerHTML = `
    <div class="min-h-screen bg-gray-50 px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-orange-800 text-4xl font-bold text-center mb-6">NovaCup Coffee</h1>

        <!-- Search and Filter -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <input 
            type="text" 
            placeholder="Search coffee..." 
            class="px-4 py-2 w-full sm:w-1/2 border rounded shadow-sm focus:outline-none focus:ring"
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

        <!-- Recipe Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredRecipes
            .map(
              (recipe, i) => `
            <div class="bg-white border rounded-lg shadow-md hover:shadow-xl transition p-6 relative">
              <button 
                class="absolute top-2 right-2 text-xl ${
                  favorites.has(i) ? "text-red-500" : "text-gray-400"
                }"
                onclick="toggleFavorite(${i})"
                aria-label="Toggle Favorite"
              >
                ♥
              </button>
              <h2 class="text-xl font-semibold mb-2">${recipe.name}</h2>
              <p class="text-gray-600 mb-4">${recipe.description}</p>
              <div class="flex gap-2 text-sm text-gray-500 mb-4">
                ${
                  recipe.tags
                    ?.map(
                      (tag) =>
                        `<span class="bg-gray-200 rounded px-2 py-1">${tag}</span>`
                    )
                    .join("") || ""
                }
              </div>
              <button 
                class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded w-full" 
                onclick="viewRecipe(${i})">
                View Recipe
              </button>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <!-- Modal -->
      ${
        selectedRecipe
          ? `
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div class="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center animate-fade-in relative">
            <button class="absolute top-2 right-4 text-xl text-gray-400 hover:text-gray-700" onclick="closeRecipe()">×</button>
            <img src="${selectedRecipe.image}" alt="${
              selectedRecipe.name
            }" class="w-40 h-40 object-cover rounded-full mx-auto border-4 border-amber-500 shadow mb-4">
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

render();
