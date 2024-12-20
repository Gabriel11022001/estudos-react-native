import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AreaApresentarDadosDigitados from "./components/AreaApresentarDadosDigitados";

export default function App() {

  const [ nomeCompleto, setNomeCompleto ] = useState('');
  const [ altura, setAltura ] = useState(0);
  const [ peso, setPeso ] = useState(0);
  const [ telefone, setTelefone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ idade, setIdade ] = useState(0);
  const [ mensagemApresentar, setMensagemApresentar ] = useState('');

  useEffect(() => {
    
  }, [
    nomeCompleto,
    altura,
    peso,
    telefone,
    email,
    idade
  ]);

  const apresentarDadosDigitados = () => {
    
    if (nomeCompleto.trim() == "") {
      alert("Informe o nome!");
    } else if (nomeCompleto.length < 3) {
      alert("O nome precisa ter no mínimo 3 caracteres!");
    } else if (telefone.trim() == "") {
      alert("Informe o telefone!");
    } else if (email.trim() == "") {
      alert("Informe o e-mail!");
    } else if (peso <= 0) {
      alert("Informe o peso!");
    } else if (altura <= 0) {
      alert("Informe a altura!");
    } else if (idade <= 0) {
      alert("Informe a idade!");
    } else {
      const dadosUsuarioApresentar = `
      Nome: ${ nomeCompleto }\n
      Telefone: ${ telefone }\n
      E-mail: ${ email }\n
      Idade: ${ idade }\n
      Peso: ${ peso }\n
      Altura: ${ altura }`;
      
      alert(dadosUsuarioApresentar);
    }

  }

  return (
    <ScrollView style={ styles.estiloScrollView }>
      <View>
        <Text style={ styles.estiloTitulo }>Campos do formulário</Text>
        {
          /**
           * o componente que representa os campos que podem receber
           * dados é o TextInput
           * placeholder -> hint do campo
           * value -> valor que o campo vai controlar
           * onChangeText -> callback invocado sempre que algum caracter é digitado no campo
           */
        }
        <TextInput
          style={ styles.estiloCampo }
          placeholder="Digite o seu nome..."
          value={ nomeCompleto }
          onChangeText={ (nomeCompletoDigitado) => setNomeCompleto(nomeCompletoDigitado) } />
        <TextInput
          style={ styles.estiloCampo }
          placeholder="Digite seu peso..."
          value={ peso }
          onChangeText={ (pesoDigitado) => setPeso(pesoDigitado) } />
        <TextInput
          style={ styles.estiloCampo }
          placeholder="Digite sua altura..."
          value={ altura }
          onChangeText={ (alturaDigitada) => setAltura(alturaDigitada) } />
        <TextInput
          style={ styles.estiloCampo }
          placeholder="Digite seu telefone..."
          value={ telefone }
          onChangeText={ (telefoneDiigtado) => setTelefone(telefoneDiigtado) } />
        <TextInput
          style={ styles.estiloCampo }
          placeholder="Digite seu e-mail..."
          value={ email }
          onChangeText={ (emailDigitado) => setEmail(emailDigitado) } />
        <TextInput
          style={ styles.estiloCampo }
          placeholder="Digite sua idade..."
          value={ idade }
          onChangeText={ (idadeDigitada) => setIdade(idadeDigitada) } />
        <AreaApresentarDadosDigitados
          nomeCompleto={ nomeCompleto }
          telefone={ telefone }
          email={ email }
          peso={ peso }
          altura={ altura }
          idade={ idade } />
        { /**
         * eu posso utilizar tanto o Button como o TouchableOpacity,
         * mas é melhor utilizar o TouchableOpacity, pois ele é personalizavel,
         * o Button não
         * ===========================================================
         * Button:
         *  title -> definir o texto do botão
         *  onPress -> callback para tratar o evento de clique
         *  do botão e recebe uma função anônima como parâmetro
         * ===========================================================
         * 
         * */ }
        <Button title="Apresentar valores" onPress={ () => {
          console.log("Clicou no botão!");
          console.log("Nome informado: " + nomeCompleto);
          console.log("Telefone: " + telefone);
          console.log("E-mail: " + email);
          console.log("Idade: " + idade);
          console.log("Altura: " + altura);
        } } />
        <TouchableOpacity
          style={ {
            width: '90%',
            margin: 20,
            backgroundColor: 'red',
            padding: 30,
            borderRadius: 20
          } } 
          onPress={ () => {
            apresentarDadosDigitados();
          } }>
            <Text style={ { color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' } }>Apresentar dados</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  estiloScrollView: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  estiloTitulo: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 100
  },
  estiloCampo: {
    backgroundColor: 'white',
    padding: 20,
    height: 70,
    borderRadius: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: 'rgba(189, 195, 199, 1.0)',
    fontSize: 18
  }
});