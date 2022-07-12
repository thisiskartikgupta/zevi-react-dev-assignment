
import React, {useEffect, useState} from 'react';
import {ProductType} from '../../fakerData';

import ProductResultCard from '../ProductResultCard/ProductResultCard';

import ArrowUpSVG from '../../assets/svg/angle-up-solid.svg';
import ArrowDownSVG from '../../assets/svg/angle-down-solid.svg';
import './SearchResultsSection.scss';

type SearchResultsSectionPropsType = {
  productData: ProductType[],
  searchQuery: string,
}

type FilterType = {
  rating: boolean[],
  price: boolean[]
};

type ExpandFilterType = {
  rating: boolean,
  price: boolean,
};

const SearchResultsSection = (props : SearchResultsSectionPropsType) => {
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState<FilterType>({
    rating: [false, false, false, false, false],
    price: [false, false, false],
  });
  const [displayData, setDisplayData] = useState<ProductType[]>(props.productData);
  const [expandFilter, setExpandFilter] = useState<ExpandFilterType>({rating: true, price: true});

  useEffect(() => {
    setFilteredData(props.productData);
    const newFilterData:ProductType[] = [];
    for (let i = 0; i < filters.rating.length; i++) {
      if (filters.rating[i]) {
        filteredData.forEach((element) => {
          if (element.rating === i+1) {
            newFilterData.push(element);
          }
        });
      }
    }

    // Price comparisons
    if (filters.price[0]) {
      filteredData.forEach((element) => {
        if (Number(element.discountedPrice) < 500) {
          newFilterData.push(element);
        }
      });
    } else if (filters.price[1]) {
      filteredData.forEach((element) => {
        if (Number(element.discountedPrice) >= 500 && Number(element.discountedPrice) <= 2000) {
          newFilterData.push(element);
        }
      });
    } else if (filters.price[2]) {
      filteredData.forEach((element) => {
        if (Number(element.discountedPrice) > 2000) {
          newFilterData.push(element);
        }
      });
    }
    setDisplayData(newFilterData);
  }, [filters]);

  return (
    <div className='search-results-section'>
      <h3>Search Results</h3>
      <div>
        <div className='filter-section'>

          <div className='filter-header'>
            <div>RATINGS</div>
            <img onClick={()=>setExpandFilter({...expandFilter, rating: !expandFilter.rating})} src={expandFilter.rating ? ArrowUpSVG : ArrowDownSVG} alt='show/hide'/>
          </div>
          <div className={!expandFilter.rating ? 'hide' : 'show'}>
            <ul>
              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[4] = !newFilters[4];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div className='rating-div'>★★★★★</div>
              </li>
              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[3] = !newFilters[3];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div className='rating-div'>★★★★☆</div>
              </li>

              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[2] = !newFilters[2];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div className='rating-div'>★★★☆☆</div>
              </li>

              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[1] = !newFilters[1];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div className='rating-div'>★★☆☆☆</div>
              </li>

              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[0] = !newFilters[0];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div className='rating-div'>★☆☆☆☆</div>
              </li>
            </ul>
          </div>

          <div className='filter-header'>
            <div>PRICE RANGE</div>
            <img onClick={()=>setExpandFilter({...expandFilter, price: !expandFilter.price})} src={expandFilter.price ? ArrowUpSVG : ArrowDownSVG} alt='show/hide'/>
          </div>
          <div className={!expandFilter.price ? 'hide' : 'show'}>
            <ul>
              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.price];
                    newFilters[0] = !newFilters[0];
                    setFilters({...filters, price: newFilters});
                  }}
                />
                <div className='content'>Under 500</div>
              </li>
              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.price];
                    newFilters[1] = !newFilters[1];
                    setFilters({...filters, price: newFilters});
                  }}
                />
                <div className='content'>500 to 2000</div>
              </li>
              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.price];
                    newFilters[2] = !newFilters[2];
                    setFilters({...filters, price: newFilters});
                  }}
                />
                <div className='content'>Above 2000</div>
              </li>
            </ul>
          </div>

        </div>

        <div className='product-section'>
          {
            displayData.length === 0 ? 'NO RESULTS FOUND. TRY CHANGING THE FILTERS.' :
            [...displayData].map((element, index) => (element.setDisplayActive) ? <ProductResultCard key={index} product={element}/> : null)
          }
        </div>
      </div>
    </div>
  );
};

export default SearchResultsSection;
