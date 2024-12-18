import { Image } from "react-native";

/**
 * na criação de componentes, eu posso passar um parâmetro
 * para as funções que representam o componente, nomeada como props,
 * a partir desse parâmetro, eu acesso os valores de todas as propriedades
 * que eu passar para o componente, eu também posso desestruturar as props
 * utlizando do recurso { primeiraProp, segundaProp, terceiraProp } do javascript, dessa forma
 * não preciso ficar acessando props.<nome da propriedade>, pois esse parâmetro props
 * na verdade é um objeto javascript
 */
export default function ApresentaFotoSteveJobs(props) {

    return <Image
       source={{ uri: props.urlFoto }}
       style={{
        width: '100%',
        height: 200,
        margin: 20
       }} />
}