import React, { Component } from 'react';

class DragonCurve extends Component {
    render() {
        var animateCurve;
        return (
            {animateCurve = (<CurveAnimate width="500" height="500"/>)},
            <div>
                <div className="Dragon Curve Animation">
                    {setInterval(animateCurve, 1000)}
                </div>
            </div>
        );
    }
}
var pathString = "M250 250 V350 H 350";
var lineSegments;

var lineSegments = [0,0,0,1];
var lineCount = (lineSegments.length/2 - 1);
var lineCoord = "0,0 0,1";
var existingAngle = 0;
class CurveAnimate extends Component {
    lineSegments = updateLine(existingAngle, lineSegments, lineCount);
    lineCount = lineCount + 1;
    lineCoord = lineCoord + lineSegments[(lineCount/2)] + "," + lineSegments[((lineCount/2)+1)] + " ";
    render() {
        console.log("Existing Angle: "+existingAngle);
        console.log("Segments: "+lineSegments);
        console.log("Count: "+lineCount);
        return (
            <svg width={ this.props.width } height={ this.props.height } >
             <polyline points={lineCoord}
                fill="transparent" stroke="red" transform="translate(250 250) rotate(180) scale(10)"strokeWidth="4" />
            </svg>
        );
    }
}

/*
existingAngle: direction the lastest line is facing
lineSegments: array of existing lines
lineCount: number of existing lines
return: updated array of lineSegments
*/
function updateLine(existingAngle, lineSegments, lineCount){
    /// If lineCount is even or 1 ///
    if((lineCount % 2) == 0 || lineCount == 1){
        existingAngle = angleCalc(existingAngle, 90);
    }else{
        existingAngle = angleCalc(existingAngle,-90);
    }
     /// Append new coordinate to lineSegments based on Angle rotation ///
     switch(existingAngle){
        case 0:
            lineSegments.push(1, 0);
            break;
        case 90:
            lineSegments.push(0, 1);
            break;
        case 180:
            lineSegments.push(-1, 0);
            break;
        case 270:
            lineSegments.push(0, -1);
            break;
        default:
            console.log("Error: nonacceptable angle");
    }
    return lineSegments;
}
/*
existingAngle: direction the lastest line is facing
newAngle: angle adjustment for the next line
return: updated angle
*/
function angleCalc(existingAngle, newAngle){
    /// 270 + 90 = 0 ///
    if (existingAngle == 270 && newAngle > 0){
        existingAngle = 0;
    }
    /// 0 - 90 = 270 ///
    else if ((existingAngle == 0) && (newAngle < 0)){
        existingAngle = 270;
    } else {
        existingAngle = existingAngle + newAngle;
    }
    return(existingAngle);
}

export default DragonCurve;