import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Alerta from './src/components/Alerta/Alerta';
import Botao from './src/components/Botao/Botao';
import Incrementador from './src/components/Incrementador/Incrementador';
import MinMax from './src/components/MinMax/MinMax';
import { PrimeiroComponente, SegundoComponente } from './src/components/Multi/Multi';
import NumeroAleatorio from './src/components/NumeroAleatorio/NumeroAleatorio';

export default function App() {

  const [ escondeTelaLoad, setEscondeTelaLoad ] = useState(false);

  useEffect(() => {
    setEscondeTelaLoad(false);
    const timeout = setTimeout(() => {
      // escondendo a tela de load após 3 segundos
      setEscondeTelaLoad(true);
    }, 3000);
    // console.log(escondeTelaLoad);
    return () => clearTimeout(timeout);
  }, []);

  const telaLoad = () => {
    
    return <View style={ styles.estiloTelaLoad }>
      <Image
      style={ styles.estiloIconeLoad }
      source={ require('./assets/load.gif') } />
    </View>
  };

  const testarConsole = () => {
    console.warn('Testando o console!');
  };

  return (
    /**
     * O SafeAreaView é um componente que equivale a uma div
     * do html, ele adequa o componente de tela 
     * ao android e ao IOS.
     */
    <SafeAreaView style={[ styles.container, { marginTop: getStatusBarHeight() } ]}>
      <StatusBar 
      barStyle='default'
      backgroundColor='rgba(236, 240, 241, 1.0)'
      />
      {/**
       * <Alerta />
        <Text style={ styles.estiloTextoExemplo }>
          Exemplo de componente!
        </Text>
        <PrimeiroComponente />
        <SegundoComponente />
        { escondeTelaLoad === false ? telaLoad() : null }
        <TouchableOpacity
        style={ styles.estilo_botao_teste_console }
        onPress={ testarConsole }>
          <Text style={ styles.estilo_texto_botao_teste }>
            Teste
          </Text>
        </TouchableOpacity>
        <MinMax 
        min={ 10 }
        max={ 20 }
        />
        <NumeroAleatorio min={ 10 } max={ 100 } />
        <Botao />
       */}
       <Incrementador />
    </SafeAreaView>
  );
}

// criando estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  estiloTextoExemplo: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'red',
    marginTop: 20
  },
  estiloTelaLoad: {
    position: 'absolute',
    zIndex: 999999,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(192, 57, 43, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloIconeLoad: {
    width: 70,
    height: 70
  },
  estilo_botao_teste_console: {
    width: '100%',
    backgroundColor: '#00b894',
    padding: 25,
    marginTop: 20,
    shadowColor: '#00b894',
    shadowOpacity: 1,
    elevation: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  estilo_texto_botao_teste: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  }
});
