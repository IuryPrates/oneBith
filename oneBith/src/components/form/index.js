import React, { useState } from 'react'
import { 
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
} from 'react-native'
import ResultImc from './resultimc'
import styles from './style'

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha a altura e o peso..'); 
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    //adiciona estado para controle de aviso quando o campo está vazio
    const [errorMessage, setErrorMessage] = useState(null) 
 
    function imcCalcula(){
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("campo obrigatório**")
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalcula();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular novamente");
            setErrorMessage(null)
            return;
        }
        verificationImc();
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha a altura e o peso")
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>

                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex: 1.72'//placeholder preenche a caixa de texto antes do usuário interagir
                keyboardType='numeric'//chama o teclado para o usuário
                />

                <Text style={styles.formLabel}>Peso</Text>

                <Text style={styles.errorMessage}>{errorMessage}</Text>
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
        </Pressable>
    );
}