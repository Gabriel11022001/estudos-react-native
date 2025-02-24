import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NavegacaoStack = (props) => {

    const telasNavegacaoStack = props.telas ?? [];
    const Stack = createNativeStackNavigator();

    return (
        // componente que serve para definir que vou utilizar uma navegação no modelo stack
        <Stack.Navigator initialRouteName={ telasNavegacaoStack[ 0 ].nomeTela }>
            { /** definir a telaA */ }
            <Stack.Screen
                name={ telasNavegacaoStack[ 0 ].nomeTela }
                component={ telasNavegacaoStack[ 0 ].componenteTela }
                options={ {
                    title: telasNavegacaoStack[ 0 ].tituloTela
                } } />
            { /** definir a telaB */ }
            <Stack.Screen
                name={ telasNavegacaoStack[ 1 ].nomeTela }
                component={ telasNavegacaoStack[ 1 ].componenteTela }
                options={ {
                    title: telasNavegacaoStack[ 1 ].tituloTela
                } } />
            { /** definir a telaC */ }
            <Stack.Screen
                name={ telasNavegacaoStack[ 2 ].nomeTela }
                component={ telasNavegacaoStack[ 2 ].componenteTela }
                options={ {
                    title: telasNavegacaoStack[ 2 ].tituloTela
                } } />
        </Stack.Navigator>
    );
}

export default NavegacaoStack;