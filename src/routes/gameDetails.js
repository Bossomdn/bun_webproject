import { fetchData } from "../utils";

export async function gameDetailsRoute(gameId) {
  const API_KEY = "94bbb5ca5ec34a42bb762e21e9fca713";
  const BASE_URL = "https://api.rawg.io/api";
  const game = await fetchData(`${BASE_URL}/games/${gameId}?key=${API_KEY}`);

  return `
    <div class="container mx-auto p-4">
      <h1 class="text-4xl font-bold mb-4">${game.name}</h1>
      <div class="bg-white shadow rounded p-4">
        <img class="rounded mb-4" src="${game.background_image}" alt="${game.name}" />
        <p class="text-gray-800">${game.description_raw}</p>
        <p class="text-gray-600 mt-2">Released: ${game.released}</p>
        <p class="text-gray-600">Rating: ${game.rating} / 5</p>
      </div>
    </div>
  `;
}
