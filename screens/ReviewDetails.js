import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { globalStyles } from '../styles/Global'

export default function ReviewDetails({ navigation }) {

    const onPressHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails screen</Text>
            <Button title='Back to home screen' onPress={onPressHandler}/>
        </View>
    )
}