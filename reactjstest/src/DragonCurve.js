import React, { Component } from 'react';

class DragonCurve extends Component {
    render() {
        console.log( "DragonCurve.js" );
        return (
            < CurveAnimate  counter="0" />
        );
    }
}

var lineSegments = [ 0, 0, 0, 10 ];
var lineCount = ( lineSegments.length / 2 - 1 );
var lineCoord = "0,0 0,10";
var existingAngle = 0;

var tick = 0;
var curvePattern = [1];
var lineCoord = "";
function CurveAnimate() {
    if (tick <= 10){
        curvePattern = updatePattern(curvePattern);
        console.log(tick + ": "+curvePattern);
        lineCoord = updateLine(curvePattern);
        console.log("curvePattern: "+ lineCoord);
        tick = tick + 1;
    }
    return (
        <div>
            <h1>{ tick }</h1>
            < svg width="1000" height="1000">
                <polyline points={lineCoord}
                    fill="transparent" stroke="red" transform="translate(500 250) rotate(180) scale(1)" strokeWidth="1" />
            </svg >
        </div>
    );
}
/// Translate curvePattern to <svg><polyline> compatable coordinates ///
function updateLine(curvePattern){
    var angle = 90;
    var x = 0;
    var y = 10;
    var lineString = "0,0 0,10";

    for(var i = 0; i < curvePattern.length; i++){
        if(curvePattern[i] == 0 ){
            angle = angleCalc(angle, (90))
            console.log("+90");
        } else if (curvePattern[i] == 1){
            angle = angleCalc(angle, (-90));
            console.log("-90");
        }
        console.log("angle["+i+"]"+": " + angle );
        switch(angle){
        case 0:
            x = x + 10;
            y = y + 0;
            break;
        case 90:
            x = x + 0;
            y = y + 10;
            break;
        case 180:
            x = x - 10;
            y = y + 0;
            break;
        case 270:
            x = x + 0;
            y = y - 10;
            break;
        default:
            console.log( "Error: nonacceptable angle" );
        }
        lineString = lineString + " "+x+","+y;
    }
    return lineString;
}
/// Impliment dragon curve function: S_(n+1) = S_n + 1 + (S_n)' (reversed & opposite) ///
function updatePattern( curvePattern ) {
    var patternLength = curvePattern.length;
    curvePattern.push(1);
    for (var i = patternLength-1; i >= 0; i--){
        if (curvePattern[i] == 0){
            curvePattern.push(1);
        } else if(curvePattern[i] == 1) {
            curvePattern.push(0);
        }else{
            console.log("Error updating line at curvePattern["+i+"]");
        }
    }
    return(curvePattern);
    /*
    /// If lineCount is even or 1 ///
    if ( ( lineCount % 2 ) === 0 || lineCount === 1 ) {
        existingAngle = angleCalc( existingAngle, 90 );
        turnArray.push( 0 );
    } else {
        existingAngle = angleCalc( existingAngle, -90 );
        turnArray.push( 1 );
    }
    
    /// Append new coordinate to lineSegments based on Angle rotation ///
    console.log( "Existing angle: " + existingAngle );
    switch ( existingAngle ) {
        case 0:
            lineSegments.push( 10, 0 );
            break;
        case 90:
            lineSegments.push( 0, 10 );
            break;
        case 180:
            lineSegments.push( -10, 0 );
            break;
        case 270:
            lineSegments.push( 0, -10 );
            break;
        default:
            console.log( "Error: nonacceptable angle" );
    }
    console.log( "New LineSegments: " + lineSegments );
    return lineSegments;
    */

}
/// Ensure adjustments are only in 90 degree incriments around a 270 degree unit circle
function angleCalc( existingAngle, newAngle ) {
    /// 270 + 90 = 0 ///
    if ( existingAngle === 270 && newAngle > 0 ) {
        existingAngle = 0;
    }
    /// 0 - 90 = 270 ///
    else if ( ( existingAngle === 0 ) && ( newAngle < 0 ) ) {
        existingAngle = 270;
    } else {
        existingAngle = existingAngle + newAngle;
    }
    return ( existingAngle );
}

export default DragonCurve;