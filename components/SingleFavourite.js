import {Button, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Fav = props => {

    return (
        <View style={styles.container}>
            <Text  style={props.darkMode} onPress={() => Linking.openURL(props.f[1])}>
                {props.f[0]}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        flexWrap:'wrap'
    }
})

export default Fav;
