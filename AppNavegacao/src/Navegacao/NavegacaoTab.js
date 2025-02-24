import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NavegacaoTab(props) {

    // utilizar navegação tab
    const Tab = createBottomTabNavigator();
    const telas = props.telas ?? [];

    return (
        <Tab.Navigator
            initialRouteName={ telas[ 0 ].nomeTela }
            screenOptions={ {
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "#bdc3c7",
                tabBarLabelStyle: {
                    fontSize: 16
                },
                tabBarStyle: {
                    backgroundColor: "white",
                    height: 70
                }
            } } >
            { /** telaA Tab Navigation */ }
            <Tab.Screen
                name={ telas[ 0 ].nomeTela }
                component={ telas[ 0 ].componenteTela }
                options={ {
                    tabBarLabel: telas[ 0 ].tituloTela,
                    tabBarIcon: ({ color, size }) => (
                        // definir icone
                        <MaterialCommunityIcons name="home" color={ color } size={ size } />
                    )
                } } />
            { /** telaB Tab Navigation */ }
            <Tab.Screen
                name={ telas[ 1 ].nomeTela }
                component={ telas[ 1 ].componenteTela }
                options={ {
                    tabBarLabel: telas[ 1 ].tituloTela,
                    tabBarIcon: ({ color, size }) => (
                        // definir icone
                        <MaterialCommunityIcons name="bell" color={ color } size={ size } />
                    )
                } } />
            { /** telaC Tab Navigation */ }
            <Tab.Screen
                name={ telas[ 2 ].nomeTela }
                component={ telas[ 2 ].componenteTela }
                options={ {
                    tabBarLabel: telas[ 2 ].tituloTela,
                    tabBarIcon: ({ color, size }) => (
                        // definir icone
                        <MaterialCommunityIcons name="account" color={ color } size={ size } />
                    )
                } } />
        </Tab.Navigator>
    );
}