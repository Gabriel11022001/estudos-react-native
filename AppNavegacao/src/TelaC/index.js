import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const TelaC = (props) => {

    // acessar os parâmetros passados -> props.route.params
    const parametrosVieramTelaB = props.route.params ?? "Não foram passados parâmetros para a tela C!";

    const apresentarDadosVieramTelaB = () => {
        console.log(parametrosVieramTelaB);
    }

    useEffect(() => {
        apresentarDadosVieramTelaB();
    }, []);

    return (
        <SafeAreaView style={ estilosTelaC.container }>
            <Text style={ estilosTelaC.estiloTexto }>Tela C</Text>
        </SafeAreaView>
    );
}

const estilosTelaC = StyleSheet.create({
    container: {
        backgroundColor: "orange",
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

export default TelaC;