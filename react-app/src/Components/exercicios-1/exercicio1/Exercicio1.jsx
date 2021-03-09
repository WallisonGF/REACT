import React, { Component }             from 'react';
import Button                           from './Button.jsx';
import Label                            from './Label.jsx';

export default class Exercicio1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            labelNameButton: "Nenhum",
        }
    }

    handleClick = (name) => {
        this.setState({
            labelNameButton: name,
        })
    }
    render() {
        return (
            <center className="m-5 p-5">
                <Label
                    nameButton={this.state.labelNameButton}
                />
                <Button name="Botão 1" onClick={this.handleClick} />
                <Button name="Botão 2" onClick={this.handleClick} />
                <Button name="Botão 3" onClick={this.handleClick} />
                <Button name="Botão 4" onClick={this.handleClick} />
            </center>
        )
    }
}