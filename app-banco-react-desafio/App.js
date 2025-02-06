import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function App() {

  const [ nome, setNome ] = useState('');
  const [ idade, setIdade ] = useState(0);
  const [ ehEstudante, setEhEstudante ] = useState(false);
  const [ genero, setGenero ] = useState('Selecione');
  const generos = ['Selecione', 'Masculino', 'Feminino', 'Outro'];

  return (
    <SafeAreaView style={ estilos.container }>
      <ScrollView
        showsVerticalScrollIndicator={ false } >
          <Text style={ estilos.estiloTitulo }>Banco React</Text>
          <Text style={ estilos.estiloTextoLabel }>Informe seu nome:</Text>
          <TextInput
            style={ estilos.estiloCampo }
            value={ nome }
            onChangeText={ (nomeDigitado) => setNome(nomeDigitado) }
            placeholder='Digite o nome...' />
          <Text style={ [ estilos.estiloTextoLabel, { marginTop: 30 } ] }>Informe sua idade:</Text>
          <TextInput
            style={ estilos.estiloCampo } 
            value={ idade }
            onChangeText={ (idadeDigitada) => {
              setIdade(idadeDigitada);
            } }
            placeholder='Digite a idade...' />
          <View style={ estilos.estiloContainerSelecionarEhEstudante } >
            <Text>Você é estudante?</Text>
            <Switch
              style={ { marginStart: 20 } }
              value={ ehEstudante } 
              thumbColor='#ff4757'
              onValueChange={ (novoStatusEhEstudante) => {
                console.log(novoStatusEhEstudante);
                setEhEstudante(novoStatusEhEstudante);
              } } />
          </View>
          <Picker
            selectedValue={ genero }
            onValueChange={ (valorSelecionado, indiceValorSelecionad) => {
              console.log(valorSelecionado);
              console.log(indiceValorSelecionad);
              setGenero(valorSelecionado);
            } } >
              { generos.map((genero, indiceGenero) => {

                return (
                  <Picker.Item value={ genero } key={ indiceGenero } label={ genero.toUpperCase() } />
                );
              }) }
          </Picker>
      </ScrollView>
    </SafeAreaView>    
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6'
  },
  estiloTitulo: {
    color: '#ff4757',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 100,
    textTransform: 'uppercase',
    marginBottom: 30
  },
  estiloTextoLabel: {
    color: '#ff4757',
    fontWeight: 'bold',
    fontSize: 20,
    marginStart: 20
  },
  estiloCampo: {
    width: '90%',
    marginStart: '5%',
    height: 70,
    marginEnd: '5%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff4757'
  },
  estiloContainerSelecionarEhEstudante: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  }
});