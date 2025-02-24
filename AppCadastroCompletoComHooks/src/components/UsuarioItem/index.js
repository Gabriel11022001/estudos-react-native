import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function UsuarioItem({ nome, email, telefone, urlFotoUsuario, onVisualizarPerfilUsuario, onEditarUsuario, onDeletarUsuario }) {

    return (
        <TouchableOpacity
            style={ styles.cardDadosUsuario }
            onPress={ () => {
                onVisualizarPerfilUsuario()
            } }>
                <Image source={ {
                    uri: urlFotoUsuario
                } } style={ styles.fotoPerfilUsuario } />
                <View style={ styles.containerPossuiDadosUsuario }>
                    <Text>{ nome }</Text>
                    <Text>{ email }</Text>
                    <Text>{ telefone }</Text>
                    <View style={ styles.containerPossuiOperacoes }>
                        <TouchableOpacity onPress={ onEditarUsuario } style={ styles.botaoOperacaoUsuario } >
                            <Ionicon name="pencil" size={ 30 } color="orange" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ onDeletarUsuario } style={ styles.botaoOperacaoUsuario } >
                            <Ionicon name="archive" size={ 30 } color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardDadosUsuario: {
        backgroundColor: "white",
        width: "90%",
        marginStart: "5%",
        marginEnd: "5%",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    fotoPerfilUsuario: {
        width: "100%",
        height: 200,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    containerPossuiDadosUsuario: {
        backgroundColor: "#f1f1f1",
        padding: 20,
        width: "90%",
        height: "auto",
        borderRadius: 20,
        margin: 10
    },
    containerPossuiOperacoes: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    botaoOperacaoUsuario: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20
    }
});