import React, { Component }             from 'react';

export default class Button extends Component {
    render() {
        return (
            <>
                <button
                    className="col-6 btn btn-info border border-dark p-1 m-2"
                    onClick={() => this.props.onClick(this.props.name)}
                >
                    {this.props.name}
                </button>
            </>
        )
    }
}