import React, { Component }                 from 'react';
import Label                                from './Label.jsx'

export default class Exercicio2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0
        }
    }

    move(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div
                onMouseMove={(event) => {this.move(event)}}
                style={{height: '90%', width: '100%', position: 'absolute'}}
            >
                <Label
                    valueX={this.state.x}
                    valueY={this.state.y}
                />
            </div>
        )
    }
}