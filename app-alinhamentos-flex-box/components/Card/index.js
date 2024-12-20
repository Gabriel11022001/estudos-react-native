import { Text, View } from "react-native";
import estilos from "../../assets/styles/estilos";

export default function Card({ largura, altura, texto, corFundo }) {

    return <View style={ [
        estilos.card,
        {
            backgroundColor: corFundo,
            height: altura,
            width: largura
        }
    ] }> 
        <Text style={ estilos.textoCard }>{ texto }</Text>
    </View>
}
