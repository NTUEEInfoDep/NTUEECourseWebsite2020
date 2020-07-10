import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';

import Routes from '../routes/routes.jsx';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(< App />, document.getElementById('app'));