
import React, {useEffect, useState} from 'react';
import {ProductType} from '../../fakerData';

import './SearchResultsSection.scss';

type SearchResultsSectionPropsType = {
  productData: ProductType[],
  searchQuery: string,
}

type FilterType = {
  rating: boolean[],
  price: boolean[]
};

const SearchResultsSection = (props : SearchResultsSectionPropsType) => {
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState<FilterType>({
    rating: [false, false, false, false, false],
    price: [false, false, false],
  });
  const [displayData, setDisplayData] = useState<ProductType[]>(props.productData);

  useEffect(() => {
    setFilteredData(props.productData);
    console.log(filteredData);
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
    }

    if (filters.price[1]) {
      filteredData.forEach((element) => {
        if (Number(element.discountedPrice) >= 500 && Number(element.discountedPrice) <= 2000) {
          newFilterData.push(element);
        }
      });
    }

    if (filters.price[2]) {
      filteredData.forEach((element) => {
        if (Number(element.discountedPrice) > 2000) {
          newFilterData.push(element);
        }
      });
    }

    console.log(newFilterData, filters);
    setDisplayData(newFilterData);
  }, [filters]);

  return (
    <div className='search-results-section'>
      <h3>Search Results</h3>
      <div>
        <div className='filter-section'>

          <div>
            <div>Ratings</div>
          </div>
          <div>
            <ul>
              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[0] = !newFilters[0];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div>★☆☆☆☆</div>
              </li>

              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[1] = !newFilters[1];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div>★★☆☆☆</div>
              </li>

              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[2] = !newFilters[2];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div>★★★☆☆</div>
              </li>

              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[3] = !newFilters[3];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div>★★★★☆</div>
              </li>

              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.rating];
                    newFilters[4] = !newFilters[4];
                    setFilters({...filters, rating: newFilters});
                  }}
                />
                <div>★★★★★</div>
              </li>
            </ul>
          </div>

          <div>
            <div>Price Range</div>
          </div>
          <div>
            <ul>
              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.price];
                    newFilters[0] = !newFilters[0];
                    setFilters({...filters, price: newFilters});
                  }}
                />
                <div>Under 500</div>
              </li>
              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.price];
                    newFilters[1] = !newFilters[1];
                    setFilters({...filters, price: newFilters});
                  }}
                />
                <div>500 to 2000</div>
              </li>
              <li>
                <input type='checkbox'
                  onChange={()=> {
                    const newFilters = [...filters.price];
                    newFilters[2] = !newFilters[2];
                    setFilters({...filters, price: newFilters});
                  }}
                />
                <div>Above 2000</div>
              </li>
            </ul>
          </div>

        </div>

        <div className='product-section'>
          product section
          {
            [...displayData].map((element, index) => (element.setDisplayActive) ? <div key={index}>{element.productName} + [{element.rating}] || [{element.discountedPrice}]</div> : null)
            // JSON.stringify(displayData)
          }
        </div>
      </div>
    </div>
  );
};

export default SearchResultsSection;
