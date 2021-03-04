import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
//import NavbarTop from './components/NavbarTop';
import HomePage from './pages/HomePage';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import "tailwindcss/tailwind.css"

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import NavbarTop from './components/NavbarTop';

// start the Stimulus application

const App = () => {
    return (
        <HashRouter>
            <NavbarTop />
            <main className="container pt-5">
                <Switch>
                    <Route path="/customers" component={HomePage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </main>
        </HashRouter>
    )
}

const rootElement = document.querySelector('#home');
ReactDOM.render(<App />, rootElement);

// import SearchPage from './controllers/components/Home';

// const searchPageElement = document.querySelector('#home');
// const getData = (name, json = true) => {
//     const value = searchPageElement.getAttribute(`data-${name}`);
//     return json ? JSON.parse(value) : value;
// }

// const element = React.createElement(SearchPage, {
//     categories: getData('categories')
// })
// ReactDOM.render(<Router><Home /></Router>, document.getElementById('home'));