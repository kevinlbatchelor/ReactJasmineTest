import React, { Component } from 'react';
import App from './src/App.js';
import ReactDOM from 'react-dom';

class ConnectedApp extends Component {
    render() {
        return (
            <App/>
        );
    }
}

ReactDOM.render(<ConnectedApp/>, document.getElementById('root'));