import {Button, View} from 'react-native';
import React from 'react';

const ToggleTheme = (props) => {
    return (<Button
        onPress={() => props.toggleTheme()}
        title="Toggle Dark Mode">
    </Button>);
}

export default ToggleTheme;
