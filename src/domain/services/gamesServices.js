import Game from "../../utils/games";

export const getGames = async () => {
  const games = new Game();
  const data = await games.getGames();
  return data;
};

export const getGame = async (id) => {
  const game = new Game();
  const data = await game.getGame(id);
  return data;
};

export const insertGame = async (id) => {
  const game = new Game();
  const data = await game.insertGame(id);
  return data;
};

export const deleteGame = async (id) => {
  const game = new Game();
  const data = await game.deleteGame(id);
  return data;
};

export const updateGame = async (id) => {
  const game = new Game();
  const data = await game.updateGame(id);
  return data;
};