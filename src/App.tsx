import React from 'react';
import AppLogo from './components/AppLogo/AppLogo';
import './App.scss';
import SuggestionCard from './components/SuggestionCard/SuggestionCard';

/**
 * The main <App> component of our application.
 * @return {JsxElement}
 */
function App(): JSX.Element {
  return (
    <div className='App'>
      <AppLogo/>
      <SuggestionCard imgUrl="https://images.bestsellerclothing.in/data/only/august-27-2021/228037401_g4.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" description='Shirt with puffed sleeves'/>
      <SuggestionCard imgUrl="https://images.bestsellerclothing.in/data/only/august-27-2021/228037401_g4.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" description='Shirt with puffed sleeves'/>
      <SuggestionCard imgUrl="https://images.bestsellerclothing.in/data/only/august-27-2021/228037401_g4.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" description='Shirt with puffed sleeves'/>
      <SuggestionCard imgUrl="https://images.bestsellerclothing.in/data/only/august-27-2021/228037401_g4.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" description='Shirt with puffed sleeves'/>
      <SuggestionCard imgUrl="https://images.bestsellerclothing.in/data/only/august-27-2021/228037401_g4.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" description='Shirt with puffed sleeves'/>
      <SuggestionCard imgUrl="https://images.bestsellerclothing.in/data/only/august-27-2021/228037401_g4.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto" description='Shirt with puffed sleeves'/>
    </div>
  );
}

export default App;
