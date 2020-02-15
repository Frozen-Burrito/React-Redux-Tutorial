import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components 
import Navbar from './components/navbar';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

import Post from './components/post';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/:post_id" component={Post} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
