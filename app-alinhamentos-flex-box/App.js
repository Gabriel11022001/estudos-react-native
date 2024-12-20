import { StyleSheet, View } from "react-native";
import estilos from "./assets/styles/estilos";
import Card from "./components/Card";
import ValidarDados from "./validar_dados";

export default function App() {

  return (
    <View style={estilos.container}>
      <Card
        largura={ "100%" }
        altura={ 200 }
        texto="primeiro card"
        corFundo="#000000" />
      <Card
        largura={ "100%" }
        altura={ 200 }
        texto="segundo card"
        corFundo="red" />
    </View>
  );
}