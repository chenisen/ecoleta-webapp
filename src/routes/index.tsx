import React from 'react';
import { Route, Routes as Switch, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import CreatePoint from '../pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<CreatePoint />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;