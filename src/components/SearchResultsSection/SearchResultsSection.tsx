
import React, {useEffect, useState} from 'react';
import {ProductType} from '../../fakerData';

type SearchResultsSectionPropsType = {
  productData: ProductType[],
  searchQuery: string,
}

const SearchResultsSection = (props : SearchResultsSectionPropsType) => {
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);

  useEffect(() => setFilteredData(props.productData), []);
  console.log(filteredData, setFilteredData);

  return (
    <div className='search-results-section'>
      <h3>Search Results</h3>
      <div>
        <div> filter section</div>
        <div>product section</div>
      </div>
    </div>
  );
};

export default SearchResultsSection;
