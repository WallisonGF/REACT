import React, { Component }     from 'react';
import FormularioCadastro       from './FormularioCadastro.jsx';
import { Container, 
        Typography }            from "@material-ui/core"

class Exercicio5 extends Component {
    render() {
        return (
            <div className="m-5 p-5">
                <Container component="article" maxWidth="sm">
                    <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
                    <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
                </Container>
            </div>
        );
    }
}

function aoEnviarForm(dados){
    console.log(dados);
}
  
function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default Exercicio5;