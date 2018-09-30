import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomeContainer from './containers/Home_Container';
import ArtistsContainer from './containers/Artists_Container';
const Routes = () => {
        return(
            <Switch>
                <Route path="/" exact component={HomeContainer}/>
                <Route path="/artist/:id" exact component={ArtistsContainer}/>
            </Switch>
        )
}

export default Routes;