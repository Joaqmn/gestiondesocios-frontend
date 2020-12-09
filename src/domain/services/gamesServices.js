import Game from "../../utils/games";

export const getGames = async () => {
  const games = new Game();
  const data = await games.getGames();
  return data;
};
