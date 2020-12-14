/**
 * URL to a sample image.
 *
 * @type {string}
 */
export const IMAGE_URL = "https://source.unsplash.com/random/800x450";

/**
 * Return an object containing data of sample images.
 *
 * @param {number} length - Optional. A number of slides.
 * @param {number} sig    - Optional. The signature for getting a different image.
 *
 * @return {Object} - An object containing data of sample images.
 */

import { getGames } from "../domain/services/gamesServices";

const gameArray = getGames().then(resp => {
  if (resp.status === 200) {
    this.games = resp.data;
    this.games.map(function(item) {
      delete item.rating;
      delete item.entry_date;
      delete item.disponibility;
      delete item.comments;
      return item;
    });
  }
});

const id = id;
const noIDArray = gameArray.forEach(item => {
  if (id != item.id) {
    delete item.id;
    delete item.game_image;
    delete item.game_name;
    delete item.id_owner;
    return item;
  } else {
    delete item.id;
    delete item.id_owner;
  }
});

const gameImages = noIDArray.filter(item => {
  return item.game_image;
});

export function ownedGamesSlides(length = gameImages.length, sig = 0) {
  // eslint-disable-next-line prefer-spread
  return Array.apply(null, Array(length)).map((value, index) => {
    index = sig || index;

    return {
      src: `${gameImages}?sig=${index}`,
      alt: `Image ${index}`
    };
  });
}
