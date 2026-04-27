const searchInput = document.querySelector(".search-box");
const resultsList = document.getElementById("resultslist");
const searchContainer = document.querySelector(".search-container");

const games = [
  { name: "Dead by daylight", url: "dead by daylight/game_page.html" },
  { name: "Resdient evil", url: "resdient evil/game_page.html" },
  { name: "The evil within", url: "the evil within/game_page.html" },
  { name: "Outlast", url: "outlast/game_page.html" },
  { name: "God of war", url: "god of war/game_page.html" },
  { name: "Uncharted", url: "uncharted/game_page.html" },
  { name: "Days gone", url: "days gone/game_page.html" },
  { name: "Assissan creed", url: "assissan creed/game_page.html" },
  { name: "Grid 2", url: "grid 2/game_page.html" },
  { name: "Need for speed", url: "neeed for speed/game_page.html" },
  { name: "Horizon", url: "horizon/game_page.html" },
  { name: "Asphalet", url: "asphalet/game_page.html" },
  { name: "FIFA", url: "fifa/game_page.html" },
  { name: "PES", url: "pes/game_page.html" },
  { name: "NBA", url: "nba/game_page.html" },
  { name: "Football manager", url: "football manager/game_page.html" },
  { name: "Call of duty", url: "call of duty/game_page.html" },
  { name: "Battlefield", url: "battlefield/battlefield.html" },
  { name: "Counter strike", url: "counter strike/game_page.html" },
  { name: "Code of war", url: "code of war/game_page.html" },
  { name: "GTA V", url: "gtav/game_page.html" },
  { name: "Internet cafe simulator", url: "internet cafe/game_page.html" },
  { name: "Supermarket simulator", url: "supermarket/game_page.html" }
];



function showResults(query) {
  const filtered = games.filter(game =>
    game.name.toLowerCase().includes(query)
  );

  resultsList.innerHTML = "";

  if (filtered.length === 0) {
    resultsList.style.display = "none";
    return;
  }

 filtered.forEach(game => {
  const li = document.createElement("li");
  const link = document.createElement("a");

  link.href = game.url;
  link.textContent = game.name;
  link.style.textDecoration = "none";
  link.style.color = "inherit";
  link.style.display = "block";

  li.appendChild(link);
  resultsList.appendChild(li);
});


  resultsList.style.display = "block";
}


searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  if (query === "") {
    resultsList.style.display = "none";
    return;
  }

  showResults(query);
});


searchContainer.addEventListener("mouseleave", () => {
  resultsList.style.display = "none";
});


searchContainer.addEventListener("mouseenter", () => {
  const query = searchInput.value.toLowerCase().trim();
  if (query !== "") {
    showResults(query);
  }
});
