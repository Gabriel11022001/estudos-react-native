import { StyleSheet, Text, View } from "react-native";

export default function AreaApresentarDadosDigitados({ nomeCompleto, peso, altura, idade, email, telefone }) {
    
    return (
        <View style={ styles.container }>
            <Text style={ styles.estiloTextoDado }>Nome completo: { nomeCompleto }</Text>
            <Text style={ styles.estiloTextoDado }>E-mail: { email }</Text>
            <Text style={ styles.estiloTextoDado }>Telefone: { telefone }</Text>
            <Text style={ styles.estiloTextoDado }>Peso: { peso }</Text>
            <Text style={ styles.estiloTextoDado }>Altura: { altura }</Text>
            <Text style={ styles.estiloTextoDado }>Idade: { idade }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(189, 195, 199, 1.0)',
        borderRadius: 20
    },
    estiloTextoDado: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10
    }
});