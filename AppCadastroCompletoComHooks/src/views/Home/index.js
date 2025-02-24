import { Alert, FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";
import usuariosMock from "../../data/usuarios";
import UsuarioItem from "../../components/UsuarioItem";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function Home(props) {

    // const usuarios = usuariosMock;
    const [ usuarios, setUsuarios ] = useState([]);

    // console.log(usuarios);

    const redirecionarTelaVisualizarPerfilUsuario = (idUsuarioVisualizarDados) => {
        console.log("Visualizar os dados cadastrais do usuáiro de id " + idUsuarioVisualizarDados);
    }

    const redirecionarTelaEditarUsuario = (idUsuarioEditar) => {
        props.navigation.navigate("cadastro_usuario", {
            idUsuarioEditar: idUsuarioEditar
        });
    }

    const deletarUsuario = (idUsuarioDeletar) => {
        Alert.alert("Atenção!", "Deseja deletar o usuário?", [
            {
                text: "Sim, deletar",
                onPress: () => {
                    // confirmar a deleção do usuário em questão
                    confirmarDeletarUsuario(idUsuarioDeletar);
                }
            },
            {
                text: "Não",
                onPress: null
            }
        ]);
    }

    const confirmarDeletarUsuario = (idUsuarioDeletar) => {
        console.log("Confirmou a deleção do usuário de id: " + idUsuarioDeletar);
    }

    const buscarUsuarios = async () => {
        console.log("Consultando os usuários...");

        const usuariosString = await AsyncStorage.getItem("usuarios");

        if (usuariosString == null) {
            console.log("Não existem usuários cadastrados na base de dados...");
            setUsuarios([]);
        } else {
            const usuariosArray = JSON.parse(usuariosString);
            console.log(usuariosArray);

            setUsuarios(usuariosArray.sort());
        }

    }

    // buscar usuários quando acessar a tela
    useFocusEffect(
        React.useCallback(() => {
          buscarUsuarios();
        }, [])
    );

    return (
        <SafeAreaView>
            <FlatList
             data={ usuarios }
             renderItem={ ({ item }) => {
                
                return (
                    <UsuarioItem
                        nome={ item.nome }
                        telefone={ item.telefone }
                        email={ item.email }
                        urlFotoUsuario={ "" }
                        onVisualizarPerfilUsuario={ () => {
                            redirecionarTelaVisualizarPerfilUsuario(item.id);
                        } }
                        onEditarUsuario={ () => {
                            redirecionarTelaEditarUsuario(item.id);
                        } }
                        onDeletarUsuario={ () => {
                            deletarUsuario(item.id);
                        } }
                        key={ (usuario) => usuario.id } />
                );
             } } />            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});