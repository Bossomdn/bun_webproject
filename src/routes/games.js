import { fetchData } from "../utils";

export async function gamesRoute(genre) {
  const API_KEY = "94bbb5ca5ec34a42bb762e21e9fca713";
  const BASE_URL = "https://api.rawg.io/api";
  const data = await fetchData(`${BASE_URL}/games?key=${API_KEY}&genres=${genre}`);

  const gamesHTML = data.results
    .map(
      (game) => `
      <div class="p-4 bg-white shadow rounded">
        <h2 class="text-xl font-bold">${game.name}</h2>
        <a href="/game?id=${game.id}">
          <img class="rounded mt-2" src="${game.background_image}" alt="${game.name}" />
        </a>
        <p class="text-gray-600">Rating: ${game.rating} / 5</p>
      </div>
    `
    )
    .join("");

  return `
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Games in ${genre}</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${gamesHTML}
      </div>
    </div>
  `;
}
