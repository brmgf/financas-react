import React from "react";

import {Route, Switch, HashRouter} from 'react-router-dom'
import Login from "../view/login";
import CadastroUsuario from "../view/cadastroUsuario";

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/novo-usuario" component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas;