import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DragonCurve from './DragonCurve';

/*
function tick( frame ) {
    frame = frame + 1;
    console.log( "tick frame: " + frame );
    ReactDOM.render(
        <DragonCurve frame={ frame } />,
        document.getElementById( 'root' )
    );
}
*/
function tick( count ) {
    count = count + 1;
    ReactDOM.render(
        <DragonCurve frame={ count } />,
        document.getElementById( 'root' )
    );
}
setInterval( tick(), 1000 );
//var frame = setInterval( tick( frame ), 100 );

console.log( "end" );
/*
console.log( "index.js" );
ReactDOM.render( <DragonCurve />, document.getElementById( 'root' ) );
console.log( "done" );
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
