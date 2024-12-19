import { genresRoute } from "./routes/genres";
import { gamesRoute } from "./routes/games";
import { gameDetailsRoute } from "./routes/gameDetails";

const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/genres") {
      return new Response(await genresRoute(), {
        headers: { "Content-Type": "text/html" },
      });
    }

    if (url.pathname === "/games") {
      const genre = url.searchParams.get("genre");
      return new Response(await gamesRoute(genre), {
        headers: { "Content-Type": "text/html" },
      });
    }

    if (url.pathname === "/game") {
      const gameId = url.searchParams.get("id");
      return new Response(await gameDetailsRoute(gameId), {
        headers: { "Content-Type": "text/html" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server is running on http://localhost:${server.port}`);
