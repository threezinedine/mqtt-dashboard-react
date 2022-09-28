import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen  from './src/HomeScreen.js';

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <HomeScreen />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        backgroundColor: '#fff',
    },
});
