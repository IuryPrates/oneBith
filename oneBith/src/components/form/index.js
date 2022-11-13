import React from 'react'
import { TextInput, View, Text } from 'react-native'

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder='Ex: 1.72'
                keyboardType='numeric'/>
                <Text>Peso</Text>
                <TextInput
                placeholder='Ex: 60.6'
                keyboardType='numeric'/>
            </View>
            <Form/>
        </View>
    );
}