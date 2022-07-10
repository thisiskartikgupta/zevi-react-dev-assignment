import React, {useState} from 'react';

import AppLogo from './components/AppLogo/AppLogo';
import SearchSVG from './assets/svg/magnifying-glass-solid.svg';
import ClearSVG from './assets/svg/xmark-solid.svg';

import './App.scss';

/**
 * The main <App> component of our application.
 * @return {JsxElement}
 */
function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  return (
    <div className='App'>
      <AppLogo/>

      {/* The SearchBox component */}
      <div className={
        showResults ? 'search-box-container minimized' : 'search-box-container'
      }>
        <input placeholder='Search'
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.currentTarget.value)}/>
        <button onClick={()=>setShowResults(!showResults)}>
          <img src={showResults ? ClearSVG : SearchSVG}
            alt='search'/>
        </button>

      </div>

    </div>
  );
}

export default App;
