import { StyleSheet, Text, View } from "react-native";

export default function Alerta() {
    
    return (
        <View style={ styles.estiloAlerta }>
            <Text style={ styles.estiloMensagemAlerta }>
                Mensagem de alerta!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    estiloAlerta: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        padding: 20,
        backgroundColor: 'rgba(22, 160, 133, 1.0)',
        borderRadius: 6,
        shadowColor: '#000',
        elevation: 10,
        marginTop: 30
    },
    estiloMensagemAlerta: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    }
});