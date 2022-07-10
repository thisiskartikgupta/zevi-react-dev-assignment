
import React from 'react';
import './TrendsCard.scss';

type TrendsCardProps = {

  imgUrl: string,
  description: string
};

const TrendsCard = (props :TrendsCardProps) => {
  return (
    <div className='trends-card-container'>
      <img src={props.imgUrl} alt="Representative Image"/>
      <div >{props.description}</div>
    </div>
  );
};

export default TrendsCard;
