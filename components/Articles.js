import {Button, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Articles = props => {
    return (
            <View key={props.n} style={styles.container}>
                <Text
                    onPress={() => props.star(props.n, props.news[props.n] )}
                    style={styles.favourite}>keur
                </Text>
                <Text  style={props.darkMode} onPress={() => Linking.openURL(props.news[props.n])}>
                    {props.n}
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    favourite: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'pink',
        padding: 1
    },
    container: {
        flexDirection:'row',
        flexWrap:'wrap'
    }
})

export default Articles;
