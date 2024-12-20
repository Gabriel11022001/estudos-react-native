import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1, // o elemento vai ocupar todo os espaço disponível do elemento pai
        /**
         * flexDirection: 'row' -> vai alinhar os elementos na vertical, ou seja, um do
         * lado do outro
         * flexDirection: 'column' -> vai alinhar os elemento em formato de coluna, um em baixo
         * do outro
         */
        flexDirection: 'column',
        justifyContent: 'space-between', // alinhar no eixo principal,
        alignItems: 'center' // alinhar no eixo secundário
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoCard: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase'
    }
});

export default estilos;