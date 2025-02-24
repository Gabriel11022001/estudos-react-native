import { NavigationContainer } from "@react-navigation/native";
import NavegacaoStack from "./navegacaoStack";
import Home from "../views/Home";
import CadastroUsuario from "../views/CadastroUsuario";

export default function Navegacao() {

    // telas do app
    const telas = [
        {
            nomeTela: "home",
            componenteTela: Home,
            tituloTela: "Home"
        },
        {
            nomeTela: "cadastro_usuario",
            componenteTela: CadastroUsuario,
            tituloTela: "Cadastro de usuário"
        }
    ];

    return (
        <NavigationContainer>
            <NavegacaoStack telas={ telas } />
        </NavigationContainer>
    );
}