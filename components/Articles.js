import {Button, ImageBackgroundComponent, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Line = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    background-color: #333;
    color: #ccc;
`
const Title = styled.Text`
color: #ccc;
padding-right:5px;
`
const IconButton = styled.Text`
    padding: 3px;
`
const Articles = props => {
    return (
            <Line key={props.n}>
                <Title onPress={() => Linking.openURL(props.news[props.n])}>
                    {props.n}
                </Title>
                <IconButton
                    onPress={() => props.star(props.n, props.news[props.n] )}
                    ><Icon name="heart" />
                </IconButton>
            </Line>
    )
}



export default Articles;
