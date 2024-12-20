import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import cores from "./cores";
import { useState } from "react";

export default function App() {
  
  const mensagens = [
    "A sorte está ao seu lado.",
    "Grandes mudanças estão a caminho.",
    "Você encontrará a felicidade em pequenos detalhes.",
    "Um amigo verdadeiro é um tesouro raro.",
    "Acredite em si mesmo e todo o resto virá.",
    "A paciência é a chave para o sucesso.",
    "Uma nova oportunidade surgirá em breve.",
    "Você está prestes a fazer uma descoberta importante.",
    "A vida é cheia de surpresas, fique atento.",
    "Hoje é um bom dia para começar algo novo.",
    "O amor está no ar, aproveite o momento.",
    "A perseverança é o caminho para a realização.",
    "A felicidade é uma escolha, faça a sua.",
    "A sabedoria vem com a experiência.",
    "Alguém está pensando em você neste momento.",
    "Acredite que coisas boas estão por vir.",
    "O seu trabalho duro será recompensado.",
    "Você tem o poder de mudar sua vida.",
    "Um sorriso pode mudar o dia de alguém.",
    "Ame-se e os outros também o amarão.",
    "O sucesso é a soma de pequenos esforços."
  ];
  const [ mensagem, setMensagem ] = useState("");
  const [ apresentarBiscoitoAberto, setApresentarBiscoitoAberto ] = useState(false);
  const [ indiceBiscoitoSorteApresentar, setIndiceBiscoitoSorteApresentar ] = useState(0);

  const gerarMensagem = () => {
    
    try {
      let indiceBiscoito = 0;

      do {
        indiceBiscoito = Math.floor(Math.random() * mensagens.length);

        console.log("Indice gerado: " + indiceBiscoito);
      } while(indiceBiscoito === indiceBiscoitoSorteApresentar);

      setIndiceBiscoitoSorteApresentar(indiceBiscoito);
      setMensagem(mensagens[ indiceBiscoitoSorteApresentar ]);

      setApresentarBiscoitoAberto(true);
    } catch (e) {
      console.log(e);

      alert("Erro: " + e);
      
      setApresentarBiscoitoAberto(false);
      setIndiceBiscoitoSorteApresentar(0);
      setMensagem("");
    }

  }

  return <View style={ estilo.container }>
    <Text style={ estilo.estiloTituloBiscoitoSorte }>Biscoito da sorte</Text>
    <Image 
      style={ estilo.estiloImagemBiscoitoSorte }
      source={ apresentarBiscoitoAberto ? require("./assets/biscoito_aberto.png") : require("./assets/biscoito_fechado.png") } />
    <View style={ estilo.containerGerarMensagem }>
      <Text style={ estilo.estiloTextoGerarMensagem } >Clique no botão abaixo para gerar a mensagem</Text>
      <TouchableOpacity 
        style={ estilo.btnGerarMensagem }
        onPress={ () => {
          // gerar a mensagem
          gerarMensagem();
        } } >
        <Text style={ {
          color: 'white',
          textAlign: 'center',
          fontSize: 20,
          textTransform: 'uppercase',
          fontWeight: 'bold'
        } }>Gerar mensagem</Text>
      </TouchableOpacity>
      <Text style={ { color: 'rgba(225, 95, 65, 1.0)', marginTop: 20, textAlign: 'center' } }>
        Mensagem gerada: { mensagem }
      </Text>
    </View>
  </View>
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: cores.corFundoTela
  },
  estiloTituloBiscoitoSorte: {
    color: cores.corTextos,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 100
  },
  estiloImagemBiscoitoSorte: {
    width: "60%",
    height: 200,
    marginTop: 50
  },
  estiloTextoGerarMensagem: {
    color: cores.corTextos,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    fontSize: 18
  },
  btnGerarMensagem: {
    width: "100%",
    padding: 30,
    backgroundColor: "black",
    borderRadius: 20
  },
  containerGerarMensagem: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginTop: 50
  }
});