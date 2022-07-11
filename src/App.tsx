import React, {useEffect, useState} from 'react';

import SearchBoxCard from './components/SearchBoxCard/SearchBoxCard';
import SearchResultsSection from
  './components/SearchResultsSection/SearchResultsSection';

import {TrendDataType, TrendsData, SuggestionData,
  ProductData, ProductType} from './fakerData';
import SearchSVG from './assets/svg/magnifying-glass-solid.svg';
import AppLogo from './components/AppLogo/AppLogo';
import './App.scss';

/**
 * The main <App> component of our application.
 * @return {JsxElement}
 */
const App : React.FunctionComponent = () => {
  const [trendsData, setTrendsData] = useState<TrendDataType[]>([]);
  const [suggestionData, setSuggestionData] = useState<string[]>([]);
  const [productData, setProductData] = useState<ProductType[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  // console.log(trendsData, suggestionData, productData,
  //     showResults, searchQuery);
  console.log(productData);

  useEffect(() => {
    setTrendsData(TrendsData);
    setSuggestionData(SuggestionData);
    setProductData(ProductData);
  }, []);

  return (
    <div className='App'>
      <AppLogo/>

      {/* The SearchBox component */}
      <div className='search-box-container'>
        <input placeholder='Search' value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)} autoFocus/>
        <button onClick= {() => setShowResults(!showResults)}>
          <img src={SearchSVG} alt='search'/>
        </button>
      </div>
      <div>
        {
          showResults ?
          <SearchResultsSection
            productData={productData}
            searchQuery={searchQuery}/> :
          searchQuery.length !== 0 ?
          <SearchBoxCard
            trendsData={trendsData} suggestionData={suggestionData}
            setSearchQuery={setSearchQuery}
          /> : null
        }
      </div>

    </div>
  );
};

export default App;
