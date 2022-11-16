import React, { useState } from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import ResultImc from './resultimc'
import styles from './style'

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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex: 1.72'//placeholder preenche a caixa de texto antes do usuário interagir
                keyboardType='numeric'//chama o teclado para o usuário
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex: 60.6'
                keyboardType='numeric'
                />
                <TouchableOpacity
                style={styles.formButton} 
                onPress={()=> validationImc()} //chamada da função de calcular quando pressionar o botão
                >
                <Text style={styles.textFormButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc 
            messageResultImc={messageImc} //mensagem setada
            resultImc={imc} //resultado calculado
            />
        </View>
    );
}