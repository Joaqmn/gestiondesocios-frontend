import BorrowedGames from "../../utils/borrowedGames";

export const getBorrowedGames = async () => {
  const borrowedGames = new BorrowedGames();
  const data = await borrowedGames.get();
  return data;
};

export const insertBorrowedGame = async body => {
  const borrowedGames = new BorrowedGames();
  const data = await borrowedGames.insert(body);
  return data;
};

export const deleteBorrowedGame = async id => {
  const borrowedGames = new BorrowedGames();
  const data = await borrowedGames.delete(id);
  return data;
};
