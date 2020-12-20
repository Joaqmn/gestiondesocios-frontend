import Game from "../../utils/games";

export const getGames = async () => {
  const games = new Game();
  const data = await games.getAll();
  return data;
};

export const getGame = async id => {
  const game = new Game();
  const data = await game.get(id);
  return data;
};

export const insertGame = async body => {
  const game = new Game();
  const data = await game.insert(body);
  return data;
};

export const deleteGame = async id => {
  const game = new Game();
  const data = await game.delete(id);
  return data;
};

export const updateGame = async (id, body) => {
  const game = new Game();
  const data = await game.update(id, body);
  return data;
};
