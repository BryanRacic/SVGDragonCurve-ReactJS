import React, { Component } from 'react';

class DragonCurve extends Component {
    render() {
        return (
            <div>
                <div className="Dragon Curve Animation">
                    <CurveAnimate />
                </div>
            </div>
        );
    }
}

class CurveAnimate extends Component {
    render() {
        return (
            <svg width={ this.props.width } height={ this.props.height } >
                <path id="lineSegments" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent" />
            </svg>
        );
    }
}

export default DragonCurve;