import { NavigationContainer } from "@react-navigation/native";
import TelaA from "../TelaA";
import TelaB from "../TelaB";
import TelaC from "../TelaC";
import NavegacaoStack from "./NavegacaoStack";
import NavegacaoTab from "./NavegacaoTab";
import NavegacaoDrawer from "./NavegacaoDrawer";

const Navegacao = () => {

    const telasApp = [
        {
            nomeTela: "telaA",
            componenteTela: TelaA,
            tituloTela: "Tela A"
        },
        {
            nomeTela: "telaB",
            componenteTela: TelaB,
            tituloTela: "Tela B"
        },
        {
            nomeTela: "telaC",
            componenteTela: TelaC,
            tituloTela: "Tela C"
        }
    ];

    return (
        // toda a minha navegação deve estar no escopo desse componente NavigationContainer
        <NavigationContainer>
            { /** <NavegacaoStack telas={ telasApp } /> */ }
            <NavegacaoTab telas={ telasApp } />
            { /** <NavegacaoDrawer telas={ telasApp } /> */ }
        </NavigationContainer>
    );
}

export default Navegacao;