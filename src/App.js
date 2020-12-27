import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Gallery from './Gallery';
import Footer from './Footer';

export default function App() {
    const publicEvent = "live";
    return (
        <BrowserRouter basename={'/'}>
            <Switch>
                <Route exact path='/'>
                    <h2>Please add the project (TBA) campaign and variant to address</h2>
                </Route>
                <Route exact path='/:campaign/:color'>
                    <Gallery publicEvent={publicEvent} />
                    <Footer />
                </Route>
                <Route path='*'>
                    <h2>404 Nut Found - take your adrenaline shot now!</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

