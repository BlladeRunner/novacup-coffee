/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./index.css";
import recipes from "./recipes.json";

const app = document.getElementById("app");

let selectedRecipe = null;

function render() {
  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center">
      <div class="max-w-5xl mx-auto p-6">
        <h1 class="text-red-600 text-4xl font-bold text-center mb-8">NovaCup Coffee</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${recipes
            .map(
              (recipe, i) => `
            <div class="bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition">
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
    </div>

      ${
        selectedRecipe
          ? `
        <div class="mt-10 p-6 bg-gray-100 rounded shadow">
          <h2 class="text-2xl font-bold mb-2">${selectedRecipe.name}</h2>
          <p class="text-gray-700">${selectedRecipe.details}</p>
          <button 
            class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
            onclick="closeRecipe()"
          >
            Close
          </button>
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
