import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DragonCurve from './DragonCurve';

function tick() {
    console.log( "<" );
    ReactDOM.render( <DragonCurve />, document.getElementById( 'root' ) );
    console.log( "/>" );
}

setInterval( tick, 1000 );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
