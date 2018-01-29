import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyCksyb1zfYmQHK-Zb69o1Hw0YWbKpPHXbU';

// Create a new Component. This component should produce some HTML

const App = () => {
    return ( 
        <div>
             <SearchBar />
        </div>
    );
};

// Tank this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'))