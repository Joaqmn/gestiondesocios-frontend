import BorrowedGames from "../../utils/borrowedGames";

export const getBorrowedGames = async () => {
  const borrowedGames = new BorrowedGames();
  const data = await borrowedGames.get();
  return data;
};

export const insertBorrowedGames = async (id, body) => {
  const borrowedGames = new BorrowedGames();
  const data = await borrowedGames.insert(id, body);
  return data;
};

export const deleteBorrowedGames = async (id) => {
  const borrowedGames = new BorrowedGames();
  const data = await borrowedGames.delete(id);
  return data;
};
