import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardScreen from './DashboardScreen.js';
import UnitScreen from './UnitScreen.js';
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAweSome, { SolidIcons } from "react-native-fontawesome"
import { View, Text, Dimensions } from 'react-native'


const Tab = createBottomTabNavigator()


export default function HomeScreen() {
    return (
        <Tab.Navigator 
            tabBarOptions = {{
                showLabel: false
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={DashboardScreen} 
                options={{
                    tabBarIcon: ({focused}) => {
                        const color = focused ? '#e32f45': '#748c94'

                        return <View >
                            <Ionicons name="home-outline" 
                                style={{color: color, textAlign: "center"}} 
                                size={20} />
                            <Text style={{color: color}} >Home</Text>
                        </View>
                    }
                }}
                />
            <Tab.Screen 
                name="Unit" 
                component={UnitScreen} 
                options={{
                    tabBarIcon: ({focused}) => {
                        const color = focused ? '#e32f45': '#748c94'

                        return <View>
                            <Ionicons name="add-circle-outline" 
                                style={{color: color, textAlign: "center"}} 
                                size={20} />
                            <Text style={{color: color}} >Unit</Text>
                        </View>
                    }
                }}
            />
        </Tab.Navigator>
    );
}
