import React from 'react'
import { View, Text, TextBase } from 'react-native'

import { globalStyles } from '../styles/Global'

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
        </View>
    )
}