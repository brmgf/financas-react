import React from "react";
import Card from "../components/card";
import FormGroup from "../components/formGroup";
import {withRouter} from 'react-router-dom'

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log('Email: ', this.state.email)
        console.log('Senha: ', this.state.senha)
    }

    preparaCadastro = () => {
        this.props.history.push('/novo-usuario')
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div class="bs-docs-section">
                        <Card title="Login">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="bs-component">
                                        <fieldset>
                                            <FormGroup label="E-mail: *" htmlFor="inputEmailLogin">
                                                <input type="email" value={this.state.email} style={{ margin: '5px 0' }}
                                                    onChange={e => this.setState({ email: e.target.value })}
                                                    className="form-control" id="inputEmailLogin"
                                                    aria-describedby="emailHelp" placeholder="Digite o e-mail" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="inputSenhaLogin">
                                                <input type="password" value={this.state.senha} style={{ margin: '5px 0' }}
                                                    onChange={e => this.setState({ senha: e.target.value })}
                                                    className="form-control" id="inputSenhaLogin" />
                                            </FormGroup>
                                            <button onClick={this.entrar} type="button"
                                                className="btn btn-success" style={{ margin: '10px' }}>
                                                Entrar
                                            </button>
                                            <button onClick={this.preparaCadastro}
                                            type="button" className="btn btn-danger">Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);