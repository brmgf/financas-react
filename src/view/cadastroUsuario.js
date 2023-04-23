import React from "react";
import Card from "../components/card";
import FormGroup from "../components/formGroup";
import { withRouter } from "react-router-dom";

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {
        console.log('Nome: ', this.state.nome)
        console.log('Email: ', this.state.email)
        console.log('Senha: ', this.state.senha)
        console.log('Senha repetida: ', this.state.senhaRepeticao)
    }

    cancelar = () => {
        this.props.history.push("/login");
    }

    render() {
        return (
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" class="form-control" id="inputNome"
                                    name="nome" placeholder="Digite o nome" style={{ margin: '5px 0' }}
                                    onChange={e => this.setState({ nome: e.target.value })}>
                                </input>
                            </FormGroup>
                            <FormGroup label="E-mail: *" htmlFor="inputEmail">
                                <input type="email" class="form-control" id="inputEmail"
                                    name="email" placeholder="Digite o e-mail" style={{ margin: '5px 0' }}
                                    onChange={e => this.setState({ email: e.target.value })}>
                                </input>
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" class="form-control" id="inputSenha"
                                    name="senha" style={{ margin: '5px 0' }}
                                    onChange={e => this.setState({ senha: e.target.value })}>
                                </input>
                            </FormGroup>
                            <FormGroup label="Repita a senha: *" htmlFor="inputSenhaRepetida">
                                <input type="password" class="form-control" id="inputSenhaRepetida"
                                    name="senhaRepetida" style={{ margin: '5px 0' }}
                                    onChange={e => this.setState({ senhaRepeticao: e.target.value })}>
                                </input>
                            </FormGroup>
                            <button type="button" className="btn btn-success" style={{ margin: '10px' }}
                                onClick={this.cadastrar}>
                                Salvar
                            </button>
                            <button type="button" className="btn btn-danger"
                                onClick={this.cancelar}>
                                Voltar
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario);