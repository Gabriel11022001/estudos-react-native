import { createDrawerNavigator } from "@react-navigation/drawer";

export default function NavegacaoDrawer(props) {

    const telas = props.telas ?? [];
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator 
            initialRouteName={ telas[ 0 ].nomeTela }
            screenOptions={ {
                
            } } >
            <Drawer.Screen
                name={ telas[ 0 ].nomeTela }
                component={ telas[ 0 ].componenteTela }
                options={ {
                    title: telas[ 0 ].tituloTela
                } } />
            <Drawer.Screen
                name={ telas[ 1 ].nomeTela }
                component={ telas[ 1 ].componenteTela }
                options={ {
                    title: telas[ 1 ].tituloTela
                } } />
            <Drawer.Screen
                name={ telas[ 2 ].nomeTela }
                component={ telas[ 2 ].componenteTela }
                options={ {
                    title: telas[ 2 ].tituloTela
                } } />
        </Drawer.Navigator>
    );
}