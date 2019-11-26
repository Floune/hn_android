import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Linking, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ToggleTheme from './ToggleTheme';
import Articles from './Articles';
import * as axios from 'axios';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkTheme: false,
            favourites: {}
        }
    }

    componentDidMount() {
        console.log('mounted')
        this.setNews()
    }

    setNews() {
        const url = "https://hapinews.herokuapp.com/api/v0/hp";
        axios.get(url).then((res) => {
            this.setState({news: res.data});
        }).catch((e) => {
            console.log('erreur: ', e)
        });

    }

    starr = async (title, link) => {
        await AsyncStorage.setItem( title, link)
    }

    toggleTheme = () => {
        const nextTheme = !this.state.darkTheme;
        this.setState({
            darkTheme: nextTheme,
        });
    }

    render() {
        let isDarkMode = this.state.darkTheme ? [styles.darkMode, styles.darkModeText] : [styles.lightMode, styles.lightModeText];
       if (!this.state.news) { return <Text>Fetching data from amazing api</Text>}
        return (
            <>
                <ScrollView style={isDarkMode}>
                    <Button
                        title="Bookmarks"
                        onPress={() => this.props.navigation.navigate('Favourites', {isDarkMode: isDarkMode, favourites: this.state.favourites})}
                    />
                    <ToggleTheme
                        toggleTheme={this.toggleTheme}
                    />
                    {
                        Object.keys(this.state.news).map((n) => {
                            return (
                                <Articles
                                    news={this.state.news}
                                    n={n}
                                    darkMode={isDarkMode}
                                    star={this.starr}
                                />)
                        })
                    }
                </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    darkMode: {
        backgroundColor: 'rgb(40, 44, 52)',
    },
    darkModeText: {
        color: '#E0E0E0'
    },
    lightModeText: {
        color: 'rgb(40, 44, 52)'
    },
    lightMode: {
        backgroundColor: '#E0E0E0'
    },
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
});
