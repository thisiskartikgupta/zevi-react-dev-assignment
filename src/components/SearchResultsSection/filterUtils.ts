
import {ProductType} from '../../fakerData';

export const applyRatingFilter = (list:ProductType[], rating:number) => {
  const newList:ProductType[] = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].rating === rating) {
      newList.push(list[i]);
    }
  }
  return newList;
};


// applypriceFilter
// selectFavourites
// no of reviews

