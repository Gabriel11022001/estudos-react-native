import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Botao(props) {

    return <TouchableOpacity style={ styles.botao } onPress={ () => {
        props.onClickBotao();
    } } >
        <Text style={ styles.textoBotao }>{ props.textoBotao }</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    botao: {
        width: "90%",
        marginStart: "5%",
        marginEnd: "5%",
        marginTop: 20,
        backgroundColor: "red",
        borderRadius: 10,
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    textoBotao: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
});