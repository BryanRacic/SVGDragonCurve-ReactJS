import React, { Component } from 'react';

class DragonCurve extends Component {
    render() {
        console.log( "DragonCurve.js" );
        return (
            /*
            <svg>
                <polyline points="20,20 40,25 60,40 80,120 120,140 200,180"
                    fill="transparent" stroke="red" strokeWidth="4" />
            </svg>
            */
            < CurveAnimate width="500" height="500" counter="0" />
        );
    }
}

var lineSegments = [ 0, 0, 0, 10 ];
var lineCount = ( lineSegments.length / 2 - 1 );
var lineCoord = "0,0 0,10";
var existingAngle = 0;
var tick = 0;
function CurveAnimate() {
    lineSegments = updateLine( existingAngle, lineSegments, lineCount );
    lineCount = lineCount + 1;
    console.log( "Count: " + lineCount );
    console.log( "line coord a: " + lineSegments[ lineCount ] );
    console.log( "line coord b: " + lineSegments[ ( lineCount + 1 ) ] );
    lineCoord = lineCoord + " " + lineSegments[ lineCount ] + "," + lineSegments[ lineCount + 1 ];
    console.log( "lineCoord: " + lineCoord );
    tick = tick + 1;
    return (
        <div>
            <h1>{ tick }</h1>
            < svg >
                <polyline points={ lineCoord }
                    fill="transparent" stroke="red" transform="translate(250 250) rotate(180) scale(10)" strokeWidth="4" />
            </svg >
        </div>
    );
}

/*
existingAngle: direction the lastest line is facing
lineSegments: array of existing lines
lineCount: number of existing lines
return: updated array of lineSegments
*/
var turnArray = [];
function updateLine( existingAngle, lineSegments, lineCount ) {
    console.log( "Update Line" );
    console.log( "Line Count: " + lineCount );
    console.log( "Turn Array: " + turnArray );
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
}
/*
existingAngle: direction the lastest line is facing
newAngle: angle adjustment for the next line
return: updated angle
*/
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