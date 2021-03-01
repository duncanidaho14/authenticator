import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import "tailwindcss/tailwind.css"

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application



import Home from './controllers/Home';

const searchPageElement = document.querySelector('#home');
const getData = (name, json = true) => {
    const value = searchPageElement.getAttribute(`data-${name}`);
    return json ? JSON.parse(value) : value;
}

const element = React.createElement(SearchPage, {
    categories: get
})
ReactDOM.render(<Home />, document.getElementById('home'));
