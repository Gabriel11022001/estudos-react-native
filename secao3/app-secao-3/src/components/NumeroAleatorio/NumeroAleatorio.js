import { StyleSheet, Text } from "react-native";

export default (parametros) => {

    // parametros.min = 10000
    // parametros.max = 20000
    /**
     * O exemplo acima não funciona pois o objeto "parametros"
     * é um objeto somente leitura, ou seja, eu não consigo alterar
     * o valor de suas propriedades, eu só consido fazer isso se eu 
     * realizar a atribuição dos valores das propriedades do mesmo
     * a variáveis ou constantes
     */
    const gerarNumeroAleatorio = (valorMinimo, valorMaximo) => {

        if (valorMinimo > valorMaximo) {

            return 'O válor mínimo deve ser menor que o valor máximo!';
        } else if (valorMinimo === valorMaximo) {

            return 'O valor mínimo e o valor máximo são iguais!';
        } else {
            let min = Math.ceil(valorMinimo);
            let max = Math.floor(valorMaximo);
            let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

            return `${numeroAleatorio}`;
        }

    };

    return (
        <Text style={ styles.estilo_numero_aleatorio }>
            { gerarNumeroAleatorio(parametros.min, parametros.max) }
        </Text>
    );
};

const styles = StyleSheet.create({
    estilo_numero_aleatorio: {
        fontSize: 18,
        color: 'orange',
        fontWeight: 'bold',
        marginTop: 20,
        backgroundColor: 'red',
        width: '80%',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        elevation: 20,
        shadowOpacity: 1
    }
});