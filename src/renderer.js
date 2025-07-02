import "./index.css";
import recipes from "./recipes.json";

const app = document.getElementById("app");

let selectedRecipe = null;

function render() {
  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center relative">
      <div class="max-w-5xl mx-auto p-6 w-full">
        <h1 class="text-orange-800 text-4xl font-bold text-center mb-8">NovaCup Coffee</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${recipes
            .map(
              (recipe, i) => `
            <div class="bg-white border rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
              <h2 class="text-2xl font-semibold mb-2">${recipe.name}</h2>
              <p class="text-gray-600 mb-4">${recipe.description}</p>
              <button 
                class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded" 
                onclick="viewRecipe(${i})">
                View Recipe
              </button>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      ${
        selectedRecipe
          ? `
        <div class="fixed inset-0 flex items-center justify-center z-50">
          <div class="absolute inset-0 bg-black opacity-50" onclick="closeRecipe()"></div>
          <div class="relative bg-white rounded-lg shadow-xl p-8 max-w-md w-full z-10 animate-fade-in flex flex-col items-center">
            <img src="${
              selectedRecipe.image ||
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            }" alt="${
              selectedRecipe.name
            }" class="w-40 h-40 object-cover rounded-full mb-4 border-4 border-amber-500 shadow" />
            <h2 class="text-2xl font-bold mb-2 text-center">${
              selectedRecipe.name
            }</h2>
            <p class="text-gray-700 mb-4">${
              selectedRecipe.instructions || selectedRecipe.details || ""
            }</p>
            <button 
              class="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded w-full"
              onclick="closeRecipe()"
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

window.viewRecipe = function (index) {
  selectedRecipe = recipes[index];
  render();
};

window.closeRecipe = function () {
  selectedRecipe = null;
  render();
};

render();
