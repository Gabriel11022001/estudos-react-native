import { SafeAreaView, StyleSheet, Text } from "react-native";
import BotaoNavegar from "../BotaoNavegar";

const TelaB = (props) => {

    function navegarTelaA() {
        console.log("Retornar para a telaA!");
        // navigation.goBack() -> fechar a tela atual retornando para a tela anterior
        props.navigation.goBack();
    }

    function navegarTelaC() {
        console.log("Navegar para a tela C!");
        /**
         * props.navigation.navigate() -> navegar para uma tela
         * primeiro argumento -> nome da tela para onde será redirecionado
         * segundo argumento -> dados que vou passar para a tela para onde estou navegando
         */
        props.navigation.navigate("telaC", {
            nome: "Gabriel Rodrigues dos Santos",
            telefone: "(14) 99877-6543",
            email: "gabriel@teste.com"
        });
    }

    return (
        <SafeAreaView style={ estilosTelaB.container }>
            <Text style={ estilosTelaB.estiloTexto }>Tela B</Text>
            { /** retornar para a tela A */ }
            <BotaoNavegar telaNavegar="Tela A" navegarTela={ navegarTelaA } />
            <BotaoNavegar telaNavegar="Tela C" navegarTela={ navegarTelaC } />
        </SafeAreaView>
    );
}

const estilosTelaB = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    estiloTexto: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default TelaB;