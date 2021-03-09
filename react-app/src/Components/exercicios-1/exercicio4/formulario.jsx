import React, { useState }              from 'react';
import Navbar                           from './navbar.jsx';
import { Button,
        Popover, 
        PopoverHeader, 
        PopoverBody }                   from 'reactstrap';

function Formulario() {
    const [valueUser, setValueUser] = useState('');
    const [valuePass, setValuePass] = useState('');
    const [arrayLogins, setArrayLogins] = useState([{ user: 'Wallison', password: 'admin' }]);
    const [cadastrar, setCadastrar] = useState();
    const [usuario, setUsuario] = useState([]);

    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    const deslogar = () => { setUsuario({ user: "", password: "" }) };

    return (
        <>
            <Navbar
                userName={usuario.user}
                deslogar={deslogar}
            />
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (cadastrar) {
                        const arrayAntes = arrayLogins;
                        const novoArray = {
                            user: valueUser,
                            password: valuePass,
                        }
                        const arrayFinal = [...arrayAntes, novoArray];
                        setArrayLogins(arrayFinal);
                    } else {
                        let existeUser = arrayLogins.filter((element) => (element.user === valueUser && element.password === valuePass));

                        existeUser.length !== 0
                            ? setUsuario({ user: valueUser, password: valuePass })
                            : alert("Cadastre-se");
                    }
                }}
            >
                <div className="container-fluid">
                    <div className="form-group m-5">
                        <label for="lblUser">Usuário:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lblUser"
                            onChange={(event) => setValueUser(event.target.value)}
                        />
                    </div>
                    <div className="form-group m-5">
                        <label for="lblPassword">Senha:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="lblPassword"
                            onChange={(event) => setValuePass(event.target.value)}
                        />
                    </div>
                    <div className="form-group m-5">
                        <Button id="fpassword" type="button">
                            Esqueceu a senha?
                        </Button>
                        <Popover placement="top" isOpen={popoverOpen} target="fpassword" toggle={toggle}>
                            <PopoverHeader>-- Usuário Padrão --</PopoverHeader>
                            <PopoverBody>Login: Wallison<br />Senha: admin</PopoverBody>
                        </Popover>

                        <button className="btn btn-success btn-block"
                            onClick={() => setCadastrar(false)}
                        >
                            ENTRAR
                        </button>

                        <button className="btn btn-success btn-block"
                            onClick={() => setCadastrar(true)}
                        >
                            CADASTRAR-SE
                        </button>
                    </div>
                </div>
            </form >
        </>
    );
}

export default Formulario;