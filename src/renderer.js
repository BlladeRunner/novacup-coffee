import "./index.css";
import recipes from "./recipes.json";

const app = document.getElementById("app");

let selectedRecipe = null;
let favorites = new Set();
let searchQuery = "";
let selectedType = "All"; // default is All
let currentPage = "main"; // "main" or "second"

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
  // Force re-render to update <p> text color
  render();
};

// On load, restore night mode if set
if (localStorage.getItem("night")) {
  document.body.classList.add("night");
}

function render() {
  if (currentPage === "second") {
    // Filter only desserts
    // Remove Affogato and add real desserts commonly served with coffee
    let dessertRecipes = recipes.filter(
      (r) => r.type === "Dessert" && r.name.toLowerCase() !== "affogato"
    );
    // Add real desserts if not present
    const realDesserts = [
      {
        name: "Tiramisu",
        image: "/images/tiramisu.jpg",
        description:
          "Classic Italian dessert with coffee-soaked ladyfingers, mascarpone, and cocoa.",
        tags: ["Italian", "Creamy", "Coffee-flavored"],
      },
      {
        name: "Biscotti",
        image: "/images/biscotti.jpg",
        description: "Crunchy almond biscuits, perfect for dipping in coffee.",
        tags: ["Italian", "Crunchy", "Nutty"],
      },
      {
        name: "Chocolate Cake",
        image: "/images/chocolate-cake.jpg",
        description: "Rich chocolate cake, a classic treat with coffee.",
        tags: ["Chocolate", "Cake", "Classic"],
      },
      {
        name: "Croissant",
        image: "/images/croissant.jpg",
        description:
          "Flaky, buttery French pastry, a perfect coffee companion.",
        tags: ["French", "Pastry", "Buttery"],
      },
      {
        name: "Cheesecake",
        image: "/images/cheesecake.jpg",
        description: "Creamy cheesecake, delicious with a cup of coffee.",
        tags: ["Creamy", "Cake", "Classic"],
      },
      {
        name: "Cannoli",
        image: "/images/cannoli.jpg",
        description:
          "Crispy pastry tubes filled with sweet ricotta cream, a Sicilian favorite.",
        tags: ["Italian", "Ricotta", "Crunchy"],
      },
      {
        name: "Madeleine",
        image: "/images/madeleine.jpg",
        description:
          "Soft, shell-shaped French sponge cakes, lightly sweet and perfect for dipping.",
        tags: ["French", "Sponge", "Classic"],
      },
      {
        name: "Pecan Pie",
        image: "/images/pecan-pie.jpg",
        description: "Sweet, nutty pie with a gooey filling and crisp pecans.",
        tags: ["American", "Nutty", "Pie"],
      },
      {
        name: "Baklava",
        image: "/images/baklava.jpg",
        description:
          "Layers of flaky pastry, honey, and nuts. Sweet and rich, pairs well with coffee.",
        tags: ["Middle Eastern", "Nutty", "Honey"],
      },
      {
        name: "Apple Strudel",
        image: "/images/apple-strudel.jpg",
        description:
          "Austrian pastry with spiced apples and raisins wrapped in thin dough.",
        tags: ["Austrian", "Apple", "Pastry"],
      },
      {
        name: "Opera Cake",
        image: "/images/opera-cake.jpg",
        description:
          "Elegant French cake with layers of almond sponge, coffee buttercream, and chocolate ganache.",
        tags: ["French", "Coffee", "Chocolate"],
      },
      {
        name: "Macaron",
        image: "/images/macaron.jpg",
        description:
          "Delicate French meringue sandwich cookies in assorted flavors.",
        tags: ["French", "Meringue", "Colorful"],
      },
      {
        name: "Lemon Tart",
        image: "/images/lemon-tart.jpg",
        description:
          "Tangy lemon curd in a crisp pastry shell, a refreshing treat.",
        tags: ["French", "Citrus", "Tart"],
      },
      {
        name: "Coffee Cake",
        image: "/images/coffee-cake.jpg",
        description:
          "Moist cake with a cinnamon streusel topping, made to enjoy with coffee.",
        tags: ["American", "Cinnamon", "Crumb"],
      },
      {
        name: "Pavlova",
        image: "/images/pavlova.jpg",
        description:
          "Crisp meringue shell with a soft center, topped with whipped cream and fruit.",
        tags: ["Australian", "Meringue", "Fruity"],
      },
      // More variations
      {
        name: "Profiterole",
        image: "/images/profiterole.jpg",
        description:
          "Choux pastry balls filled with cream and topped with chocolate sauce.",
        tags: ["French", "Choux", "Cream"],
      },
      {
        name: "Sachertorte",
        image: "/images/sachertorte.jpg",
        description:
          "Austrian chocolate cake with apricot jam and a dark chocolate glaze.",
        tags: ["Austrian", "Chocolate", "Classic"],
      },
      {
        name: "Rum Baba",
        image: "/images/rum-baba.jpg",
        description:
          "Small yeast cake soaked in rum syrup, sometimes filled with cream.",
        tags: ["French", "Yeast", "Rum"],
      },
      {
        name: "Financier",
        image: "/images/financier.jpg",
        description: "Almond-flavored French tea cake, moist and buttery.",
        tags: ["French", "Almond", "Tea Cake"],
      },
      {
        name: "Ricciarelli",
        image: "/images/ricciarelli.jpg",
        description:
          "Soft almond cookies from Siena, Italy, dusted with powdered sugar.",
        tags: ["Italian", "Almond", "Cookie"],
      },
      {
        name: "Sfogliatella",
        image: "/images/sfogliatella.jpg",
        description:
          "Shell-shaped Italian pastry with crisp layers and a sweet ricotta filling.",
        tags: ["Italian", "Pastry", "Ricotta"],
      },
      {
        name: "Churros",
        image: "/images/churros.jpg",
        description:
          "Fried dough pastry, crispy outside and soft inside, often served with chocolate.",
        tags: ["Spanish", "Fried", "Chocolate"],
      },
      {
        name: "Galette des Rois",
        image: "/images/galette-des-rois.jpg",
        description:
          "French puff pastry cake with almond cream, traditionally served in January.",
        tags: ["French", "Almond", "Pastry"],
      },
      {
        name: "Pastel de Nata",
        image: "/images/pastel-de-nata.jpg",
        description:
          "Portuguese custard tart with a crisp, flaky crust and creamy filling.",
        tags: ["Portuguese", "Custard", "Tart"],
      },
      {
        name: "Dobos Torte",
        image: "/images/dobos-torte.jpg",
        description:
          "Hungarian sponge cake layered with chocolate buttercream and topped with caramel.",
        tags: ["Hungarian", "Chocolate", "Caramel"],
      },
      {
        name: "Kardinalschnitte",
        image: "/images/kardinalschnitte.jpg",
        description:
          "Austrian dessert with layers of meringue, sponge cake, and whipped cream.",
        tags: ["Austrian", "Meringue", "Cream"],
      },
      {
        name: "Florentine",
        image: "/images/florentine.jpg",
        description:
          "Thin, crisp cookies with nuts, candied fruit, and chocolate.",
        tags: ["Italian", "Nutty", "Chocolate"],
      },
      {
        name: "Sablé",
        image: "/images/sable.jpg",
        description: "French shortbread cookie, buttery and crumbly.",
        tags: ["French", "Shortbread", "Cookie"],
      },
      {
        name: "Amaretti",
        image: "/images/amaretti.jpg",
        description:
          "Italian almond-flavored macaron-like cookies, crisp outside and chewy inside.",
        tags: ["Italian", "Almond", "Cookie"],
      },
      {
        name: "Eclair",
        image: "/images/eclair.jpg",
        description:
          "Choux pastry filled with cream and topped with chocolate icing.",
        tags: ["French", "Choux", "Chocolate"],
      },
      {
        name: "Zeppole",
        image: "/images/zeppole.jpg",
        description:
          "Italian fried dough balls, sometimes filled with custard or cream.",
        tags: ["Italian", "Fried", "Custard"],
      },
    ];
    // Only add if not already present
    realDesserts.forEach((dessert) => {
      if (
        !dessertRecipes.some(
          (r) => r.name.toLowerCase() === dessert.name.toLowerCase()
        )
      ) {
        dessertRecipes.push(dessert);
      }
    });
    app.innerHTML = `
      <header class="sticky top-0 z-40 ${
        document.body.classList.contains("night")
          ? "bg-gray-900/90"
          : "bg-white/90"
      } backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
        <div class="flex items-center gap-3">
          <img src="/images/cupidoncoffee.png" alt="NovaCup Cherub Logo" class="w-14 h-14 object-contain" style="background:transparent; border:none; box-shadow:none;" />
          <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-logo" style="color: #c2410c !important;">NovaCup Coffee</span>
        </div>
        <div class="flex gap-4 items-center">
          <button class="px-4 py-2 rounded bg-amber-500 text-white font-bold shadow hover:bg-amber-600 transition" onclick="goToMainPage()">Main Page</button>
          <button id="toggle-dark" class="text-gray-600 hover:text-black px-3 py-1 rounded transition" onclick="toggleNightMode()">${
            document.body.classList.contains("night") ? "☀️" : "🌙"
          }</button>
        </div>
      </header>
      <div class="min-h-screen flex flex-col items-center ${
        document.body.classList.contains("night")
          ? "bg-gray-900/90"
          : "bg-white/90"
      } px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 font-logo" style="color:#c2410c">Desserts</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-8">
          ${
            dessertRecipes.length === 0
              ? `<p class='col-span-full text-center ${
                  document.body.classList.contains("night")
                    ? "text-gray-300"
                    : "text-gray-500"
                }'>No desserts found.</p>`
              : dessertRecipes
                  .map(
                    (recipe) => `
              <div class="${
                document.body.classList.contains("night")
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border"
              } border rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 p-6 flex flex-col items-center">
                <img src="${recipe.image}" alt="${
                      recipe.name
                    }" class="w-32 h-32 object-cover rounded-full border-2 border-amber-400 shadow mb-4" />
                <h2 class="text-xl font-semibold mb-2 text-center ${
                  document.body.classList.contains("night") ? "text-white" : ""
                }">${recipe.name}</h2>
                <p class="mb-2 text-center" style="color: ${
                  document.body.classList.contains("night") ? "#fff" : "#000"
                };">${recipe.description || ""}</p>
                <div class="flex gap-2 text-xs ${
                  document.body.classList.contains("night")
                    ? "text-gray-300"
                    : "text-gray-500"
                } mb-4 items-center justify-center flex-wrap">
                  ${
                    recipe.tags
                      ?.map(
                        (tag) =>
                          `<span class='${
                            document.body.classList.contains("night")
                              ? "bg-green-900 text-green-200"
                              : "bg-green-100 text-green-800"
                          } rounded px-2 py-1 font-semibold'>${tag}</span>`
                      )
                      .join("") || ""
                  }
                </div>
              </div>
            `
                  )
                  .join("")
          }
        </div>
      </div>
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
    </style>
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur shadow flex items-center justify-between px-6 py-3 mb-8">
      <div class="flex items-center gap-3">
        <img src="/images/cupidoncoffee.png" alt="NovaCup Cherub Logo" class="w-14 h-14 object-contain" style="background:transparent; border:none; box-shadow:none;" />
        <span class="text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] font-logo" style="color: #c2410c !important;">NovaCup Coffee</span>
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
          <select 
            class="px-4 py-2 border rounded shadow-sm"
            onchange="updateFilter(this.value)"
            style="color: ${
              document.body.classList.contains("night") ? "#fff" : "#000"
            }; background-color: ${
    document.body.classList.contains("night") ? "#222" : "#fff"
  };">
            <option value="All" style="color: ${
              document.body.classList.contains("night") ? "#fff" : "#000"
            }; background-color: ${
    document.body.classList.contains("night") ? "#222" : "#fff"
  };">All Types</option>
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
                class="absolute top-2 right-2 text-3xl ${
                  favorites.has(i) ? "text-red-500" : "text-gray-400"
                }"
                style="line-height: 1;"
                onclick="toggleFavorite(${i})"
                aria-label="Toggle Favorite"
              >
                ♥
              </button>
              <img src="${recipe.image}" alt="${
                recipe.name
              }" class="w-28 h-28 object-cover rounded-full mx-auto border-2 border-amber-400 shadow mb-4" />
              <h2 class="text-xl font-semibold mb-2 text-center">${
                recipe.name
              }</h2>
              <p class="mb-2 text-center" style="color: ${
                document.body.classList.contains("night") ? "#fff" : "#000"
              };"></p>
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
      &copy; 2025 NovaCup Coffee. Made with ☕ by Bladerunner
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
// Navigation for second page
window.goToSecondPage = function () {
  currentPage = "second";
  render();
};
window.goToMainPage = function () {
  currentPage = "main";
  render();
};

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
              <p class="mb-2 text-center" style="color: ${
                document.body.classList.contains("night") ? "#fff" : "#000"
              };">${recipe.description}</p>
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
      &copy; 2025 NovaCup Coffee. Made with ☕ by Bladerunner
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
  // Reset to show all types and clear search
  searchQuery = "";
  selectedType = "All";
  window._prevState = null;
  render();
};

// Initial render
render();
