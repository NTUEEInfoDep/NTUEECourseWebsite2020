import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
} from "react-router-dom";

import Routes from '../routes/routes.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

ReactDOM.render(< App />, document.getElementById('app'));