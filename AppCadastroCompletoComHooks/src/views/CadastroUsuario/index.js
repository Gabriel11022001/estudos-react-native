import { useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import Botao from "../../components/Botao/index,";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroUsuario(props) {

    const [ nome, setNome ] = useState("");
    const [ telefone, setTelefone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ genero, setGenero ] = useState("");
    
    const validarDadosUsuario = async () => {
        let ok = true;
        const nomeUsuario = nome.trim();
        const telefoneUsuario = telefone.trim();
        const emailUsuario = email.trim();
        
        if (nomeUsuario == "") {
            ok = false;
            apresentarAlertaErro("Informe o nome do usuário!");
        } else if (nomeUsuario.length < 3) {
            ok = false;
            apresentarAlertaErro("O nome do usuário deve possuir pelo menos três caracateres!");
        } else if (telefoneUsuario == "") {
            ok = false;
            apresentarAlertaErro("Informe o telefone do usuário!");
        } else if (emailUsuario == "") {
            ok = false;
            apresentarAlertaErro("Informe o e-mail do usuário!");
        } else {
            const jaExisteOutroUsuarioCadastradoMesmoEmail = await validarJaExisteUsuarioCadastradoEmailInformado();

            if (jaExisteOutroUsuarioCadastradoMesmoEmail) {
                ok = false;
                apresentarAlertaErro("Já existe outro usuário cadastrado com o mesmo e-mail!");
            }

        }

        return ok;
    }

    // validar se já existe outro usuário cadastrado com o mesmo e-mail
    const validarJaExisteUsuarioCadastradoEmailInformado = async () => {
        let jaExiste = false;

        const usuarios = await AsyncStorage.getItem("usuarios");

        if (usuarios != null) {
            const usuariosArrays = JSON.parse(usuarios);

            for (let contador = 0; contador < usuariosArrays.length; contador++) {

                console.log(usuariosArrays[ contador ].email);
                console.log("E-mail testar: " + email);

                if (usuariosArrays[ contador ].email === email.trim()) {
                    console.log("Já existe outro usuário cadastrado com o e-mail " + email);
                    jaExiste = true;
                }

            }

        }

        console.log("Já existe? " + jaExiste ? "Sim" : "Não");

        return jaExiste;
    }

    const cadastrarUsuario = async () => {

        if (await validarDadosUsuario()) {
            // salvar dados dos usuários na assyncstorage
            const usuariosCadastradosString = await AsyncStorage.getItem("usuarios");
            const usuarioCadastrar = {
                nome: nome,
                telefone: telefone,
                email: email,
                genero: genero
            };

            if (usuariosCadastradosString == null) {
                usuarioCadastrar.id = 1;
                const usuarios = [ usuarioCadastrar ];
                await AsyncStorage.setItem("usuarios", JSON.stringify(usuarios));
            } else {
                const usuarios = JSON.parse(usuariosCadastradosString);
                const ultimoUsuario = usuarios[ usuarios.length - 1 ];
                usuarioCadastrar.id = ultimoUsuario.id + 1;

                usuarios.push(usuarioCadastrar);
                await AsyncStorage.setItem("usuarios", JSON.stringify(usuarios));
            }

            Alert.alert("Sucesso", "Usuário cadastrado com sucesso!", [
                {
                    style: "default",
                    text: "Ok",
                    onPress: () => props.navigation.navigate("home")
                }
            ]);
        }

    }

    const apresentarAlertaErro = (erro) => {
        Alert.alert("Atenção", erro);
    }

    return <SafeAreaView>
        <ScrollView>
            <Text style={ styles.titulo }>Cadastro de usuários</Text>
            <Text style={ styles.labelCampo } >Nome completo*</Text>
            <TextInput
             style={ styles.estiloCampo }
             value={ nome }
             onChangeText={ (novoNomeDigitado) => setNome(novoNomeDigitado) }
             placeholder="Digite o nome do usuário..." />
            <Text style={ styles.labelCampo }>Telefone*</Text>
            <TextInput
             style={ styles.estiloCampo }
             value={ telefone }
             onChangeText={ (novoTelefoneDigitado) => setTelefone(novoTelefoneDigitado) }
             placeholder="Digite o telefone do usuário..."
             keyboardType="phone-pad" />
            <Text style={ styles.labelCampo }>E-mail*</Text>
            <TextInput
             style={ styles.estiloCampo }
             value={ email }
             onChangeText={ (novoEmailDigitado) => setEmail(novoEmailDigitado) }
             placeholder="Digite o e-mail do usuário..."
             keyboardType="email-address" />
            <Botao textoBotao="Salvar usuário" onClickBotao={ async () => {
                await cadastrarUsuario();
            } } />
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    titulo: {
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginTop: 40,
        marginBottom: 40
    },
    labelCampo: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        marginStart: "5%",
        marginTop: 20
    },
    estiloCampo: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "90%",
        marginStart: "5%",
        marginEnd: "5%",
        padding: 20,
        height: 60,
        marginTop: 5,
        color: "black",
        fontSize: 16
    }
});