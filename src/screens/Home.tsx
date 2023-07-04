import {View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home(){
    const {navigate} = useNavigation();
    return(
        <View style={styles.container}>
            <Button 
                title='Ir para a tela Settings'
                onPress={() => navigate('Settings')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})