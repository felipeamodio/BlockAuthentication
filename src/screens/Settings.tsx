import {View, StyleSheet, Text} from 'react-native';
import { useScreenGuard } from '../hooks/useScreenGuard';

export default function Settings(){
    useScreenGuard('Settings');
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>SETTINGS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})