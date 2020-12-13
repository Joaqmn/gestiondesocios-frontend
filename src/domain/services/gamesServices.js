import Game from "../../utils/games";

export const getGames = async () => {
  const games = new Game();
  const data = await games.getGames();
  return data;
};

export const getGame = async id => {
  const games = new Game();
  const data = await games.getGame(id);
  return data;
};

export const updateGame = async (id, body) => {
  const game = new Game();
  const data = await game.updateGame(id, body);
  return data;
};
