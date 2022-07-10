
import React from 'react';
import './SuggestionCard.scss';

type SuggestionCardProps = {
  imgUrl: string,
  description: string
};

const SuggestionCard = (props :SuggestionCardProps) => {
  return (
    <div className='suggestion-card-container'>
      <img src={props.imgUrl} alt="Representative Image"/>
      <div >{props.description}</div>
    </div>
  );
};

export default SuggestionCard;
