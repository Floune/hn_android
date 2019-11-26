import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Fav from './SingleFavourite';

export default class Favourites extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favourites: []
        }
    }

    componentDidMount() {
        this.getStarr()
    }

    getStarr = async () => {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)
        console.log('FAVVSSs', items)
        this.setState({favourites: items})
    }


    render() {
        const { navigation } = this.props;
        return (
            <View style={navigation.getParam('isDarkMode')}>
            <Button
                title="Home page"
                onPress={() => this.props.navigation.navigate('Home')}
            />

                {
                    this.state.favourites.map((f) => {
                        return(
                            <Fav
                                f={f}
                                darkMode={navigation.getParam('isDarkMode')}
                            />
                        )
                    })
                }
                <Button
                    color={'red'}
                    title="! Clear favourites !"
                    onPress={() => {
                        AsyncStorage.clear()
                        this.getStarr()
                    }}
                />
            </View>
        )
    }
}
