import { useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

export default () => {

    const [ contador, setContador ] = useState(0);

    const incrementarValor = () => {
        let novoValor = contador + 1;
        setContador(novoValor);
    }
    
    return (
        <View style={ styles.estilo_container_incrementador }>
            <Text style={ styles.estilo_texto_contador }>{ contador }</Text>
            <Button
            title="Incrementar"
            onPress={ incrementarValor } />
        </View>
    );
};

const styles = StyleSheet.create({
    estilo_container_incrementador: {
        width: '90%',
        marginTop: 20,
        backgroundColor: 'gray',
        padding: 20,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10
    },
    estilo_texto_contador: {
        color: 'orange',
        backgroundColor: 'black',
        width: '100%',
        padding: 15,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 30
    }
});