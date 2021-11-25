import React from 'react';
import './App.css';
import {SearchBar} from '../src/Components/SearchBar/SearchBar';
import {SearchResults} from '../src/Components/SearchResults/SearchResults';
import {Subreddits} from '../src/Components/Subreddits/Subreddits';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1><span className="highlight">Reddit</span> Client</h1>
        <SearchBar />
      </div>
      <div className="App-results">
        <SearchResults />
        <Subreddits />
      </div>
    </div>
  );
}

export default App;
