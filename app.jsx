import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

// import Loginscreen from './components/loginscreen.jsx'

document.addEventListener('DOMContentLoaded', function(){


    const urlApi = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';

    ReactDOM.render(
        <App urlApi={urlApi}/>,
        document.getElementById('app')
    );
});