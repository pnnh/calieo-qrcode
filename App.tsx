import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

export default function App() {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Hello, world!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {padding: 10},
    text: {fontWeight: 'bold'}
});
