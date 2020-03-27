import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components 
import Navbar from './components/navbar';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import NewPost from './pages/newPost';

import Post from './pages/post';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:post_id" component={Post} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
