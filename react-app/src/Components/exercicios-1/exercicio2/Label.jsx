import React,{ Component }          from 'react';

export default class Label extends Component {
    render() {
        return (
            <h1 className="mt-5 p-5">
                <center>
                    Current Mouse Position: X: {this.props.valueX}, Y: {this.props.valueY}
                </center>
            </h1>
        );
    }
}