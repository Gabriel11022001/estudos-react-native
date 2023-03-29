import { Text, View } from "react-native";

export default (parametros) => {

    const verificarValor = (min, max) => {
        
        if (min < max) {

            return <Text>O valor { min } é menor que { max }</Text>
        } else if (min > max) {

            return <Text>O valor { min } é maior que { max }</Text>
        } else {

            return <Text>Os valores { min } e { max } são iguais!</Text>
        }
        
    };

    return (
        <View marginTop={ 20 } >
            { verificarValor(parametros.min, parametros.max) }
        </View>
    );
};