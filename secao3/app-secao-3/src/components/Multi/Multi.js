import { StyleSheet, Text, View } from "react-native";

// módulos do js
export function PrimeiroComponente() {

    return (
        <View style={ styles.container_primeiro_componente }>
            <Text style={ styles.texto_primeiro_componente }>Primeiro componente</Text>
        </View>
    );
};

export function SegundoComponente() {

    return (
        <View style={ styles.container_segundo_componente }>
            <Text style={ styles.texto_segundo_componente }>Segundo componente</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container_primeiro_componente: {
        width: '80%',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e84393',
        shadowColor: 'red',
        elevation: 10,
        shadowOpacity: 1,
        marginTop: 20
    },
    texto_primeiro_componente: {
        color: '#fff',
        fontSize: 18
    },
    container_segundo_componente: {
        width: '80%',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eb2f06',
        shadowColor: 'red',
        elevation: 10,
        shadowOpacity: 1,
        marginTop: 20
    },
    texto_segundo_componente: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase'
    }
});