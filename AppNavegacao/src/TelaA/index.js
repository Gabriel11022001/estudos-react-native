import { SafeAreaView, StyleSheet, Text } from "react-native";
import BotaoNavegar from "../BotaoNavegar";

const TelaA = (props) => {

    const navegarTelaB = () => {
        console.warn("Navegar para a tela B!");

        // navegar de uma tela para outra
        props.navigation.navigate("telaB");
    }

    return (
        <SafeAreaView style={ estilosTelaA.container }>
            <Text style={ estilosTelaA.estiloTexto }>Tela A</Text>
            <BotaoNavegar navegarTela={ () => {
                navegarTelaB();
            } } 
            telaNavegar="Tela B" />
        </SafeAreaView>
    );
}

const estilosTelaA = StyleSheet.create({
    container: {
        backgroundColor: "red",
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

export default TelaA;