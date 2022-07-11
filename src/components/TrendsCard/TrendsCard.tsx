
import React from 'react';
import './TrendsCard.scss';

type TrendsCardProps = {

  imgUrl: string,
  description: String,
  setSearchQuery: Function,
};

const TrendsCard = (props :TrendsCardProps) => {
  return (
    <div className='trends-card-container'
      onClick={()=>props.setSearchQuery(props.description)}>
      <img src={props.imgUrl} alt="Representative Image"/>
      <div >{props.description}</div>
    </div>
  );
};

export default TrendsCard;
