import { useState } from 'react'
import ApresentaFotoSteveJobs from './components/ApresentaFotoSteveJobs/index,'

const { View, Text, Image, Button, StyleSheet } = require('react-native')

// todo componente no react native é uma função
// posso atuar com uma arrow function
/* const App = () => {

  return (
    <View>
      <Text>Primeiro projeto</Text>
    </View>
  )
} */

// export default App

// ou também posso trabalhar com funções padrão mesmo
function App() {

  // states -> são mutáveis e podem ser modificadas dinamicamente
  // props -> são estáticas e eu não posso mudar
  // useState -> hook para controlar estados dos componentes
  const [apresentarTexto, setApresentarTexto] = useState(true)

  return (
    // View -> componente que representa um container
    <View style={{
      flex: 1, // flex: 1 -> o componente vai ocupar o espaço total da tela
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      { /** Text -> componente que representa um texto */}
      <Text style={{ color: 'red', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
        Primeiro app React Native!
      </Text>
      <Text
        style={{
          color: 'blue',
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: 20
        }}>Gabriel Rodrigues dos Santos</Text>
      { /** 
       * componente que representa uma imagem
       * eu posso passar propriedades para os componentes, por exemplo, a imagem
       * possui uma propertie que é o source, também possui o style, etc... */ }
      <Image
        // propriedade para adicionar a url da imagem
        source={{
          uri: 'https://th.bing.com/th/id/OIP.ccyhaHNTJXLjkqVqVJJY5QHaE_?rs=1&pid=ImgDetMain'
        }}
        style={{
          width: '90%',
          height: 300,
          marginTop: 20
        }} />
      { /** utlizando um componente que eu criei, passando uma propertie para ele */}
      <ApresentaFotoSteveJobs urlFoto='https://th.bing.com/th/id/OIP.ccyhaHNTJXLjkqVqVJJY5QHaE_?rs=1&pid=ImgDetMain' />
      {
        apresentarTexto ? <Text>Apresentar texto state</Text> : null
      }
      { /** componente que representa um botão */}
      <Button
        title='Apresentar ou esconder texto'
        onPress={() => {
          // alterar o state apresentarTexto
          setApresentarTexto(!apresentarTexto)
        }} />
      <Text style={estilo.estiloTexto}>Texto de teste de estilo</Text>
    </View>
  )
}

// agrupando os estilos
const estilo = StyleSheet.create({
  estiloTexto: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  }
})

export default App