import React, { useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import ResultImc from './resultimc'

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha a altura e o peso'); 
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalcula(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalcula();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular novamente");
            return;
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha a altura e o peso")
    }

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
            <View>
                <Button title='Calcular IMC'/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}