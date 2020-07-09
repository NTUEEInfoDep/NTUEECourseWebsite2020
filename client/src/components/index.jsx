import React from 'react';
import ReactDOM from 'react-dom';

import SignIn from './signIn.jsx';


const App = () => (
    <div>
        <SignIn />
    </div>
);

ReactDOM.render(< App />, document.getElementById('app'));