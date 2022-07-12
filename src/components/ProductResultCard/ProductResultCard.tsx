
import React, {useState} from 'react';
import {ProductType} from '../../fakerData';

import HeartSolidSVG from '../../assets/png/icons8-heart-60.png';
import HeartOutlineSVG from '../../assets/png/icons8-favorite-60.png';

import './ProductResultCard.scss';

type ProductResultCardPropType = {
  product: ProductType,
}

const ProductResultCard = (props: ProductResultCardPropType) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [showHoverText, setShowHoverText] = useState<boolean>(false);
  const PRODUCT = props.product;

  const getRatingString = (rating:number) => {
    if (rating === 1) return '★☆☆☆☆';
    else if (rating === 2) return '★★☆☆☆';
    else if (rating === 3) return '★★★☆☆';
    else if (rating === 4) return '★★★★☆';
    else if (rating === 5) return '★★★★★';
  };

  return (
    <div className='product-result-card'>
      <div onMouseOver={()=>setShowHoverText(true)}
        onMouseOut={()=>setShowHoverText(false)}
        className='image-container'>
        <img className='display' src={PRODUCT.imgUrl}/>
        <img className={isFavourite ? 'favourite-solid' : 'favourite-outline'}
          src={isFavourite ? HeartSolidSVG : HeartOutlineSVG}
          onClick={() => setIsFavourite(!isFavourite)}/>
        <div className={showHoverText ? 'hover-text' : 'hide'}>VIEW CATEGORY</div>
      </div>
      <div className='text-container'>
        <div className='product-name'>{PRODUCT.productName}</div>
        <div>
          <div><s>{PRODUCT.currencyPrefix}{PRODUCT.originalPrice}</s></div>
          <div className='discounted-price'>{PRODUCT.currencyPrefix}{PRODUCT.discountedPrice}</div>
        </div>
        <div>{getRatingString(PRODUCT.rating)}({PRODUCT.noOfReviews})</div>
      </div>

    </div>
  );
};

export default ProductResultCard;
