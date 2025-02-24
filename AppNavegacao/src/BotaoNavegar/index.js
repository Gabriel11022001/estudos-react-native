import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BotaoNavegar(props) {

    return <TouchableOpacity
               style={ estiloBotaoNavegar.estiloBtnNavegar }
               onPress={ props.navegarTela } >
        <Text style={ estiloBotaoNavegar.estiloTextoBotaoNavegar }>Navegar para a tela { props.telaNavegar }</Text>
    </TouchableOpacity>
}

const estiloBotaoNavegar = StyleSheet.create({
    estiloBtnNavegar: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        marginStart: "5%",
        marginEnd: "5%",
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
        height: 60
    },
    estiloTextoBotaoNavegar: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        textTransform: "uppercase"
    }
});