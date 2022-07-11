import {faker} from '@faker-js/faker';


const MAX_RATING = 5;
const MIN_RATING = 1;

// ------------------------------------------------------------------

type TrendData = {
  imgUrl: string,
  description: String,
}

const getTrendsData = () => {
  const trendsData : TrendData[] = [];

  for ( let i = 0; i < 5; i++) {
    const imgUrl : string = faker.image.people();
    const description : string = faker.commerce.productName();
    trendsData.push({
      imgUrl: imgUrl,
      description: description,
    });
  }

  return trendsData;
};

// ------------------------------------------------------------------

const getSuggestionData = () => {
  const suggestionData : string[] = [];

  for (let i = 0; i < 5; i++) {
    const suggestion : string = faker.commerce.productName();
    suggestionData.push(suggestion);
  }

  return suggestionData;
};

// ------------------------------------------------------------------

type Product = {
  productName: string,
  currencyPrefix : string,
  originalPrice: string,
  discountedPrice: string,
  rating: number,
  noOfReviews: number,
}

const getProductData = () => {
  const productData : Product[] = [];

  for (let i = 0; i < 20; i++) {
    const productName : string = faker.commerce.productName();
    // Hard-coded the value for demo purposes
    const currencyPrefix : string = 'Rs.';
    const originalPrice : string = faker.commerce.price(100, 5000);
    const discountedPrice : string =
      faker.commerce.price(100, Number(originalPrice));
    const rating =
      Math.round(Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING);
    const noOfReviews = Math.floor(Math.random() * 1000);

    productData.push({
      productName: productName,
      currencyPrefix: currencyPrefix,
      originalPrice: originalPrice,
      discountedPrice: discountedPrice,
      rating: rating,
      noOfReviews: noOfReviews,
    });
  };

  return productData;
};

// ------------------------------------------------------------------

const TrendsData = getTrendsData();
const SuggestionData = getSuggestionData();
const ProductData = getProductData();

console.log(TrendsData, SuggestionData, ProductData);


export default {TrendsData, SuggestionData, ProductData};

