import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PessoaItem({ nome, email, id }) {

    return (
        <TouchableOpacity
            style={ estilo.cardPessoaItem } 
            onPress={ () => {
                console.log(nome, email, id);
            } } >
            <Text>Id: { id }</Text>
            <Text>Nome: { nome }</Text>
            <Text>E-mail: { email }</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    cardPessoaItem: {
        backgroundColor: 'white',
        width: '90%',
        marginStart: '5%',
        marginEnd: '5%',
        borderRadius: 30,
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 1
    }
});