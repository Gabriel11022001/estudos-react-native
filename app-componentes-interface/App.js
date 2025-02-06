import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import PessoaItem from "./components/PessoaItem";
import { Picker } from "@react-native-picker/picker";

export default function App() {

  const [ pessoas, setPessoas ] = useState([
    {
      id: 1,
      nome: "Gabriel",
      email: "gabriel@teste.com"
    },
    {
      id: 2,
      nome: "Pedro",
      email: "pedro@teste.com"
    },
    {
      id: 3,
      nome: "Eduardo",
      email: "eduardo@teste.com"
    },
    {
      id: 4,
      nome: "Felipe",
      email: "felipe@teste.com"
    }
  ]);

  const [ generoSelecionado, setGeneroSelecionado ] = useState('Selecione');
  const generos = ['Selecione', 'Masculino', 'Feminino', 'Outro'];
  const [ statusSwitch, setStatusSwitch ] = useState(false);

  const apresentarDadosPessoa = ({ id, nome, email }) => {

    return (
      <View>
        <Text>Nome: { nome }</Text>
        <Text>E-mail: { email }</Text>
      </View>
    );
  }

  return (
    <View style={ estilos.container } >
      { /**
       * ScrollView -> componente de container que me permite aplicar um scroll
       * na minha interface
       * showsVerticalScrollIndicator -> propertie para esconder a barrinha de rolagem
       * na lateral
       * horizontal={ true } -> apresentar o scroll view na horizontal
       * showsHorizontalScrollIndicator={ false } -> esconder a barrinha de scroll
       *  */ }
      <ScrollView
        /* </View>showsVerticalScrollIndicator={ false } */
        horizontal={ true }
        showsHorizontalScrollIndicator={ false } >
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
        <View style={ estilos.card } ></View>
      </ScrollView>
      { /** 
       * FlatList -> componente de interface que representa uma lista de itens
       * data -> dados da lista
       * renderItem -> apresentar o item da lista
       * keyExtractor -> dado que represenrta a unicidade do item da lista
       *  */ }
      <FlatList
        data={ pessoas }
        renderItem={ ({ item }) => apresentarDadosPessoa(item) }
        keyExtractor={ (pessoa) => pessoa.id } />
      <FlatList
        data={ pessoas }
        renderItem={ ({ item }) => <PessoaItem id={ item.id } nome={ item.nome } email={ item.email } /> }
        keyExtractor={ (pessoa) => pessoa.id } />
      { /** Picker -> componente que representa um selection para o usuário selecionar opções */ }
      <Picker
        selectedValue={ generoSelecionado }
        onValueChange={ (itemValue, itemIndex) => {
          // apresentar o valor do item selecionado no picker
          console.log(itemValue);
          // apresentar o indice do elemento selecionado no picker
          console.log(itemIndex);
          setGeneroSelecionado(itemValue);
        } }>
          { generos.map((generoAtual, indice) => {

            { /** Picker.Item -> componente que representa um item para ser selecionado */ }
            return <Picker.Item key={ indice } value={ generoAtual } label={ generoAtual } />
          }) }
      </Picker>
      { /** componente que representa aquele chave ativado e não ativado */ }
      <Switch
        value={ statusSwitch }
        onValueChange={ (novoStatus) => {
          console.log(novoStatus)
          // setar status
          setStatusSwitch(novoStatus);
        } } />
      <Text>{ statusSwitch ? 'Switch ativo' : 'Switch inativo' }</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  card: {
    width: '200',
    backgroundColor: 'red',
    padding: 20,
    height: 100,
    borderRadius: 30,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 30,
    marginBottom: 30
  }
});