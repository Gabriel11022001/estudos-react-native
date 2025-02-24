import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function NavegacaoStack({ telas }) {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName={ telas[ 0 ].nomeTela } >
            { /** tela Home */ }
            <Stack.Screen name={ telas[ 0 ].nomeTela } component={ telas[ 0 ].componenteTela } options={ ({ navigation }) => {

                return {
                    title: telas[ 0 ].tituloTela,
                    headerRight: () => (
                        <TouchableOpacity onPress={ () => {
                            navigation.navigate(telas[ 1 ].nomeTela);
                        } }>
                            <Ionicon name="add" size={ 30 } color="black" />
                        </TouchableOpacity>
                    ) 
                };
            } } />
            <Stack.Screen name={ telas[ 1 ].nomeTela } component={ telas[ 1 ].componenteTela } options={ {
                title: telas[ 1 ].tituloTela 
            } } />
        </Stack.Navigator>
    );
}