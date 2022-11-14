import React, { useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import ResultImc from './resultimc'

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha a altura e o peso..'); 
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
                onChangeText={setHeight}
                value={height}
                placeholder='Ex: 1.72'//placeholder preenche a caixa de texto antes do usuário interagir
                keyboardType='numeric'//chama o teclado para o usuário
                />

                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex: 60.6'
                keyboardType='numeric'
                />
            </View>
            <View>
                <Button 
                onPress={()=> validationImc()} //chamada da função de calcular quando pressionar o botão
                title={textButton}//descrição do botão
                />
            </View>
            <ResultImc 
            messageResultImc={messageImc} //mensagem setada
            resultImc={imc} //resultado calculado
            />
        </View>
    );
}