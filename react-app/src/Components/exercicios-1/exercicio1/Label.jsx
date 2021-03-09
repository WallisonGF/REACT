import React, { Component }         from 'react';

export default class Label extends Component {
  render() {
    return (
      <h1>Selecionado: {this.props.nameButton}</h1>
    )
  }
}
