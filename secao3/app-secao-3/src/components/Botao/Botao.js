import { Fragment, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

export default () => {

    function executarQuandoClicarPrimeiroBotao() {
        console.warn('Primeiro botão foi clicado!');       
    }

    const executarQuandoClicarSegundoBotao = () => {
        console.warn('Segundo botão foi clicado!');
    }

    return (
        /**
         * - O componente que utilizamos para um botão é o Button
         * - O componente <Button /> não pode ser estilizado
         * - Se que quero criar um botão estilizavel, eu devo utilizar
         * o 
         */
        <Fragment>
            <Button
            title="Primeiro botão"
            onPress={ executarQuandoClicarPrimeiroBotao } />
            <TouchableOpacity
            style={ styles.estilo_segundo_botao }
            onPress={ executarQuandoClicarSegundoBotao } >
                <Text style={ styles.estilo_texto_segundo_botao }>
                    Segundo botão
                </Text>
            </TouchableOpacity>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    estilo_segundo_botao: {
        marginTop: 20,
        width: '90%',
        padding: 15,
        backgroundColor: '#ff7f50',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderColor: '#ff6348',
        borderWidth: 2
    },
    estilo_texto_segundo_botao: {
        fontSize: 20,
        color: '#fff'
    }
});