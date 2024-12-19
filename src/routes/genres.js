import { fetchData } from "../utils";

export async function genresRoute() {
  const API_KEY = "94bbb5ca5ec34a42bb762e21e9fca713";
  const BASE_URL = "https://api.rawg.io/api";
  const data = await fetchData(`${BASE_URL}/genres?key=${API_KEY}`);

  const genreHTML = data.results
    .map(
      (genre) => `
      <div class="p-4 bg-white shadow rounded">
        <h2 class="text-xl font-bold">${genre.name}</h2>
        <a href="/games?genre=${genre.slug}">
          <img class="rounded mt-2" src="${genre.image_background}" alt="${genre.name}" />
        </a>
      </div>
    `
    )
    .join("");

  return `
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Game Genres</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${genreHTML}
      </div>
    </div>
  `;
}
